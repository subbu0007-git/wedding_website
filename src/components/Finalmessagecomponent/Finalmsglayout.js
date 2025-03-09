import React from "react";
import { TypeAnimation } from "react-type-animation";
import Componentfadeanimation from "../../Animations/Componentfadeanimation";

const Finalmsglayout = () => {
    return (
        <>
            <div
                className="container-fluid bg-light text-center py-5"
                style={{ minHeight: "100vh" }}
            >
                <Componentfadeanimation initial={{ opacity: 0, scale: 0, transform: "translateY(100px)" }} animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }} other={{ duration: 1 }}>

                    {/* Title */}
                    <h2
                        className="text-muted fw-bold mb-4"
                        style={{ fontFamily: "'Dancing Script', cursive" }}
                    >
                        Join us in our happiness!
                    </h2>

                    {/* Illustration with Save the Date */}
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="position-relative">
                            {/* Background Illustration */}
                            <img
                                src="Images/wmremove-transformed.jpeg" // Replace with the actual image path
                                alt="Save The Date"
                                className="img-fluid"
                                style={{ maxWidth: "300px" }}
                            />

                        </div>
                    </div>
                </Componentfadeanimation>
                {/* Invitation Text */}
                <Componentfadeanimation initial={{ opacity: 0, scale: 0, transform: "translateY(100px)" }} animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }} other={{ duration: 1 }}>

                    <p
                        className="mt-3 mb-3 text-muted px-3"
                        style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1rem", maxWidth: "600px", margin: "0 auto" }}
                    >
                        With the divine grace of the almighty, I cordially invite you and
                        your family to our wedding. We eagerly await your kind presence to
                        make this auspicious occasion even more special for our family.
                    </p>
                </Componentfadeanimation>
                {/* Thank You */}
                <footer

                >
                    <Componentfadeanimation initial={{ opacity: 0, scale: 0, transform: "translateY(100px)" }} animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }} other={{ duration: 1 }}>

                        <TypeAnimation
                            sequence={[
                                "Thank You",    // Type out "Thank You"
                                1000,           // Pause for 1 second
                                "Thank Yo",     // Backspace to "Yo"
                                100,            // Pause briefly
                                "Thank Y",      // Backspace to "Y"
                                100,            // Pause briefly
                                "Thank ",       // Backspace to "Thank "
                                100,            // Pause briefly
                                "Than",         // Backspace to "Than"
                                100,            // Pause briefly
                                "Tha",          // Backspace to "Tha"
                                100,            // Pause briefly
                                "Th",           // Backspace to "Th"
                                100,            // Pause briefly
                                "T",            // Backspace to "T"
                                100,            // Pause briefly
                                "",             // Clear everything
                                100,            // Pause briefly
                            ]}
                            cursor={true}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block', fontFamily: "Sacramento, cursive", fontWeight: "bold", color: "rgb(255, 0, 255)", }}

                            repeat={Infinity}
                        />
                    </Componentfadeanimation>
                </footer>



            </div>

            <style>
                {`
footer {
  margin-bottom: 5%; /* Default for larger screens */
}

@media (max-width: 600px) {
  footer {
    margin-bottom: 35%;
  }
}
`}
            </style>
        </>
    );
};

export default Finalmsglayout;
