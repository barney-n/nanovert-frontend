import React from "react";
import { useHistory, Link } from "react-router-dom";
import signup from "../images/signup.png"
import connect from "../images/connect.png"
import wait from "../images/wait.png"
import restaurant from "../images/restaurant.jpg"
import socialMedia from "../images/socialMedia.jpg"
import blackSheepIcon from "../images/blacksheepIcon.jpeg"
import whiterabbitIcon from "../images/whiterabbitIcon.jpeg"
import manyMore from "../images/manyMore.png"

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
    InputGroup, 
    Container, 
    Row, 
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
} from 'reactstrap'

function HomePage() {
    const history = useHistory();

    const [username, setUsername] = React.useState("");
    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");    
    const [errorMessage, setErrorMessage] = React.useState("");
    const [collapsed, setCollapsed] = React.useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    function handleSubmit(e) {
        e.preventDefault();

        fetch("https://nanovert-backend.herokuapp.com/user-signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                firstname,
                lastname,
                email,
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);

            if (res.success === false) {
                setErrorMessage(res.message);
            } 
            else {
                setErrorMessage("");
                history.push("/");
                alert("Signup successful. " + username + " has been added.");
                window.location.reload(false);
            }
        });
    }

    return (
        <div style={{textAlign:"center", background:`url(${restaurant})`, backgroundSize:"auto 100vh", color:"white", backgroundRepeat:"no-repeat", backgroundColor:"black"}}>

                <Navbar dark sticky="top" style={{backgroundColor:"transparent"}}>
                    <NavbarBrand tag={Link} to={"/"} className="mr-auto" style={{fontSize:"30px"}}>nanovert</NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" style={{borderColor:"white"}} />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                        <NavItem>
                            <NavLink tag={Link} to={"/vendor-home"} style={{color:"white", textAlign:"right"}}>nanovert Vendor</NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Jumbotron style={{backgroundColor:"transparent", height:"100vh", width:"auto", paddingTop:"9%"}}>
                    <h1 className="display-3"><b>Get rewards for your Instagram stories!</b></h1>
                    <p >Connecting nano-influencers with local businesses.</p>
                    <br/>
                    <br/>
                    <Button style={{
                        backgroundColor:"black",  
                        color:"white", 
                        borderWidth:"3px", 
                        borderColor:"white",
                        }}>
                            <h1>
                                <a href="#signup" style={{textDecoration:"none", color:"white"}}>Sign up</a>
                            </h1>
                        </Button>
                </Jumbotron>

            
                <Jumbotron style={{backgroundColor:"black", paddingTop:"0"}}>
                    <div>
                        <h1>Tell Me More</h1>
                        <br/>
                        <p style={{fontSize:"20px", paddingRight:"10%", paddingLeft:"10%"}} >Nanovert is a new platform connecting students with local businesses. We believe that all people should be rewarded for giving brands exposure and not just “influencers”. The idea is simple… all you have to do is post aesthetic instagram stories at local establishments, with a geo-tag for the business and you’ll be rewarded with money and freebies. </p>
                        <br/>
                        <hr className="my-2" />
                        <br/>
                        <p style={{fontSize:"20px", paddingRight:"10%", paddingLeft:"10%", paddingBottom:"5%"}} >For businesses, we believe 100 nano-influencers can have a greater impact than one influencer for a fraction of the cost.</p>
                        <img src={require("../images/nanovertIcon.jpeg")} height="130" width="auto"></img>
                    </div>
                </Jumbotron>

            <div style={{backgroundImage:`url(${socialMedia})` , backgroundSize:"cover", backgroundPosition:"center center", color:"white", margin:"0"}}>
            <h1 style={{paddingTop:"10%"}}>How it works</h1>
            <Container style={{marginBottom:"20px", width:"100%"}}>
                <Row style={{marginLeft:"30px", marginRight:"30px", paddingTop:"30%", paddingBottom:"5%"}}>
                    <Col style={{width:"250px", marginBottom:"5px"}}>
                        <Card style={{borderRadius:"30px", alignItems:"center", background:"rgba(1,1,1,0.6)", borderColor:"transparent"}}>
                            <CardImg width="100%" src={signup} style={{width:"130px", marginTop:"10px"}} />
                            <CardBody>
                                <CardTitle><h3>Sign Up</h3></CardTitle>
                                <CardText>Sign up using the form below and we'll add you to our database of nano-influencers.</CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col style={{width:"250px", marginBottom:"5px"}}>
                        <Card style={{borderRadius:"30px", alignItems:"center", background:"rgba(1,1,1,0.6)", borderColor:"transparent"}}>
                            <CardImg width="100%" src={connect} style={{width:"130px", marginTop:"10px"}} />
                            <CardBody>
                                <CardTitle><h3>Connect</h3></CardTitle>
                                <CardText>Follow @nanovertuk on Instagram and let us follow you back.</CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col style={{width:"250px", marginBottom:"5px"}}>
                        <Card style={{borderRadius:"30px", alignItems:"center", background:"rgba(1,1,1,0.6)", borderColor:"transparent"}}>
                            <CardImg width="100%" src={wait} style={{width:"130px", marginTop:"10px"}} />
                            <CardBody>
                                <CardTitle><h3>Wait...</h3></CardTitle>
                                <CardText>Be patient, we will get in touch when businesses have offers available</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
            
            <div style={{backgroundColor:"black", color:"white"}}>

                <h1 style={{marginTop:"5%"}}>We're already working with ... </h1>

                <Container style={{marginBottom:"3%", width:"70%"}}>
                    <Row>
                        <Col>
                            <Card style={{borderRadius:"30px", alignItems:"center", background:"transparent", borderColor:"transparent"}}>
                                <CardImg width="100%" src={blackSheepIcon} style={{height:"130px", width:"auto", marginTop:"10px"}} />
                                <CardBody>
                                    <CardTitle>Black Sheep Coffee</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{borderRadius:"30px", alignItems:"center", background:"transparent", borderColor:"transparent"}}>
                                <CardImg width="100%" src={whiterabbitIcon} style={{height:"130px", width:"auto", marginTop:"10px"}} />
                                <CardBody>
                                    <CardTitle>The White Rabbit Oxford</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{borderRadius:"30px", alignItems:"center", background:"transparent", borderColor:"transparent"}}>
                                <CardImg width="100%" src={manyMore} style={{height:"130px", width:"auto", marginTop:"10px"}} />
                                <CardBody>
                                    <CardTitle>Many more to come!</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>


                <h1>Sign Up</h1>
                <br/>

                <Form id="signup" onSubmit={handleSubmit} style={{width:"300px", margin:"auto", paddingBottom:"5%"}}>
                    <FormGroup>
                        <Label for="Username">Username</Label>
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
                        <Label for="Email">Email</Label>
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
                        <Input type="checkbox" />{' '}
                        I agree nanovert can share my data with it's partners.
                        </Label>
                    </FormGroup>

                    <br/>

                    <Button type="submit">Submit</Button>
                </Form>
            </div>
                            
                <div style={{backgroundColor:"black", paddingBottom:"3%", color:"white"}}>
                    <p >nanovertuk@gmail.com</p>
                    <small>Copyright &copy; 2019 - nanovert</small>
                </div>
        </div>
    )    
}

export default HomePage;


