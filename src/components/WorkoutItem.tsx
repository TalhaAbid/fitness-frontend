import React, { useEffect, useState, useRef } from "react";
import PlatesCalculator from "./PlatesCalculator";
import { useInterval } from './useInterval'
import { ExerciseItemPropTypes, callbackFunction, STATUS } from '../types'


/**
 *
type State = {
  secondsRemaining: number;
  status: STATUS;
  progress: number;
  sets: number;
  secondsToDisplay: number;
  minutesRemaining: number;
  minutesToDisplay: number;
 */
const WorkoutItem = ({ exercise }: ExerciseItemPropTypes) => {
  const [secondsRemaining, setSecondsRemaining] = useState(exercise.timePerSet);
  const [status, setStatus] = useState<STATUS>(STATUS.STOPPED);
  const [progress, setProgress] = useState(0);
  const [sets, setSets] = useState(exercise.sets);
  const [active, setActive] = useState({ start: false, stop: false });
  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  //const platesToPut = PlatesCalculator(100);
  const callback: callbackFunction = () => {
    if (secondsRemaining > 0) {
      setSecondsRemaining(secondsRemaining - 1);
      setProgress(((180 - secondsRemaining) / 180) * 100);
    } else {
      setStatus(STATUS.STOPPED);
      setSecondsRemaining(exercise.timePerSet);
      setSets(sets - 1);
      setProgress(100);
    }
  }

  useInterval(
    callback,
    status === STATUS.STARTED ? 1000 : null
  );

  const handleStart = () => {
    setActive({ start: true, stop: false });
    setStatus(STATUS.STARTED);
  };
  const handleStop = () => {
    setActive({ start: false, stop: true });
    setStatus(STATUS.STOPPED);
  };
  const handleReset = () => {
    setActive({ start: false, stop: false });
    setStatus(STATUS.STOPPED);
    setSecondsRemaining(exercise.timePerSet);
  };
  if (sets === 0) {
    return <></>
  } else {
    return (
      <div className="container max-h-140 mx-auto bg-white rounded-lg shadow-lg my-4 py-8">
        <div className="flex justify-center items-center">
          <div className="text-center ">
            <h1 className="text-4xl ">{exercise.name}</h1>
            <p className="text-2xl text-gray-600">{exercise.target}</p>
            <p className="text-xl">Sets Remaining: {exercise.sets}</p>
            <p className="text-xl">Total Reps: {exercise.reps}</p>
            <p className="text-xl">{minutesToDisplay}:{secondsToDisplay}</p>
            <div className="md:space-x-10 space-y-10 md:space-y-0">
              <button onClick={() => handleStart()} className={`py-3 px-6 text-white rounded-lg bg-purple-${status === STATUS.STARTED ? 800 : 600} shadow-lg block md:inline-block`}>Start</button>
              <button onClick={() => handleStop()} className={`py-3 px-6 text-white rounded-lg bg-red-${status === STATUS.STOPPED ? 800 : 500} shadow-lg block md:inline-block `}>Stop</button>
              <button onClick={() => handleReset()} className="py-3 px-6 text-white rounded-lg bg-green-500 shadow-lg block md:inline-block">Reset</button>
            </div>
          </div>
        </div>
      </div >
    );
  }
};

export default WorkoutItem;
