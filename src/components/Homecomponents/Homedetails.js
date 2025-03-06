import React, { useEffect, useState } from "react";
import Homeindividualdetails from "./Homeindividualdetails";
import Componentfadeanimation from "../../Animations/Componentfadeanimation";

const Homedetails = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date("2025-03-14T19:40:00");
        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            
            if (difference <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div
            className="container-fluid bg-light"
            style={{
                backgroundImage: `url(Images/bgcard.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Componentfadeanimation
                initial={{ opacity: 0, scale: 0, transform: "translateY(100px)" }}
                animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }}
                other={{ duration: 1 }}
            >
                {/* Main Content */}
                <div className="text-center py-4">
                    <h2 className="text-warning fw-bold fs-4">|| Shree Ganeshaya Namah ||</h2>

                    <h3
                        className="text-danger fw-bold fs-2 my-3"
                        style={{ fontFamily: "'Dancing Script', cursive" }}
                    >
                        Heartly Welcome
                    </h3>

                    <p className="fs-6 fs-md-5 text-muted" style={{ fontFamily: "'Dancing Script', cursive" }}>
                        The wedding will be held on <strong>Feb 07, 2025</strong> in{" "}
                        <strong>Kakinada, Andhra Pradesh</strong>.
                    </p>
                    <p className="fs-6 text-secondary" style={{ fontFamily: "'Dancing Script', cursive" }}>
                        Therefore, with all due respect, we intend to invite you to attend our wedding.
                    </p>

                    {/* Countdown Timer */}
                    <div className="d-flex justify-content-center gap-3 text-center">
                        <div className="bg-white p-2 p-md-3 px-md-4 rounded shadow">
                            <h4 className="fw-bold" style={{ fontFamily: "'Dancing Script', cursive", color: "rgb(255, 0, 255)", }}>{timeLeft.days}</h4>
                            <p className="mb-0 text-muted" style={{ fontFamily: "'Dancing Script', cursive" }}>Days</p>
                        </div>
                        <div className="bg-white p-2 p-md-3 px-md-4 rounded shadow">
                            <h4 className="fw-bold" style={{ fontFamily: "'Dancing Script', cursive", color: "rgb(255, 0, 255)", }}>{timeLeft.hours}</h4>
                            <p className="mb-0 text-muted" style={{ fontFamily: "'Dancing Script', cursive" }}>Hours</p>
                        </div>
                        <div className="bg-white p-2 p-md-3 rounded shadow">
                            <h4 className="fw-bold" style={{ fontFamily: "'Dancing Script', cursive", color: "rgb(255, 0, 255)", }}>{timeLeft.minutes}</h4>
                            <p className="mb-0 text-muted" style={{ fontFamily: "'Dancing Script', cursive" }}>Minutes</p>
                        </div>
                        <div className="bg-white p-2 p-md-3 rounded shadow">
                            <h4 className="fw-bold" style={{ fontFamily: "'Dancing Script', cursive", color: "rgb(255, 0, 255)", }}>{timeLeft.seconds}</h4>
                            <p className="mb-0 text-muted" style={{ fontFamily: "'Dancing Script', cursive" }}>Seconds</p>
                        </div>
                    </div>
                </div>
            </Componentfadeanimation>

            <Homeindividualdetails />
        </div>
    );
};

export default Homedetails;
