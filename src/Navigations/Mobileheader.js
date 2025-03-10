import React, { useEffect, useState } from "react";
import { FaHeartbeat } from "react-icons/fa";

const Mobileheader = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
           
            className="navbar sticky-top d-flex py-1  d-block d-md-none" // Visible only on mobile
            style={{
                transition: "background-color 0.3s ease",
                backgroundColor:  "#FF00FF" ,justifyContent:"center",flexDirection:"column"
            }}
        >
            <a
                className="navbar-brand"
                style={{
                    color: "#fff",
                    fontFamily: "Sacramento, cursive",
                    fontSize: "1.5rem",
                    textAlign:"center",fontWeight:"bold"
                    
                }}
                href="#"
            >
                Sai Prasanna <FaHeartbeat color="red" /> Divya
            </a>
            <h1 style={{
                    color: "#fff",
                    fontFamily: "Sacramento, cursive",
                    fontSize: "1.3rem",
                    textAlign:"center",fontWeight:"bold"
                    
                }}>Wedding Invitation</h1>
        </div>
    );
};

export default Mobileheader;
