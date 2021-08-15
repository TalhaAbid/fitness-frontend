import React, { useState } from "react";
import WorkoutItem from "./WorkoutItem";
import Finished from "./Finished";
import { Box } from "@chakra-ui/react";
import Exercise from "./Exercise";
import { ExerciseType, BodyWeightWorkoutType, WorkoutItemType } from '../types'

export default function TodaysWorkot() {
  const workout: Array<ExerciseType> = [];
  let begin = false;
  const [startWorkout, setStartWorkout] = useState(false);
  const [workoutStarted, setWorkoutStarted] = useState(false);


  const workouts: Array<BodyWeightWorkoutType | WorkoutItemType> = [{
    name: 'Jumping Jacks',
    target: 'warmup',
    sets: 5,
    reps: 8,
    timePerSet: 120
  }, {
    name: 'bench press',
    target: 'chest',
    sets: 3,
    reps: 6,
    timePerSet: 90,
    weight: 180
  }];
  //const [workouts, setWorkouts] = useState<Array<Work>>([]);
  let started = (
    <div className="min-h-screen bg-gray-100 flex flex-center flex-col ">
      {workouts.map((exercise) => <WorkoutItem exercise={exercise} />)}
    </div>
  );
  let start = (
    <div className="flex h-screen justify-center items-center">
      <button onClick={() => setWorkoutStarted(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 border border-blue-700 rounded">
        Begin Todays Workout
      </button>
    </div>)
  return workoutStarted ? started : started;
}
