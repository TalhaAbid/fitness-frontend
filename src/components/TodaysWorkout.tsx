import React, { useState } from "react";
import WorkoutItem from "./WorkoutItem";
import Finished from "./Finished";
import { Box } from "@chakra-ui/react";
import Exercise from "./Exercise";
import { ExerciseType } from '../types'

export default function TodaysWorkot() {
  const workout: Array<ExerciseType> = [];
  let begin = false;
  const [current, setCurrent] = useState(<div></div>);
  //const [workouts, setWorkouts] = useState<Array<Work>>([]);
  let started = (
    <Box>
      <WorkoutItem />
    </Box>
  );
  let start = <button></button>;
  return started;
}
