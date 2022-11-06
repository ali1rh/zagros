import React from "react";
import { useTheme } from "@mui/material/styles";

const ali = () => {
    const theme = useTheme();
    console.log("theme :", theme)
    return (
        <h1>سلام</h1>
    )
}

export default ali;