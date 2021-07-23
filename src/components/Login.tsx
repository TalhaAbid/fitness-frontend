import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

type LoginProps = {
  setToken: (token: string, rememberPassword: boolean) => void;
};

const Login = ({ setToken }: LoginProps) => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [rememberPassword, setRememberPassword] =
    React.useState<boolean>(false);
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to get access to all your workouts
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel> Username </FormLabel>
              <Input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                type="username"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel> Password </FormLabel>
              <Input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"center"}
                justify={"space-between"}
              >
                <Checkbox
                  onChange={(event) =>
                    setRememberPassword(event.target.checked)
                  }
                >
                  Remember me
                </Checkbox>
              </Stack>
              <Button
                onClick={() => setToken(username, rememberPassword)}
                bg={"blue.400"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
