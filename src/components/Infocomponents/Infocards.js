import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { Box, Divider, Typography as Typetext } from "@mui/material";
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
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQLZ1NDB21oKC1D1Colmd1Rzy7f91mUADwST6xEJIcjmk_MSksySmuXclloXqT9s7N1uo&usqp=CAU"
                                    alt="logo"
                                    style={{ height: "80px", width: "80px", paddingTop: "14px" }}
                                />
                            </div>
                        </AspectRatio>
                    </CardOverflow>
                    <Typography level="title-lg" sx={{ mt: 2 }}>
                        🏦 Surya Deep School (RJY) 🏦
                    </Typography>
                    <CardContent sx={{ maxWidth: "40ch" }}>
                        Board Of Secondary Education Andhra Pradesh
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
                                color: "#3f51b5",
                                "&:hover": {
                                    color: "#fff",
                                },
                            }}
                        >
                            CGPA : 9.3
                        </Button>
                        <Button
                            variant="solid"
                            sx={{
                                backgroundColor: "#dda0dd",
                                color: "#3f51b5",
                                "&:hover": {
                                    color: "#fff",
                                },
                            }}
                            onClick={() => window.open('https://www.google.com/maps/place/CH+VIJAYA%27S+HOUSE/@16.9277055,82.2426193,619m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a38271cbe26f061:0x5f2e3429003968de!8m2!3d16.9277055!4d82.2426193!16s%2Fg%2F11nnvdf785?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                        >
                            🗺 Location
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
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQLZ1NDB21oKC1D1Colmd1Rzy7f91mUADwST6xEJIcjmk_MSksySmuXclloXqT9s7N1uo&usqp=CAU"
                                    alt="logo"
                                    style={{ height: "80px", width: "80px", paddingTop: "14px" }}
                                />
                            </div>
                        </AspectRatio>
                    </CardOverflow>
                    <Typography level="title-lg" sx={{ mt: 2 }}>
                        🏦 Surya Deep School (RJY) 🏦
                    </Typography>
                    <CardContent sx={{ maxWidth: "40ch" }}>
                        Board Of Secondary Education Andhra Pradesh
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
                                color: "#3f51b5",
                                "&:hover": {
                                    color: "#fff",
                                },
                            }}
                        >
                            CGPA : 9.3
                        </Button>
                        <Button
                            variant="solid"
                            sx={{
                                backgroundColor: "#dda0dd",
                                color: "#3f51b5",
                                "&:hover": {
                                    color: "#fff",
                                },
                            }}
                        >
                            2016 - 2017
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            </Componentfadeanimation>
        </div>
    );
};

export default Infocards;
