import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  Progress,
  Box,
  Stack,
  Button,
  Center,
  chakra,
  Flex,
} from "@chakra-ui/react";

enum STATUS {
  STARTED,
  STOPPED,
}

type callbackFunction = () => void;

const useInterval = (callback: callbackFunction, delay: number | null) => {
  const savedCallback = React.useRef<callbackFunction | null>(null);

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

const WorkoutItem = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(180);
  const [status, setStatus] = useState<STATUS>(STATUS.STOPPED);
  const [progress, setProgress] = useState(0);
  const [sets, setSets] = useState(3);
  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;

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
    setStatus(STATUS.STARTED);
  };
  const handleStop = () => {
    setStatus(STATUS.STOPPED);
  };
  const handleReset = () => {
    setStatus(STATUS.STOPPED);
    setSecondsRemaining(180);
  };
  return (
    <Box marginTop="4" border="4px" borderColor="royalblue">
      <chakra.h3>Bench press</chakra.h3>
      <Text>Reps: 5</Text>
      <Text>Sets: {sets}</Text>
      <Stack direction={["column", "row"]}>
        <Box as="button">
          <Text>
            {minutesToDisplay} minutes {secondsToDisplay} seconds
          </Text>
        </Box>
        <Button onClick={() => handleStart()}>Start</Button>
        <Button onClick={() => handleStop()}>Stop</Button>
        <Button onClick={() => handleReset()}>Reset</Button>
      </Stack>
      <p>weight: 45 pounds</p>
      <Progress value={100} size="lg" colorScheme="teal" />
    </Box>
  );
};

export default WorkoutItem;
