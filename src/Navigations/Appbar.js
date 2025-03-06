import React, { useEffect, useState } from "react";
import { FaHeartbeat } from "react-icons/fa";
import Mobileheader from "./Mobileheader";
import Homelayout from "../components/Homecomponents/Homelayout";
import Infolayout from "../components/Infocomponents/Infolayout";
import Ourstorylayout from "../components/Ourstorycomponents/Ourstorylayout";
import Gallerylayout from "../components/Gallerycomponents/Gallerylayout";
import Finalmsglayout from "../components/Finalmessagecomponent/Finalmsglayout";

const Appbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Prevent body scrolling
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    const openGoogleMaps = (type) => {
        if (type === "reception") {
            window.open("https://www.google.com/maps?q=reception+location", "_blank");
        } else if (type === "marriage") {
            window.open("https://www.google.com/maps?q=marriage+location", "_blank");
        }
        setShowModal(false);
    };
    return (
        <>
            {/* Desktop Navbar */}
            <nav
                id="navbar-example2"
                className="navbar sticky-top px-2  d-none d-md-flex"
                style={{
                    transition: "all 0.3s ease",
                    backgroundColor: "#FF00FF",
                }}
            >
                <div>
                    <a
                        className="navbar-brand"
                        style={{
                            color: "#fff",
                            fontFamily: "Sacramento,cursive",
                            fontSize: "2rem",
                            fontWeight: "bold",
                        }}
                        href="#"
                    >
                        Sai Prasana <FaHeartbeat color="red" /> Divya
                    </a>
                </div>
                <ul className="nav nav-pills">
                    {["HOME", "INFO", "STORY", "GALLERY", "MAP"].map(
                        (item, index) => (
                            <li key={index} className="nav-item">
                                <a
                                    className="nav-link"
                                    style={{
                                        color: "#fff",
                                        fontSize: "1rem",
                                        fontWeight: "bold",
                                        fontFamily: "Montserrat",
                                        fontStyle: "italic",
                                    }}
                                    href={
                                        item === "MAP"
                                            ? "#"
                                            : `#scrollspyHeading${index + 1}`
                                    }
                                    onClick={() => item === "MAP" && setShowModal(true)}
                                >
                                    {item}
                                </a>
                            </li>
                        )
                    )}
                </ul>
            </nav>

            {/* Mobile Bottom Tab Bar */}
            <Mobileheader />
            <div
                className="d-md-none fixed-bottom border-top p-0"
                style={{
                    zIndex: 1030,
                    borderRadius: 8,
                    marginBottom: 8,
                    marginRight: 8,
                    marginLeft: 8,
                    backgroundColor: "#FF00FF",
                }}
            >
                 <div className="d-flex justify-content-around py-2">
                    {["Home", "Info", "Story", "Gallery", "Map"].map((item, index) => (
                        <a
                            key={index}
                            href={
                                item === "Map" ? "#" : `#scrollspyHeading${index + 1}`
                            }
                            onClick={() => item === "Map" && setShowModal(true)}
                            style={{ textDecorationLine: "none" }}
                            className="text-center"
                        >
                            <i className={`bi bi-${item.toLowerCase()}-fill fs-5`}></i>
                            <div
                                className="small"
                                style={{
                                    color: "#fff",
                                    fontFamily: "Montserrat",
                                    fontSize: "1rem",
                                    fontStyle: "italic",
                                }}
                            >
                                {item}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            {/* Bootstrap Modal */}
            {showModal && (
                <div
                    className="modal show fade"
                    tabIndex="-1"
                    style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Select Location</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>Please select the location you want to navigate to:</p>
                                <div className="d-flex justify-content-between">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => openGoogleMaps("reception")}
                                    >
                                        Reception
                                    </button>
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => openGoogleMaps("marriage")}
                                    >
                                        Marriage
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* ScrollSpy Content */}
            <div
                data-bs-spy="scroll"
                data-bs-target="#navbar-example2"
                data-bs-root-margin="0px 0px -40%"
                data-bs-smooth-scroll="true"
                className="scrollspy-example p-0"
                tabIndex="0"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800')", // Replace with the actual path
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                    width: "100%",
                    overflow: "auto", // Allow scrolling for this div
                }}
            >
                <div id="scrollspyHeading1" className="bg-body-tertiary">
                    <Homelayout />
                </div>
                <div
                    id="scrollspyHeading2"
                    className="px-4 overflow-hidden bg-body-tertiary"
                >
                    <Infolayout />
                </div>
                <div id="scrollspyHeading3" className="bg-body-tertiary">
                    <Ourstorylayout />
                </div>
                <div id="scrollspyHeading4" style={{ backgroundColor: "transparent" }}>
                    <Gallerylayout />
                    
                </div>
                <div id="scrollspyHeading5" className="bg-body-tertiary">
                    <Finalmsglayout />
                </div>
            </div>


        </>
    );
};

export default Appbar;
