import React from "react";
import { useHistory, Link } from "react-router-dom";
import signup from "../images/signup.png";
import connect from "../images/connect.png";
import wait from "../images/wait.png";
import restaurant from "../images/restaurant.jpg";
import socialMedia from "../images/socialMedia.jpg";
import blackSheepIcon from "../images/blacksheepIcon.jpeg";
import whiterabbitIcon from "../images/whiterabbitIcon.jpeg";
import manyMore from "../images/manyMore.png";
import tripletwoIcon from "../images/tripletwoIcon.png";
import WorkingWithCard from "../components/WorkingWithCard";
import InstructionCard from "../components/InstructionCard";
import ShortcutButton from "../components/ShortcutButton";
import LandingNavbar from "../components/LandingNavbar";

import {
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";

function HomePage() {
  const history = useHistory();

  const [username, setUsername] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(true);
  const [policyTick, setPolicyTick] = React.useState(false);
  const toggleNavbar = () => setCollapsed(!collapsed);

  function handleSubmit(e) {
    e.preventDefault();

    if (policyTick) {
      fetch("https://nanovert-backend.herokuapp.com/user-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          firstname,
          lastname,
          email
        })
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);

          if (res.success === false) {
            setErrorMessage(res.message);
            alert(res.message);
            window.location.reload(false);
          } else {
            setErrorMessage("");
            history.push("/");
            alert(
              "Signed Up! Remember to follow @nanovertuk on Instagram. " +
                username +
                " has been added."
            );
            window.location.reload(false);
          }
        });
    } else {
      alert("Sorry, you need to agree to our data policy to sign up.");
    }
  }

  return (
    <div
      style={{
        textAlign: "center",
        color: "white",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black"
      }}
    >
      <LandingNavbar />

      <Jumbotron
        style={{
          background: `url(${restaurant})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "100vh",
          width: "auto",
          paddingTop: "9%"
        }}
      >
        <h1>
          <b>Get rewards for your Instagram stories!</b>
        </h1>
        <p>Connecting nano-influencers with local businesses.</p>
        <br />
        <div class="container">
          <Container style={{ marginBottom: "3%", width: "70%" }}>
            <ShortcutButton linkTo="#signup" buttonText="Sign Up" />
            <br />
            <ShortcutButton linkTo="#about" buttonText="Learn More" />
          </Container>
        </div>
      </Jumbotron>

      <Jumbotron
        style={{ backgroundColor: "black", paddingTop: "0" }}
        id="about"
      >
        <div>
          <h1>Tell Me More</h1>
          <br />
          <p
            style={{
              fontSize: "20px",
              paddingRight: "10%",
              paddingLeft: "10%"
            }}
          >
            Nanovert is a new platform connecting students with local
            businesses. We believe that all people should be rewarded for giving
            brands exposure and not just “influencers”. The idea is simple… all
            you have to do is post aesthetic instagram stories at local
            establishments, with a geo-tag for the business and you’ll be
            rewarded with freebies and even money.{" "}
          </p>
          <br />
          <hr className="my-2" />
          <br />
          <p
            style={{
              fontSize: "20px",
              paddingRight: "10%",
              paddingLeft: "10%",
              paddingBottom: "5%"
            }}
          >
            For businesses, we believe 100 nano-influencers can have a greater
            impact than one influencer for a fraction of the cost.
          </p>
          <row>
            <img
              src={require("../images/nanovertIcon.jpeg")}
              height="130"
              width="auto"
            ></img>
          </row>
        </div>
      </Jumbotron>

      <div
        style={{
          backgroundImage: `url(${socialMedia})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          color: "white",
          margin: "0"
        }}
      >
        <h1 style={{ paddingTop: "10%" }}>How it works</h1>
        <Container style={{ marginBottom: "20px", width: "100%" }}>
          <Row
            style={{
              marginLeft: "30px",
              marginRight: "30px",
              paddingTop: "30%",
              paddingBottom: "5%"
            }}
          >
            <InstructionCard
              imageSource={signup}
              titleText="Sign Up"
              bodyText="Sign up using the form below and we'll add you to our
                    database of nano-influencers."
            />
            <InstructionCard
              imageSource={connect}
              titleText="Connect"
              bodyText="Follow @nanovertuk on Instagram and let us follow you back."
            />
            <InstructionCard
              imageSource={wait}
              titleText="Claim!"
              bodyText="We'll email you and post on Instagram when businesses have
              offers available."
            />
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "black", color: "white" }}>
        <h1 style={{ marginTop: "5%" }}>We're already working with ... </h1>

        <Container style={{ marginBottom: "3%", width: "70%" }}>
          <Row>
            <WorkingWithCard
              imageSource={blackSheepIcon}
              vendorName="Black Sheep Coffee"
              instagramLink="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODYzNTE2MTE0NjU0MjEw?igshid=11mo1ug1sjg3c"
            />
            <WorkingWithCard
              imageSource={whiterabbitIcon}
              vendorName="The White Rabbit Oxford"
              instagramLink="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDg1Mjc0MzQ0MTQ3NDc2?igshid=102x4jqxlmtd2"
            />
            <WorkingWithCard
              imageSource={tripletwoIcon}
              vendorName="Triple Two Coffee"
              instagramLink="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDIyNzIzMzM5MjYyNzI3?igshid=1r0ynsqhhcnqo"
            />
            <WorkingWithCard
              imageSource={manyMore}
              vendorName="Many more to come!"
            />
          </Row>
        </Container>

        <h1>Sign Up</h1>
        <br />

        <Form
          id="signup"
          onSubmit={handleSubmit}
          style={{ width: "300px", margin: "auto", paddingBottom: "5%" }}
        >
          <FormGroup>
            <Label for="Username">Instagram Handle</Label>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>@</InputGroupText>
              </InputGroupAddon>
              <Input
                type="username"
                name="username"
                placeholder="Instagram Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </InputGroup>
          </FormGroup>
          <p>
            Remember to follow @nanovertuk on Instagram and let us follow you
            back
          </p>

          <FormGroup>
            <Label for="firstname">First Name</Label>
            <Input
              type="firstname"
              name="firstname"
              placeholder="First Name"
              value={firstname}
              onChange={e => setFirstname(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="lastname">Last Name</Label>
            <Input
              type="lastname"
              name="lastname"
              placeholder="Last Name"
              value={lastname}
              onChange={e => setLastName(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="Email">University Email</Label>
            <Input
              type="Email"
              name="Email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="DataPolicy"
                value={policyTick}
                onChange={t => setPolicyTick(!policyTick)}
              />{" "}
              I agree nanovert can share my data with its partners.
            </Label>
          </FormGroup>

          <br />

          <Button type="submit">Submit</Button>
        </Form>
      </div>

      <div
        style={{
          backgroundColor: "black",
          paddingBottom: "3%",
          color: "white"
        }}
      >
        <p>nanovertuk@gmail.com</p>
        <small>Copyright &copy; 2019 - nanovert</small>
      </div>
    </div>
  );
}

export default HomePage;
