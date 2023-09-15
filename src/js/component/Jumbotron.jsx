import React from "react";
const Jumbotron = () => {
  return (
    <>
    <div className="container-fluid p-5 bg-secondary">
      <div className="jumbotron">
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p className="lead">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, 
         in quo sunt possimus incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Call to action!
          </a>
        </p>
      </div>
    </div>
    </>
  );
};
export default Jumbotron;
