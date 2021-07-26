import React from "react";
//import One from "./Exercise";
import Exercise, {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Eleven,
  Twelve,
} from "./Exercise";
import { Box, Flex, chakra, Spacer } from "@chakra-ui/react";

interface exerciseType {
  name: string;
  target: string;
  imageSrc: string;
}

export default function Exercises() {
  const exercises: Array<exerciseType> = [
    {
      name: "Plie squat scoop up",
      target: "Core",
      imageSrc: "../exercises_image/Plie_squat_scoop_up.gif",
    },
  ];
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
        {exercises.map((exercise) => (
          <Box key={exercise.name}>
            {" "}
            <Exercise exercise={exercise} />
            <Spacer />
          </Box>
        ))}
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
