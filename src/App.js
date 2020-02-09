import React from "react";
import "./App.css";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import LoginPage from "./pages/VendorLoginPage";
import VendorHomePage from "./pages/VendorHomePage";
import HomePage from "./pages/HomePage";



function App() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/vendor-login">
                    <LoginPage />
                </Route>
                <Route path="/vendor-home">
                    <VendorHomePage />
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
