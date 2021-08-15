import React from "react";
import Exercise, { exerciseList } from "./Exercise";
import { ExerciseType } from '../types'
interface exerciseType {
  name: string;
  target: string;
  imageSrc: string;
}

export default function Exercises() {
  const exercises: Array<ExerciseType> = exerciseList;
  return (
    <div>
      <div>
        <div className="container mx-auto p-10">
          <div className="flex flex-row flex-wrap -mx-2">
            {exercises.map((exercise) => (
              <Exercise key={exercise.name} exercise={exercise} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
