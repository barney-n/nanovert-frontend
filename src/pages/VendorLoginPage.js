import React from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";

function VendorLoginPage() {
  const history = useHistory();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://nanovert-backend.herokuapp.com/vendor-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);

        if (res.success === false) {
          setErrorMessage(res.message);
        } else {
          setErrorMessage("");
          localStorage.setItem("token", res.token);
          history.push("/vendor-home");
        }
      });
  }

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
        height: "100vh"
      }}
    >
      <Navbar dark sticky="top">
        <NavbarBrand
          tag={Link}
          to={"/"}
          className="mr-auto"
          style={{ fontSize: "30px", marginLeft: "1%" }}
        >
          nanovert
        </NavbarBrand>
      </Navbar>

      <h3>Log In</h3>

      <Form
        onSubmit={handleSubmit}
        style={{ marginRight: "30%", marginLeft: "30%" }}
      >
        <FormGroup>
          <Label for="Username">Username</Label>
          <InputGroup>
            <Input
              type="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for="Password">Password</Label>
          <InputGroup>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </InputGroup>
        </FormGroup>

        <Button variant="contained" type="submit">
          Log In
        </Button>
        <br />
        {errorMessage}
      </Form>
    </div>
  );
}

export default VendorLoginPage;
