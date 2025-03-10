import React, { useEffect, useState } from "react";
import { FaHeartbeat } from "react-icons/fa";
import Mobileheader from "./Mobileheader";
import Homelayout from "../components/Homecomponents/Homelayout";
import Infolayout from "../components/Infocomponents/Infolayout";
import Ourstorylayout from "../components/Ourstorycomponents/Ourstorylayout";
import Gallerylayout from "../components/Gallerycomponents/Gallerylayout";
import Finalmsglayout from "../components/Finalmessagecomponent/Finalmsglayout";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
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
            window.open("https://www.google.com/maps/place/Kondababu+Function+Hall/@16.931334,82.2322533,793m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a3827eac1ec4365:0xe97822a219f7267c!8m2!3d16.9313289!4d82.2348282!16s%2Fg%2F11cs46l7dq?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D", "_blank");
        } else if (type === "marriage") {
            window.open("https://www.google.com/maps/place/17%C2%B018'45.9%22N+82%C2%B012'58.4%22E/@17.3127467,82.2136334,792m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d17.3127467!4d82.2162083?hl=en&entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D", "_blank");
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
                        Sai Prasanna <FaHeartbeat color="red" /> Divya
                    </a>
                </div>
                <ul className="nav nav-pills ">
                    {["HOME", "INFO", "STORY", "GALLERY", "MAP"].map(
                        (item, index) => (
                            <li key={index} className="nav-item">
                                <a
                                    className="nav-link nav-link.active"
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
                                <h5 className="modal-title" style={{ fontFamily: "'Dancing Script', cursive", color: "rgb(255, 0, 255)", }}>Google Map Loaction</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p className="text-muted" style={{ fontFamily: "'Dancing Script', cursive", }}>Please click on the button for event locations</p>
                                <div className="d-flex justify-content-between">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => openGoogleMaps("reception")} style={{backgroundColor:"rgb(255, 0, 255)",color:"white",border:"1px solid red",}}
                                    >
                                      <FmdGoodIcon style={{color:'red'}} /> Reception
                                    </button>
                                    <button
                                        className="btn" style={{backgroundColor:"rgb(255, 0, 255)",color:"white",border:"1px solid red"}}
                                        onClick={() => openGoogleMaps("marriage")}
                                    >
                                       <FmdGoodIcon style={{color:'red'}} /> Marriage
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

            <style>
                {`
        .nav-link.active {
            background-color: transparent !important;
        }
    `}
            </style>
        </>
    );
};

export default Appbar;
