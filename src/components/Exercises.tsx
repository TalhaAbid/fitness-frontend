import React from "react";
import One from "./Exercise";
import { Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve} from "./Exercise";
import { Flex, chakra, Spacer } from "@chakra-ui/react";


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
        <One />
        <Spacer />
        <Two />
        <Spacer />
        <Three />
        <Spacer />
        <Four />
        <Spacer />
        <Five />
        <Spacer />
        <Six />
        <Spacer />
        <Seven />
        <Spacer />
        <Eight />
        <Spacer />
        <Nine />
        <Spacer />
        <Ten />
        <Spacer />
        <Eleven />
        <Spacer />
        <Twelve />
        <Spacer />
      </Flex>
    </div>
  );
}

