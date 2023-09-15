import React from "react";
import PropType from "prop-types";
const Card = (Props) =>{
    return(
        <div>
        <div className="card-group mt-5">
        <div className="card">
                <img src=""/>
                <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                 </div>
            </div>
            <div className="card">
                <img src=""/>
                <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                 </div>
            </div>
            <div className="card">
                <img src=""/>
                <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                 </div>
            </div>
            <div className="card">
                <img src=""/>
                <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                 </div>
            </div>
        </div>
        </div>
    )
};
Card.PropType={
    Text: PropType.string
};

export default Card;