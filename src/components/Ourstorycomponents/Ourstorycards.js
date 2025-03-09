import React from "react";
import ButtonStepper from "./Stepper";
import Componentfadeanimation from "../../Animations/Componentfadeanimation";

const Ourstorycards = () => {
    return (
        <div className="container py-4" >
            {/* Header Section */}
            <Componentfadeanimation initial={{ opacity: 0, scale: 0, transform: "translateY(100px)" }} animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }} other={{ duration: 1 }}>

                <div className="row mb-2">
                    <div className="col-12 text-center">
                        <h1 className="display-4" style={{ fontFamily: "Sacramento, cursive", color: "rgb(255, 0, 255)", fontWeight: "bold" }}>Our Story</h1>
                        <p className="lead fs-6" style={{ fontFamily: "'Dancing Script', cursive", color: "red" }}>How Our Love Bloomed</p>
                    </div>
                </div>
            </Componentfadeanimation>
            <Componentfadeanimation initial={{ opacity: 0, scale: 0, transform: "translateY(100px)" }} animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }} other={{ duration: 1 }}>

                <ButtonStepper />
            </Componentfadeanimation>
            <div>

            </div>
            {/* Card Section */}
            <div className="row justify-content-center mt-5">

                {/* Card 1 */}

                <div className="col-md-8 col-lg-4 d-flex justify-content-center mb-4">
                    <Componentfadeanimation initial={{ opacity: 0, scale: 0, transform: "translateY(100px)" }} animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }} other={{ duration: 1 }}>

                        <div className="card h-100 shadow-sm text-center">

                            <img
                                src="https://t3.ftcdn.net/jpg/00/68/21/10/360_F_68211026_8gkB0m87TKjQGQqKoYR2OkV202Urg3sf.jpg"
                                className="card-img-top"
                                alt="Placeholder"
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={{
                                    color: "rgb(255, 0, 255)",
                                    fontFamily: "'Dancing Script', cursive"
                                }}>✨ Engaged! 07.02.2025 ✨</h5>
                                <p className="card-text" style={{ fontFamily: "'Dancing Script', cursive" }}>
                                    On this beautiful day, we took the first step towards a lifetime of love, laughter, and endless memories. We’re so grateful to have found each other and can’t wait to begin this incredible journey together.To our friends and family, your love and support mean the world to us, and we can’t wait to celebrate this new chapter with all of you!
                                </p>
                            </div>
                        </div>
                    </Componentfadeanimation>
                </div>

                {/* Card 2 */}
                <div className="col-md-8 col-lg-4 d-flex justify-content-center mb-4">
                    <Componentfadeanimation initial={{ opacity: 0, scale: 0, transform: "translateY(100px)" }} animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }} other={{ duration: 2 }}>

                        <div className="card h-100 shadow-sm text-center">
                            <div className="card-body">
                                <h5 className="card-title" style={{
                                    color: "rgb(255, 0, 255)",
                                    fontFamily: "'Dancing Script', cursive"
                                }}>✨ Haldi Ceremony ! 12.03.2025 ✨</h5>
                                <p className="card-text" style={{ fontFamily: "'Dancing Script', cursive" }}>
                                    Mark your calendars, because the celebrations continue! 💛

                                    We're thrilled to announce that our Haldi Ceremony will take place on 12th March 2025! 🌿✨ Get ready for a day filled with vibrant colors, happy faces, and lots of haldi, love, and laughter. 💛
                                    💛 Don't forget to dress in your brightest yellows and bring your cheerful vibes to this magical pre-wedding celebration! 🌟
                                </p>
                            </div>
                            <img
                                src="https://t4.ftcdn.net/jpg/02/56/34/39/360_F_256343957_CCygJ0Lx5Lgu1w0ELg67uTarTRdU7qn9.jpg"
                                className="card-img-bottom"
                                alt="Placeholder"
                            />
                        </div>
                    </Componentfadeanimation>
                </div>

                {/* Card 3 */}
                <div className="col-md-8 col-lg-4 d-flex justify-content-center mb-4">
                    <Componentfadeanimation initial={{ opacity: 0, scale: 0, transform: "translateY(100px)" }} animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }} other={{ duration: 3 }}>

                        <div className="card h-100 shadow-sm text-center">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjrCXQln15EpCMzI-6woDkaYWSrssdH505Q&s"
                                className="card-img-top"
                                alt="Placeholder"
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={{
                                    color: "rgb(255, 0, 255)",
                                    fontFamily: "'Dancing Script', cursive"
                                }}>✨ Marriage! 14.03.2025 ✨</h5>
                                <p className="card-text" style={{ fontFamily: "'Dancing Script', cursive" }}>
                                    With hearts full of love and excitement, we are thrilled to invite you to witness the beginning of our forever! ❤️
                                    Join us as we tie the knot and embark on this beautiful journey of love, laughter, and togetherness. Your presence will make our celebration even more memorable!

                                    Let’s make it a day to cherish forever. 💕
                                </p>
                            </div>
                        </div>
                    </Componentfadeanimation>
                </div>
            </div>
        </div>
    );
};

export default Ourstorycards;
