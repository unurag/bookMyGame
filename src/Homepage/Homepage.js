import React from "react";
import { Box } from '@chakra-ui/react'
import Header from "../Components/Header";
import Slidex from "../Components/Slidex";
import Tab from "../Components/Tab";

function Homepage() {
    return(
        <Box bg='white' w='100%' h='100vh' color='white'>
            <Header />
            <Slidex />
            <Tab />
        </Box>
    )
}

export default Homepage;