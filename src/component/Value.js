import React from "react";
import "../component/Value.css";

const Value = () => {
  return (
    <>
      <div id="value-main-div">
        <div id="value-div" className="container">
          <div id="value-title-div" className="text-center pb-5">
            <h1>Values</h1>
            <p>
              Our values are anchored around our business ethics, consumer focus
              and
            </p>
            <p>corporate responsibility towards society at large.</p>
          </div>

          <div id="create-div" className="row">
            <div className="col-lg-2 col-12 text-center">
              <div>
                <h1 className="display-3">C</h1>
                <p className="h3">Cost-effective & simple</p>
              </div>
            </div>

            <div className="col-lg-2 col-12 text-center">
              <div>
                <h1 className="display-3">R</h1>
                <p className="h3">Respect for all</p>
              </div>
            </div>

            <div className="col-lg-2 col-12 text-center">
              <div>
                <h1 className="display-3">E</h1>
                <p className="h3">Exemplary governance</p>
              </div>
            </div>

            <div className="col-lg-2 col-12 text-center">
              <div>
                <h1 className="display-3">A</h1>
                <p className="h3">
                  Accountability, professionalism & discipline
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-12 text-center">
              <div>
                <h1 className="display-3">T</h1>
                <p className="h3">CTransparency & integrity</p>
              </div>
            </div>

            <div className="col-lg-2 col-12 text-center">
              <div>
                <h1 className="display-3">E</h1>
                <p className="h3">Effective teamwork and commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Value;
