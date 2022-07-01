import React from "react";
import {
    Box,
    Grid,
    Menu,
    MenuItem,
    Stack,
    Typography,
    Fade,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../addDoctor/AddDoctor.css"
// import c from "../../clinics/singleClinic/SingleClinic.module.css";
import AddSchedule from "./AddSchedule";

const AddDoctor = () => {
    const array = [
        {
            id: "1",
            name: "Ashish",
            diagnostic: "diagnostic",
            bloodGroup: "bloadgroup",
            image:
                "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: "2",
            name: "Ashish",
            diagnostic: "diagnostic",
            bloodGroup: "bloadgroup",
            image:
                "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: "3",
            name: "Ashish",
            diagnostic: "diagnostic",
            bloodGroup: "bloadgroup",
            image:
                "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: "4",
            name: "Ashish",
            diagnostic: "diagnostic",
            bloodGroup: "bloadgroup",
            image:
                "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        // {
        //     id: "5",
        //     name: "Ashish",
        //     diagnostic: "diagnostic",
        //     bloodGroup: "bloadgroup",
        //     image: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        // },
        // {
        //     id: "6",
        //     name: "Ashish",
        //     diagnostic: "diagnostic",
        //     bloodGroup: "bloadgroup",
        //     image: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        // },
    ];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className="main-addDoctor container ">
                {array.map((elem, index) => {
                    const { name, diagnostic, bloodGroup, image } = elem;
                    return (
                        <div key={index + 7816878}>
                            {/* <Box
                            sx={{
                                width: 304,
                                height: 113,
                                borderRadius: "13.36px",
                                border: "2px solid #0089FF",
                                background: "#fff",
                            }}
                            margin={{
                                lg: "10px 30px",
                                md: "5xp 10px",
                                sm: "5px 10px",
                                xs: "5px 10px",
                            }}
                        >
                            <Grid className="AddDoctor-grid container"


                            >
                                <Grid item pr="20.78px" pl="9.8px">
                                    <img src={image} alt="doctor" style={{
                                        width: "78.6px",
                                        height: "78.6px",
                                        aspectRatio: 1 / 1,
                                        borderRadius: "13.36px",
                                    }} />
                                </Grid>
                                <Grid item>
                                    <Stack direction="column">
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontFamily: "'Rubik', sans-serif",
                                                fontWeight: 500,
                                                color: "#5B6889",
                                                fontSize: "16.92px",
                                            }}
                                        >
                                            {name}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontFamily: "'Rubik', sans-serif",
                                                fontWeight: 400,
                                                fontStyle: "italic",
                                                fontSize: "12.46px",
                                                color: "#7890A0",
                                            }}
                                        >
                                            Diagnostic: {diagnostic}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontFamily: "'Rubik', sans-serif",
                                                fontWeight: 400,
                                                fontStyle: "italic",
                                                fontSize: "12.46px",
                                                color: "#7890A0",
                                            }}
                                        >
                                            Blood Group: {bloodGroup}
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box> */}
                            <Box
                                sx={{
                                    width: 304,
                                    height: 113,
                                    borderRadius: "13.36px",
                                    border: "2px solid #0089FF",
                                    background: "#fff",
                                }}
                                margin={{
                                    lg: "10px 30px",
                                    md: "5xp 10px",
                                    sm: "5px 10px",
                                    xs: "5px 10px",
                                }}
                            >
                                <Grid
                                    className="AddDoctor-grid container"
                                >
                                    <Grid item pr="20.78px" pl="9.8px">
                                        <img src={image} alt="doctor" style={{
                                            width: "78.6px",
                                            height: "78.6px",
                                            aspectRatio: 1 / 1,
                                            borderRadius: "13.36px",
                                        }} />
                                    </Grid>
                                    <Grid item>
                                        <Stack direction="column">
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontFamily: "'Rubik', sans-serif",
                                                    fontWeight: 500,
                                                    color: "#5B6889",
                                                    fontSize: "22.92px",
                                                }}
                                            >
                                                {name}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontFamily: "'Rubik', sans-serif",
                                                    fontWeight: 400,
                                                    fontStyle: "italic",
                                                    fontSize: "12.46px",
                                                    color: "#7890A0",
                                                }}
                                            >
                                                Diagnostic: {diagnostic}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontFamily: "'Rubik', sans-serif",
                                                    fontWeight: 400,
                                                    fontStyle: "italic",
                                                    fontSize: "12.46px",
                                                    color: "#7890A0",
                                                }}
                                            >
                                                Blood Group: {bloodGroup}
                                            </Typography>
                                            <MoreVertIcon fontSize="small" onClick={handleClick} className="threeDotx" />
                                            <Menu
                                                id="fade-menu"
                                                MenuListProps={{
                                                    "aria-labelledby": "fade-button",
                                                }}
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                TransitionComponent={Fade}

                                            >
                                                <MenuItem onClick={handleClose}>Edit</MenuItem>
                                                <MenuItem onClick={handleClose}>Delete</MenuItem>
                                                <MenuItem onClick={handleClose}>Block</MenuItem>
                                            </Menu>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                    )
                })}
                {/* </div> */}
                {/* );
        })} */}
            </div>
            <hr />
            <AddSchedule />

        </>
    );
};

export default AddDoctor;
