import React from "react";
import Componentfadeanimation from "../../Animations/Componentfadeanimation";


const Gallerylayout = () => {
    return (
        <div className="container text-center py-5">
            {/* Header Section */}



            {/* Photo Gallery Section */}
            <div className="py-4" id="gallery">
                <h6 className="font-weight-bold" style={{ fontFamily: "'Dancing Script', cursive", color: "#fff" }}>Memories of Our Story</h6>
                <h1 className="font-italic" style={{ fontFamily: "Sacramento, cursive", color: "#fff", fontWeight: "bold" }} >Photo Gallery</h1>
                <p style={{ fontFamily: "'Dancing Script', cursive", color: "#fff" }}>
                    Every picture has its own unique story that tells of love, laughter,
                    and memories of the two of us.
                </p>

                {/* Responsive Gallery */}
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-12 mb-4">
                        <Componentfadeanimation initial={{ opacity: 0, scale: 0, transform: "translateY(100px)" }} animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }} other={{ duration: 1 }}>

                            <img
                                src="https://sriram8358.github.io/wedding_invitation/img/Thumbnail/dharu_prasad.jpg" // Replace with your image URL
                                alt="Engagement"
                                className="img-fluid rounded"
                            />
                        </Componentfadeanimation>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 mb-4">
                        <Componentfadeanimation initial={{ opacity: 0, scale: 0, transform: "translateY(100px)" }} animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }} other={{ duration: 1 }}>

                            <img
                                src="https://sriram8358.github.io/wedding_invitation/img/Thumbnail/dharu_prasad2.jpg" // Replace with your image URL
                                alt="Haldi"
                                className="img-fluid rounded"
                            />
                        </Componentfadeanimation>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 mb-4">
                        <Componentfadeanimation initial={{ opacity: 0, scale: 0, transform: "translateY(100px)" }} animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }} other={{ duration: 1 }}>

                            <img
                                src="https://sriram8358.github.io/wedding_invitation/img/Thumbnail/dharu_prasad3.jpg" // Replace with your image URL
                                alt="Wedding"
                                className="img-fluid rounded"
                            />
                        </Componentfadeanimation>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12 mb-4">
                        <Componentfadeanimation initial={{ opacity: 0, scale: 0, transform: "translateY(100px)" }} animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }} other={{ duration: 1 }}>

                            <img
                                src="https://sriram8358.github.io/wedding_invitation/img/Thumbnail/dharu_prasad4.jpg" // Replace with your image URL
                                alt="Reception"
                                className="img-fluid rounded"
                            />
                        </Componentfadeanimation>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Gallerylayout;
