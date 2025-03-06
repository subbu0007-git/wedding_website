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
                                <h5 className="card-title">Card Title 1</h5>
                                <p className="card-text">
                                    This is a short description for the first card. Add your content
                                    here.
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
                                <h5 className="card-title">Card Title 2</h5>
                                <p className="card-text">
                                    This is a short description for the second card. Add your
                                    content here.
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
                                <h5 className="card-title">Card Title 3</h5>
                                <p className="card-text">
                                    This is a short description for the third card. Add your content
                                    here.
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
