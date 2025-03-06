import React from "react";
import Infocards from "./Infocards";

const Infolayout = () => {
    return (
        <section className="position-relative overflow-hidden w-100 ">
            {/* Background Video */}
            <video
                className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
                autoPlay
                loop
                muted
                playsInline
                style={{ objectFit: "cover" }}
            >
                <source
                    src="https://assets.codepen.io/6093409/river.mp4" // Replace with the actual video file path
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {/* Content */}
            <div
                className="container text-center text-white position-relative z-1 py-5"
                style={{ minHeight: "100vh", display: "flex", flexDirection: "column", }}
            >
                <h1
                    className="display-4"
                    style={{ fontFamily: "Sacramento, cursive", fontWeight: "bold" }}
                >
                    Welcome to our big day
                </h1>
                <p className="lead">
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters.
                </p>
                <div>
                    <Infocards />
                </div>
            </div>
        </section>
    );
};

export default Infolayout;
