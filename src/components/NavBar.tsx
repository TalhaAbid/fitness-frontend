import React from "react";
import NavItem from "./NavItem";
import { Flex, Box, Heading, Spacer, Link } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Flex bg="white" borderBottom="8px" padding="3px">
      <Box>
        <Heading>
          {" "}
          <Link to="/" as={NavLink}>
            Corpus Opnus
          </Link>
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <NavItem path="/" title="Todays Workout" />
        <NavItem path="/Exercises" title="Discover Exercises" />
        <NavItem path="/Weight" title="Weight Tracker" />
        <NavItem path="/Progress" title="View Your Progress" />
      </Box>
    </Flex>
  );
}
