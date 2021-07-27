import React, { useState } from "react";
import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function Weight() {
  const [weight, setWeight] = useState(0);
  const [lastWeight, setLastWeight] = useState(140);

  const weightInputHandler = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <Box alignContent="center" alignItems="center">
      <Heading>Weight Tracker</Heading>{" "}
      <Box>
        <FormControl id="weight">
          <FormLabel>Enter Todays Weight</FormLabel>
          <NumberInput max={lastWeight + 30} min={lastWeight - 30}>
            <NumberInputField onChange={weightInputHandler} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button>Add Weight</Button>
        </FormControl>
      </Box>
    </Box>
  );
}
export { Weight };
