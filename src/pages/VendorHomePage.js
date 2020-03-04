import React from "react";
import MaterialTable from "material-table";
import { Fab } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import {
  Search,
  FirstPage,
  LastPage,
  Clear,
  ChevronLeft,
  ChevronRight
} from "@material-ui/icons";
import { TableSortLabel } from "@material-ui/core/";
import RedeemIcon from "@material-ui/icons/Redeem";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

function createJson(username, firstname, lastname, email) {
  return {
    username: username,
    firstname: firstname,
    lastname: lastname,
    email: email
  };
}

function VendorHomePage() {
  const token = localStorage.getItem("token");
  const history = useHistory();
  const [currentVendor, setCurrentVendor] = React.useState(null);
  const [users, setUsers] = React.useState([]);
  const [collapsed, setCollapsed] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const toggleNavbar = () => setCollapsed(!collapsed);

  React.useEffect(() => {
    if (token) {
      fetch(process.env.BACKEND_STRING + "/vendor-home", {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(u => {
          setUsers(u);
        });
    } else {
      history.push("/vendor-login");
    }
  }, [token]);

  React.useEffect(() => {
    if (token) {
      fetch(process.env.BACKEND_STRING + "/get-current-vendor", {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(u => {
          setCurrentVendor(u["username"]);
        });
    }
  }, [token]);

  function handleClaim(username, vendorname, datetime) {
    fetch(process.env.BACKEND_STRING + "/log-claim", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        vendorname,
        datetime
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);

        if (res.success === false) {
          setErrorMessage(res.message);
        } else {
          setErrorMessage("");
          alert("Success! " + username + " claimed from " + vendorname);
        }
      });
  }

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
        paddingBottom: "60%"
      }}
    >
      <Navbar dark sticky="top" style={{ backgroundColor: "black" }}>
        <NavbarBrand
          tag={Link}
          to={"/"}
          className="mr-auto"
          style={{ fontSize: "30px" }}
        >
          nanovert
        </NavbarBrand>
        <div style={{ marginRight: "20px" }}>{currentVendor}</div>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink
                tag={Link}
                onClick={() => {
                  localStorage.removeItem("token");
                  history.push("/vendor-login");
                }}
              >
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <MaterialTable
        style={{ margin: "5%", backgroundColor: "white" }}
        title="Verified Users"
        options={{
          defaultExpanded: true,
          paging: false
        }}
        icons={{
          Search: Search,
          FirstPage: FirstPage,
          LastPage: LastPage,
          PreviousPage: ChevronLeft,
          NextPage: ChevronRight,
          SortArrow: TableSortLabel,
          ResetSearch: Clear
        }}
        columns={[
          { title: "Username", field: "username" },
          { title: "First Name", field: "firstname" },
          { title: "Last Name", field: "lastname" },
          { title: "Email", field: "email" }
        ]}
        data={users.map(u =>
          createJson(u.username, u.firstname, u.lastname, u.email)
        )}
        actions={[
          {
            icon: "save",
            tooltip: "Save User",
            onClick: (event, rowData) => {
              var d = new Date();
              handleClaim(rowData.username, currentVendor, d);
            }
          }
        ]}
        components={{
          Action: props => (
            <Fab
              onClick={event => props.action.onClick(event, props.data)}
              color="primary"
              variant="contained"
              style={{ textTransform: "none" }}
              size="medium"
              disableElevation="true"
            >
              <RedeemIcon />
            </Fab>
          )
        }}
      />
    </div>
  );
}

export default VendorHomePage;
