import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import Link from "next/link";

const AppBarComponent = () => {
    return <AppBar title={"Massimo Gelato AppBar"} color={"primary"} position={"static"}>
        <Toolbar>
            <Link href={"/"}>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}} align={"center"} color={"white"}
                            textTransform={"none"}>
                    Pastry Showcase Counter
                </Typography></Link>
        </Toolbar>
    </AppBar>
};

export default AppBarComponent;
