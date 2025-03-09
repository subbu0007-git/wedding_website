import React from "react";
import Homedetails from "./Homedetails";

const Homelayout = () => {
    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* Background Image */}
                        <div className="carousel-caption d-none d-lg-block position-absolute start-50 translate-middle-x mt-md-0 mt-lg-5 text-top" style={{top:"5%"}}>
                            <h3
                                className="fs-1 fs-md-1"
                                style={{
                                    color: "#fff",
                                    fontFamily: "Sacramento, cursive",
                                    fontSize: "3rem",
                                    maxWidth: "800px",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                }}
                            >
                                Wedding Invitation
                            </h3>
                        </div>
                        <img
                            src="Images/DSC02381.JPG"
                            className="d-block w-100 h-50"
                            alt="..."
                            style={{
                                height: "50vh", // Default height
                            }}
                        />
                    </div>
                </div>

                {/* Overlay with text and heart design */}
                <div
                    className="position-absolute top-50 start-50 translate-middle text-center"
                    style={{
                        backgroundImage:
                            "url('https://lavelo-react.wpocean.com/static/media/1.5434f27c.png')", // Heart design
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        width: "90%", // Adjust width for responsiveness
                        maxWidth: "540px",
                        height: "auto",
                        aspectRatio: "600 / 460",
                        zIndex: 1,
                    }}
                >
                    {/* Text Content */}
                    <div
                        style={{
                            color: "#fff",
                            fontFamily: "Sacramento, cursive",
                            marginTop: "28%",
                        }}
                    >
                        <h3 className="fs-2" style={{ fontWeight: "bold" }}>
                            We're Getting Married
                        </h3>
                        <h1
                            className="fs-2 fs-md-5 my-2 my-md-4"
                            style={{ fontWeight: "bold" }}
                        >
                            Save Our Date
                        </h1>
                        <h1 className="fs-6" style={{ fontWeight: "bold" }}>
                            14 - 03 - 2025
                        </h1>
                    </div>
                </div>
            </div>
            <Homedetails />

            <style>
                {` 
                        @media (max-width: 600px) {
                        .carousel-item img {
                            height: 100vh !important; /* Increase height for extra small screens */
                        }
                             .text-top{
                            top: 8% !important; /* Increase height for extra small screens */
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Homelayout;
