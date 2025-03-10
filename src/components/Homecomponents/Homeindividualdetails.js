import React from "react";
import Componentfadeanimation from "../../Animations/Componentfadeanimation";

const Homeindividualdetails = () => {
    return (
        <div className="container text-center">
            {/* Header Section */}
            <h2 className="fw-bold mb-4" style={{ fontFamily: "'Dancing Script', cursive", color: "rgb(255, 0, 255)", }}>
                Happy Couple
            </h2>

            <div className="row align-items-center justify-content-center" >
                {/* Left Person */}





                {/* Left Person */}
                <div className="col-md-5 col-lg-4 mb-4">
                    <Componentfadeanimation initial={{ opacity: 0, scale: 0, transform: "translateY(100px)" }} animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }} other={{ duration: 1 }}>

                        <div className="card" style={{
                            backgroundColor: "transparent",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adding box-shadow
                            border: "none", // Removing border
                            borderRadius: "10px", // Optional: Adding subtle rounding for better aesthetics
                        }}>
                            <img
                                src="Images/pp1.jpg"
                                alt="Sai Prasanna"
                                className="rounded-circle mx-auto mt-4 d-block"
                                style={{ width: "200px", height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title fw-bold" style={{
                                    color: "rgb(255, 0, 255)",
                                    fontFamily: "Sacramento, cursive",
                                    fontSize: "2rem",
                                    textAlign: "center", fontWeight: "bold"

                                }}>Sai Prasanna</h5>
                                <p className="card-text">
                                    Kakinada, Andhra Pradesh.
                                </p>
                                <div>
                                    <a href="#facebook" className="text-decoration-none me-3">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                    <a href="#twitter" className="text-decoration-none me-3">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                    <a href="#google" className="text-decoration-none me-3">
                                        <i className="bi bi-google"></i>
                                    </a>
                                    <a href="#linkedin" className="text-decoration-none">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Componentfadeanimation>
                </div>


                {/* Heart Icon */}

                {/* <Componentfadeanimation initial={{ opacity: 0, scale: 0, transform: "translateY(100px)" }} animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }} other={{ duration: 1 }}> */}
                <div className="col-2 d-flex align-items-center justify-content-center mb-4">
                    <img
                        src="Images/heart2.png"
                        alt="Heart"
                        style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "contain",
                        }}
                    />
                </div>
                {/* </Componentfadeanimation> */}

                {/* right Person */}
                <div className="col-md-5 col-lg-4 mb-4">
                    <Componentfadeanimation initial={{ opacity: 0, scale: 0, transform: "translateY(100px)" }} animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }} other={{ duration: 1 }}>

                        <div className="card" style={{
                            backgroundColor: "transparent",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adding box-shadow
                            border: "none", // Removing border
                            borderRadius: "10px", // Optional: Adding subtle rounding for better aesthetics
                        }}>
                            <img
                                src="Images/pp2.jpg"
                                alt="Deva Divya"
                                className="rounded-circle mx-auto mt-4 d-block"
                                style={{ width: "200px", height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title fw-bold" style={{
                                    color: "rgb(255, 0, 255)",
                                    fontFamily: "Sacramento, cursive",
                                    fontSize: "2rem",
                                    textAlign: "center", fontWeight: "bold"

                                }}>Divya</h5>
                                <p className="card-text">
                                    Peddipalem, Andhra pradesh.
                                </p>
                                <div>
                                    <a href="#facebook" className="text-decoration-none me-3">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                    <a href="#twitter" className="text-decoration-none me-3">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                    <a href="#google" className="text-decoration-none me-3">
                                        <i className="bi bi-google"></i>
                                    </a>
                                    <a href="#linkedin" className="text-decoration-none">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Componentfadeanimation>
                </div>
            </div>
        </div>
    );
};

export default Homeindividualdetails;
