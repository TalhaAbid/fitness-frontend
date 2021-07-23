import React from "react";
import NavItem from "./NavItem";
import { Flex, Box, Heading, Spacer } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Flex bg="white" borderBottom="8px" padding="3px">
      <Box>
        <Heading> Corpus Opnus</Heading>
      </Box>
      <Spacer />
      <Box>
        <NavItem path="/" title="Todays Workout" />
        <NavItem path="/Exercises" title="Discover Exercises" />
        <NavItem path="/Weight" title="Weight Tracker" />
      </Box>
    </Flex>
  );
}
