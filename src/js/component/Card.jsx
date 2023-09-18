import React from "react";
import PropType from "prop-types";
const Card = (Props) => {
  return (
    <div>
      <div className="card-group mt-5">
            <div className="card">
              <img src="" />
              <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque.
                </p>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
        </div>
            {/* <div className="card">
              <img src="" />
              <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.Explicabo magni sapiente, tempore debitis beatae culpa
                  natus architecto.
                </p>
                <div className="footer bg-light">
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="" />
              <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque.
                </p>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="" />
              <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.Explicabo magni sapiente, tempore debitis beatae culpa
                  natus architecto.
                </p>
                <div className="footer bg-light ">
                  <a href="#" className="btn btn-primary">
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
          </div> */}
    </div>
  );
};
Card.PropType = {
  Text: PropType.string,
};

export default Card;
