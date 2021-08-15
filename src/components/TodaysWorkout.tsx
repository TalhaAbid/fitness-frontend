import React, { useState } from "react";
import WorkoutItem from "./WorkoutItem";
import { BodyWeightWorkoutType, WorkoutItemType } from '../types'

export default function TodaysWorkot() {
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
  let started = (
    <div className="min-h-screen bg-gray-100 flex flex-center flex-col ">
      {workouts.map((exercise) => <WorkoutItem key={exercise.name} exercise={exercise} />)}
    </div>
  );
  let start = (
    <div className="flex w-screen h-screen justify-center items-center">
      <button onClick={() => setWorkoutStarted(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 border border-blue-700 rounded">
        Begin Todays Workout
      </button>
    </div>)
  return workoutStarted ? started : start;
}
