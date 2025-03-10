import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { Box, Divider, Typography as Typetext } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Componentfadeanimation from "../../Animations/Componentfadeanimation";

const Infocards = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
                //   overflow:"hidden"
            }}
        >

            <Componentfadeanimation initial={{ opacity: 0, scale: 0, transform: "translateY(100px)" }} animate={{ opacity: 1, scale: 1, transform: "translateX(0)" }} other={{ duration: 1 }}>
                {/* Cards Container */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "column", md: "row" },
                        gap: "50px",
                        // border: "2px solid red",
                        width: "100%"
                        , alignItems: "center", justifyContent: "center"
                    }}
                >
                    {/* Card 1 */}

                    <Card
                        sx={{
                            textAlign: "center",
                            alignItems: "center",
                            // width: { md: 343, xs: 0 },
                            // overflow: "auto",    
                            "--icon-size": "100px",
                        }}
                    >
                        <CardOverflow variant="solid" sx={{ height: 70, backgroundColor: "#dda0dd" }}>
                            <AspectRatio
                                variant="outlined"
                                color="warning"
                                ratio="1"
                                sx={{
                                    mx: "auto",
                                    mb: 8,
                                    transform: "translateY(16%)",
                                    borderRadius: "50%",
                                    width: 80,
                                    boxShadow: "sm",
                                    bgcolor: "background.surface",
                                    position: "relative",
                                }}
                            >
                                <div>
                                    <img
                                        src="Images/marr.jpeg"
                                        alt="logo"
                                        style={{ height: "80px", width: "80px" }}
                                    />
                                </div>
                            </AspectRatio>
                        </CardOverflow>
                        <Typography level="title-lg" sx={{ mt: 2 }} style={{ fontFamily: "'Dancing Script', cursive", color: "rgb(255, 0, 255)", }}>
                            Marriage Venue
                        </Typography>
                        <Typography level="title-lg"  style={{ fontFamily: "'Dancing Script', cursive", color: "rgb(255, 0, 255)", }}>
                            @ 14-03-2025 7.09 PM
                        </Typography>
                        <CardContent sx={{ maxWidth: "40ch" }} style={{ fontFamily: "'Dancing Script', cursive",  }}>
                            Prathipadu mandal, Peddipalem Gramam, 533430, Andhra Pradesh
                        </CardContent>
                        <CardActions
                            orientation="horizontal"
                            sx={{
                                "--Button-radius": "40px",
                                // width: 300,
                                p: 0,
                            }}
                        >

                            <Button
                                variant="solid"
                                sx={{
                                    backgroundColor: "#dda0dd",
                                    color: "red",
                                    fontFamily: "'Dancing Script', cursive",
                                    "&:hover": {
                                        color: "#fff",
                                    },
                                }}
                                className="fs-5"
                                onClick={() => window.open("https://www.google.com/maps/place/17%C2%B018'45.9%22N+82%C2%B012'58.4%22E/@17.3127467,82.2136334,792m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d17.3127467!4d82.2162083?hl=en&entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D", '_blank')}
                            >
                                <LocationOnIcon /> Location
                            </Button>

                        </CardActions>
                    </Card>

                    {/* Card 2 */}
                    <Card
                        sx={{
                            textAlign: "center",
                            alignItems: "center",
                            // width: { md: 343, xs: 0 },
                            // overflow: "auto",    
                            "--icon-size": "100px",
                        }}
                    >
                        <CardOverflow variant="solid" sx={{ height: 70, backgroundColor: "#dda0dd" }}>
                            <AspectRatio
                                variant="outlined"
                                color="warning"
                                ratio="1"
                                sx={{
                                    mx: "auto",
                                    mb: 8,
                                    transform: "translateY(16%)",
                                    borderRadius: "50%",
                                    width: 80,
                                    boxShadow: "sm",
                                    bgcolor: "background.surface",
                                    position: "relative",
                                }}
                            >
                                <div>
                                    <img
                                        src="Images/rec.jpg"
                                        alt="logo"
                                        style={{ height: "80px", width: "80px",  }}
                                    />
                                </div>
                            </AspectRatio>
                        </CardOverflow>
                        <Typography level="title-lg" sx={{ mt: 2 }} style={{ fontFamily: "'Dancing Script', cursive", color: "rgb(255, 0, 255)", }}>
                            Reception Venue
                        </Typography>
                        <Typography level="title-lg"  style={{ fontFamily: "'Dancing Script', cursive", color: "rgb(255, 0, 255)", }}>
                            @ 16-03-2025 11.00 AM
                        </Typography>
                        <CardContent sx={{ maxWidth: "40ch" }} style={{ fontFamily: "'Dancing Script', cursive" }}>
                            Kondababu Function Hall, opp MSN Charities, Jagannaickpur, 533002, Kakinada.
                        </CardContent>
                        <CardActions
                            orientation="horizontal"
                            sx={{
                                "--Button-radius": "40px",
                                // width: 300,
                                p: 0,
                            }}
                        >
                            <Button
                                variant="solid"
                                sx={{
                                    backgroundColor: "#dda0dd",
                                    color: "red",
                                    fontFamily: "'Dancing Script', cursive",
                                    "&:hover": {
                                        color: "#fff",
                                    },
                                }}
                               
                                className="fs-5"
                                onClick={() => window.open('https://www.google.com/maps/place/Kondababu+Function+Hall/@16.931334,82.2322533,793m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a3827eac1ec4365:0xe97822a219f7267c!8m2!3d16.9313289!4d82.2348282!16s%2Fg%2F11cs46l7dq?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                            >
                                <LocationOnIcon /> Location
                            </Button>

                        </CardActions>
                    </Card>
                </Box>
            </Componentfadeanimation>
        </div>
    );
};

export default Infocards;
