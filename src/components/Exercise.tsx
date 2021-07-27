import React from "react";
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Spacer,
  Button,
} from "@chakra-ui/react";

interface exerciseType {
  name: string;
  target: string;
  imageSrc: string;
}

interface exerciseProps {
  exercise: exerciseType;
}

export default function Exercise(props: exerciseProps) {
  const { name, target, imageSrc } = props.exercise;
  return (
    <Box mb="14">
      <Box
        role={"group"}
        p={6}
        w="400px"
        h="400px"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rouned={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url("../exercises_image/Plie_squat_scoop_up.gif")`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            src={imageSrc}
            rouned={"lg"}
            height={260}
            width={300}
            objectFit="fill"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {target}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {name}
          </Heading>
          <Button colorScheme="teal">Add</Button>
        </Stack>
      </Box>
      <Spacer />
    </Box>
  );
}

export function One() {
  return (
    <Box mb="14">
      <Box
        role={"group"}
        p={6}
        w="400px"
        h="400px"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rouned={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url("../exercises_image/Plie_squat_scoop_up.gif")`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            src="../exercises_image/Plie_squat_scoop_up.gif"
            rouned={"lg"}
            height={260}
            width={300}
            objectFit="fill"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Core
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Plie squat scoop up
          </Heading>
          <Button colorScheme="teal">Add</Button>
        </Stack>
      </Box>
      <Spacer />
    </Box>
  );
}

export function Two() {
  return (
    <Box mb="14">
      <Box
        role={"group"}
        p={6}
        w="400px"
        h="400px"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rouned={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url("../exercises_image/ezgif.com-gif-maker (1) copy.gif")`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            src="../exercises_image/ezgif.com-gif-maker (1) copy.gif"
            rouned={"lg"}
            height={260}
            width={300}
            objectFit="fill"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Lower Body
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Squat curl
          </Heading>
          <Button colorScheme="teal">Add</Button>
        </Stack>
      </Box>
      <Spacer />
    </Box>
  );
}
export function Three() {
  return (
    <Box mb="14">
      <Box
        role={"group"}
        p={6}
        w="400px"
        h="400px"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rouned={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url("../exercises_image/ezgif.com-gif-maker (1).gif")`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            src="../exercises_image/ezgif.com-gif-maker (1).gif"
            rouned={"lg"}
            height={260}
            width={300}
            objectFit="fill"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Lower Body
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Cossack squat
          </Heading>
          <Button colorScheme="teal">Add</Button>
        </Stack>
      </Box>
      <Spacer />
    </Box>
  );
}
export function Four() {
  return (
    <Box mb="14">
      <Box
        role={"group"}
        p={6}
        w="400px"
        h="400px"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rouned={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url("../exercises_image/ezgif.com-gif-maker (1) copy 14.gif")`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            src="../exercises_image/ezgif.com-gif-maker (1) copy 14.gif"
            rouned={"lg"}
            height={260}
            width={300}
            objectFit="fill"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Core
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Diamond kicks
          </Heading>
          <Button colorScheme="teal">Add</Button>
        </Stack>
      </Box>
      <Spacer />
    </Box>
  );
}
export function Five() {
  return (
    <Box mb="14">
      <Box
        role={"group"}
        p={6}
        w="400px"
        h="400px"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rouned={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url("../exercises_image/ezgif.com-gif-maker (1) copy 13.gif")`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            src="../exercises_image/ezgif.com-gif-maker (1) copy 13.gif"
            rouned={"lg"}
            height={260}
            width={300}
            objectFit="fill"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Core
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Split squat press exercise
          </Heading>
          <Button colorScheme="teal">Add</Button>
        </Stack>
      </Box>
      <Spacer />
    </Box>
  );
}
export function Six() {
  return (
    <Box mb="14">
      <Box
        role={"group"}
        p={6}
        w="400px"
        h="400px"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rouned={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url("../exercises_image/ezgif.com-gif-maker (1) copy 12.gif")`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            src="../exercises_image/ezgif.com-gif-maker (1) copy 12.gif"
            rouned={"lg"}
            height={260}
            width={300}
            objectFit="fill"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Upper Body
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Deadlift upright row
          </Heading>
          <Button colorScheme="teal">Add</Button>
        </Stack>
      </Box>
      <Spacer />
    </Box>
  );
}
export function Seven() {
  return (
    <Box mb="14">
      <Box
        role={"group"}
        p={6}
        w="400px"
        h="400px"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rouned={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url("../exercises_image/ezgif.com-gif-maker (1) copy 11.gif")`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            src="../exercises_image/ezgif.com-gif-maker (1) copy 11.gif"
            rouned={"lg"}
            height={260}
            width={300}
            objectFit="fill"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Lower Body
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Double pulse squat jump
          </Heading>
          <Button colorScheme="teal">Add</Button>
        </Stack>
      </Box>
      <Spacer />
    </Box>
  );
}
export function Eight() {
  return (
    <Box mb="14">
      <Box
        role={"group"}
        p={6}
        w="400px"
        h="400px"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rouned={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url("../exercises_image/ezgif.com-gif-maker (1) copy 10.gif")`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            src="../exercises_image/ezgif.com-gif-maker (1) copy 10.gif"
            rouned={"lg"}
            height={260}
            width={300}
            objectFit="fill"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Core
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Squat with overhead tricep extension
          </Heading>
          <Button colorScheme="teal">Add</Button>
        </Stack>
      </Box>
      <Spacer />
    </Box>
  );
}
export function Nine() {
  return (
    <Box mb="14">
      <Box
        role={"group"}
        p={6}
        w="400px"
        h="400px"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rouned={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url("../exercises_image/ezgif.com-gif-maker (1) copy 9.gif")`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            src="../exercises_image/ezgif.com-gif-maker (1) copy 9.gif"
            rouned={"lg"}
            height={260}
            width={300}
            objectFit="fill"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Core
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Curtsy lunge side kick raise
          </Heading>
          <Button colorScheme="teal">Add</Button>
        </Stack>
      </Box>
      <Spacer />
    </Box>
  );
}
export function Ten() {
  return (
    <Box mb="14">
      <Box
        role={"group"}
        p={6}
        w="400px"
        h="400px"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rouned={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url("../exercises_image/ezgif.com-gif-maker (1) copy 7.gif")`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            src="../exercises_image/ezgif.com-gif-maker (1) copy 7.gif"
            rouned={"lg"}
            height={260}
            width={300}
            objectFit="fill"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Core
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Sumo side bends
          </Heading>
          <Button colorScheme="teal">Add</Button>
        </Stack>
      </Box>
      <Spacer />
    </Box>
  );
}
export function Eleven() {
  return (
    <Box mb="14">
      <Box
        role={"group"}
        p={6}
        w="400px"
        h="400px"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rouned={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url("../exercises_image/ezgif.com-gif-maker (1) copy 6.gif")`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            src="../exercises_image/ezgif.com-gif-maker (1) copy 6.gif"
            rouned={"lg"}
            height={260}
            width={300}
            objectFit="fill"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Core
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Plank bird dog
          </Heading>
          <Button colorScheme="teal">Add</Button>
        </Stack>
      </Box>
      <Spacer />
    </Box>
  );
}
export function Twelve() {
  return (
    <Box mb="14">
      <Box
        role={"group"}
        p={6}
        w="400px"
        h="400px"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rouned={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url("../exercises_image/ezgif.com-gif-maker (1) copy 4.gif")`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            src="../exercises_image/ezgif.com-gif-maker (1) copy 4.gif"
            rouned={"lg"}
            height={260}
            width={300}
            objectFit="fill"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Core
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Side lunge front raise
          </Heading>
          <Button colorScheme="teal">Add</Button>
        </Stack>
      </Box>
      <Spacer />
    </Box>
  );
}
