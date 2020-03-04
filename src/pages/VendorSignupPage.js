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

function VendorSignupPage() {
  const history = useHistory();

  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch(process.env.BACKEND_STRING + "/vendor-signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        email,
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
          history.push("/");
        }
      });
  }

  return (
    <div>
      <h2>
        <Link to={`/`}>NANOVERT</Link>
      </h2>
      <h3>
        <Link to={`/vendor-login`}>Vendor Login</Link>
      </h3>
      <h3>Sign Up:</h3>
      <Form onSubmit={handleSubmit}>
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
          <Label for="Email">Email</Label>
          <InputGroup>
            <Input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for="Password">Password</Label>
          <InputGroup>
            <Input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </InputGroup>
        </FormGroup>

        <br />
        <Button>Sign Up</Button>
        <br />
        {errorMessage}
      </Form>
    </div>
  );
}

export default VendorSignupPage;
