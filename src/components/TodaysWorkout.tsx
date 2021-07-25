import React, { useState } from "react";
import WorkoutItem from "./WorkoutItem";
import Finished from "./Finished";
import { Box } from "@chakra-ui/react";
import Exercise from "./Exercise";
export default function TodaysWorkot() {
  let begin = false;
  const [current, setCurrent] = useState(<div></div>);
  let started = (
    <Box>
      <WorkoutItem />
    </Box>
  );
  let start = <button></button>;
  return started;
}
