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
    {
      name: "Plie squat scoop up",
      target: "Core",
      imageSrc: "../exercises_image/Plie_squat_scoop_up.gif",
    },
    {
      name: "Plie squat scoop up",
      target: "Core",
      imageSrc: "../exercises_image/Plie_squat_scoop_up.gif",
    },
    {
      name: "Plie squat scoop up",
      target: "Core",
      imageSrc: "../exercises_image/Plie_squat_scoop_up.gif",
    },
    {
      name: "Plie squat scoop up",
      target: "Core",
      imageSrc: "../exercises_image/Plie_squat_scoop_up.gif",
    },
    {
      name: "Plie squat scoop up",
      target: "Core",
      imageSrc: "../exercises_image/Plie_squat_scoop_up.gif",
    },
  ];
  return (
    <div>
      <div>
        <div className="container mx-auto p-8">
          <div className="flex flex-row flex-wrap -mx-2">
            <Exercise exercise={exercises[0]} />
            <Exercise exercise={exercises[0]} />
            <Exercise exercise={exercises[0]} />
            <Exercise exercise={exercises[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
