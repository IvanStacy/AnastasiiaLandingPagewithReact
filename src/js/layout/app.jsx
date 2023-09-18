import React from "react";
import Navbar from "../component/Navbar";
import Jumbotron from "../component/Jumbotron";
import Card from "../component/Card";
import Footer from "../component/Footer";





const App = () =>{
    return (
        <>
        <Navbar/>
        <div className="container">
            <Jumbotron/>
                <div className="cards d-flex">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
        </div>
        <Footer/>
        </>
    )
};
export default App;