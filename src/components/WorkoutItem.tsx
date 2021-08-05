import React, { useEffect, useState, useRef } from "react";
import { Text, Progress, Box, Stack, Button, chakra } from "@chakra-ui/react";
import PlatesCalculator from "./PlatesCalculator";
import { CloseIcon } from "@chakra-ui/icons";

enum STATUS {
  STARTED,
  STOPPED,
}

type callbackFunction = () => void;

const useInterval = (callback: callbackFunction, delay: number | null) => {
  const savedCallback = useRef<callbackFunction | null>(null);

  // remember the last callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // setup the interval
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay != null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
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
};
 */
const WorkoutItem = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(180);
  const [status, setStatus] = useState<STATUS>(STATUS.STOPPED);
  const [progress, setProgress] = useState(0);
  const [sets, setSets] = useState(3);
  const [active, setActive] = useState({ start: false, stop: false });
  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const platesToPut = PlatesCalculator(100);
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
        setProgress(((180 - secondsRemaining) / 180) * 100);
      } else {
        setStatus(STATUS.STOPPED);
        setSecondsRemaining(180);
        setSets(sets - 1);
        setProgress(100);
      }
    },
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
    setSecondsRemaining(180);
  };
  if (sets === 0) {
    return <></>;
  }
  return (
    <div>
      <div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutItem;
