import React, { Suspense } from "react";
import Exercise from "./Exercise";
import {
  Flex,
  Box,
  Container,
  Text,
  Stack,
  chakra,
  Spacer,
} from "@chakra-ui/react";

export default function Exercises() {
  return (
    <div>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        Discover New Exercises
      </chakra.h1>

      <Flex wrap="wrap" align="center">
        <Exercise />
        <Spacer />
        <Exercise />
        <Spacer />
        <Exercise />
        <Spacer />
        <Exercise />
        <Spacer />
        <Exercise />
        <Spacer />
        <Exercise />
        <Spacer />
      </Flex>
    </div>
  );
}
