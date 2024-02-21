import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../Styles.css";
import { useNavigate } from "react-router-dom";
import image3 from "../../assets/image3.png";
import OtpInput from "react-otp-input";
import { Bars } from "react-loader-spinner";

const PinLogin = () => {
  const navigation = useNavigate();
  const [error, setError] = useState("#D5D4D2");
  const [firstPin, setFirstPin] = useState("");

  const handleMpin = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3500/mpin", { mpin: firstPin })
      .then((result) =>
        result.data === "success" ? navigation("/dashboard") : setError("red")
      )
      .catch((err) => console.log(err));
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Bars
            height="80"
            width="80"
            color="#40a1ed"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="wrapper">
          <div className="page-body auth px-xl-4 px-sm-2 px-0 py-lg-2 py-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 d-none d-lg-flex justify-content-center align-items-center">
                  <div className="background">
                    <h1>WELCOME</h1>
                    <img src={image3} className="img" />
                    <span>Copyright © 2023 Orive Solutions.</span>
                  </div>

                  <div> </div>
                </div>
                <div className="col-lg-5 d-flex justify-content-center align-items-center">
                  <div className="card shadow-sm w-100 p-5 p-md-4 card-mpin">
                    {/* Form */}
                    <form
                      className="row g-4 px-6"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="col-8 text-center   ">
                        <h1 className="mt-4  heading">ENTER PIN </h1>
                      </div>
                      <div className="col-12 text-center ">
                        <span>YOUR MPIN</span>
                      </div>

                      <div className="mpin">
                        <OtpInput
                          value={firstPin}
                          onChange={setFirstPin}
                          numInputs={4}
                          renderSeparator={
                            <span style={{ width: "3rem" }}></span>
                          }
                          renderInput={(props) => (
                            <input className="inputWidth" {...props} />
                          )}
                          inputStyle={{
                            border: `1px solid ${error}`,
                            borderRadius: "8px",
                            width: "80px",
                            height: "54px",
                            fontSize: "12px",
                            color: "#000",
                            fontWeight: "400",
                            caretColor: "blue",
                            marginTop: "50px",
                          }}
                        />
                      </div>

                      <div
                        className="col-12 text-end"
                        style={{
                          marginTop: "20px",
                          paddingRight: "30px",
                          color: "gray",
                          cursor: "pointer",
                        }}
                        onClick={() => navigation("/set-mpin")}
                      >
                        <span>Forgot MPIN ?</span>
                      </div>

                      <div
                        className="col-12 text-center set-up"
                        onClick={handleMpin}
                      >
                        <a
                          className="btn btn-lg btn-block btn-dark lift text-uppercase"
                          href=""
                          title=""
                        >
                          Submit
                        </a>
                      </div>
                      {/* <div className="col-12 text-center mt-4">
                  <span className="text-muted">
                    Don't have an account yet?{" "}
                    <a href="auth-signup.html">Sign up here</a>
                  </span>
                </div> */}
                    </form>
                    {/* End Form */}
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PinLogin;
