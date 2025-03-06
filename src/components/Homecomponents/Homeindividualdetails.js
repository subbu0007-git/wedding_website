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

                <div className="col-md-5 col-lg-4 mb-4">
                    <Componentfadeanimation initial={{ opacity: 0, scale: 0, transform: "translateY(100px)" }} animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }} other={{ duration: 1 }}>

                        <div className="card" style={{
                            backgroundColor: "transparent",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adding box-shadow
                            border: "none", // Removing border
                            borderRadius: "10px", // Optional: Adding subtle rounding for better aesthetics
                        }}>
                            <img
                                src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"
                                alt="Nancy Elizabeth"
                                className="rounded-circle mx-auto d-block"
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
                                    Hi! I am Nancy Elizabeth. I am a professional graphic designer introducing myself.
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


                {/* Right Person */}
                <div className="col-md-5 col-lg-4 mb-4">
                    <Componentfadeanimation initial={{ opacity: 0, scale: 0, transform: "translateY(100px)" }} animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }} other={{ duration: 1 }}>

                        <div className="card" style={{
                            backgroundColor: "transparent",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adding box-shadow
                            border: "none", // Removing border
                            borderRadius: "10px", // Optional: Adding subtle rounding for better aesthetics
                        }}>
                            <img
                                src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
                                alt="Harry William"
                                className="rounded-circle mx-auto d-block"
                                style={{ width: "200px", height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title fw-bold" style={{
                                    color: "rgb(255, 0, 255)",
                                    fontFamily: "Sacramento, cursive",
                                    fontSize: "2rem",
                                    textAlign: "center", fontWeight: "bold"

                                }}>Sai Prasana</h5>
                                <p className="card-text">
                                    Hi! I am Harry William. I am a professional graphic designer introducing myself.
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
