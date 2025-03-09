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
                    Welcome to our big day's
                </h1>
                <p className="lead" style={{ fontFamily: "'Dancing Script', cursive", }}>
                    💍✨ Welcome to Our Wedding Celebration ✨💍
                    <p className="lead">The day we’ve been dreaming of is finally here, and we are so excited to have you with us as we celebrate the beginning of our forever! ❤️</p>

                    <p className="lead">💒 Occasion: Wedding Ceremony & Reception</p>

                    <p className="lead">🌸 Marriage Ceremony:
                    Join us as we take our sacred vows and promise a lifetime of love and togetherness.</p>
                    <p className="lead">🌟 Reception Party:
                    Celebrate with us as we begin this beautiful journey with joy, music, and heartfelt blessings. Your presence means the world to us!</p>
                    

                    Thank you for being a part of our special day and showering us with your love and blessings. Let’s make unforgettable memories together! 💕 
                </p>
                <div>
                    <Infocards />
                </div>
            </div>
        </section>
    );
};

export default Infolayout;
