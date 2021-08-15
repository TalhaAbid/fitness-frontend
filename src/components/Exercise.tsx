import React from "react";
import { ExerciseProps, ExerciseType } from '../types'

export default function Exercise(props: ExerciseProps) {
  const { name, target, imageSrc } = props.exercise;
  return (

    <div className=" w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
      <div className=" bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
        <img className="rouned-t-lg object-scale-down" src={imageSrc} alt={`${name}`} />
        <div className="py-6 px-8 rounded-lg bg-white">
          <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{name}</h1>
          <h3 className="text-gray-500 block text-sm ">{target}</h3>
          <button className="mt-6 py-2 px-4 bg-indigo-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 ">Add To Your Workout!</button>
        </div>
      </div>
    </div >
  );
}

export const exerciseList: Array<ExerciseType> = [
  {
    name: "Plie squat scoop up",
    target: "Core",
    imageSrc: "../exercises_image/Plie_squat_scoop_up.gif",
  },
  {
    name: "Squat Curl",
    target: "Lower Body",
    imageSrc: "../exercises_image/ezgif.com-gif-maker (1) copy.gif",
  }, {
    name: "Cossack squat",
    target: "Lower Body",
    imageSrc: "../exercises_image/ezgif.com-gif-maker (1).gif",
  }, {
    name: "Diamond Kicks",
    target: "Core",
    imageSrc: "../exercises_image/ezgif.com-gif-maker (1) copy 14.gif",
  }, {
    name: "Split squat press",
    target: "Core",
    imageSrc: "../exercises_image/ezgif.com-gif-maker (1) copy 13.gif",
  }, {
    name: "Deadlift upright row",
    target: "Upper Body",
    imageSrc: "../exercises_image/ezgif.com-gif-maker (1) copy 12.gif",
  }, {
    name: "Double Pulse Squat Jump",
    target: "Lower Body",
    imageSrc: "../exercises_image/ezgif.com-gif-maker (1) copy 11.gif",
  }, {
    name: "Squat with overhead tricep extension",
    target: "Core",
    imageSrc: "../exercises_image/ezgif.com-gif-maker (1) copy 10.gif",
  }, {
    name: "Curtsy lunge side kick raise",
    target: "Core",
    imageSrc: "../exercises_image/ezgif.com-gif-maker (1) copy 9.gif",
  }, {
    name: "Sumo side bends",
    target: "Core",
    imageSrc: "../exercises_image/ezgif.com-gif-maker (1) copy 7.gif",
  }, {
    name: "Plank bird dog",
    target: "Core",
    imageSrc: "../exercises_image/ezgif.com-gif-maker (1) copy 6.gif",
  }, {
    name: "Side lunge front raise",
    target: "Core",
    imageSrc: "../exercises_image/ezgif.com-gif-maker (1) copy 4.gif",
  },

];
