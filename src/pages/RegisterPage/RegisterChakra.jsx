import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormHelperText,
} from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import swal from "sweetalert";

//Components
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  nickname: yup.string().required(),
  password: yup.string().required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  gender: yup.string().required(),
  age: yup.number().required().positive().integer().min(18),
});

export default function RegisterChakra() {

  const fnSend = (data) => {
    (async (data) => {
      let response = await axios.post(
        "http://localhost:8888/fn-addUser",
        JSON.stringify(data)
      );
      console.log(response.data);
      return swal({
        title: "Registrado con exito",
        icon: "success",
      });
    })(data);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    reValidateMode: "onSubmit",
  });


  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Registro</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          width="300px"
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(fnSend)}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" {...register("email")} id="email" />
                <FormHelperText>{errors.email?.message}</FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>Nombre y Apellido</FormLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder=""
                  {...register("name")}
                  className="input"
                />
                <FormHelperText>{errors.name?.message}</FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>Nombre de usuario</FormLabel>
                <Input
                  id="nickname"
                  type="text"
                  placeholder=""
                  {...register("nickname")}
                />
                <FormHelperText>{errors.nickname?.message}</FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>Contrasena</FormLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder=""
                  {...register("password")}
                />
                <FormHelperText>{errors.password?.message}</FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>Confirmar Contrasena</FormLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder=""
                  {...register("passwordConfirmation")}
                />
                <FormHelperText>
                  {errors.passwordConfirmation?.message}
                </FormHelperText>
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Link color={"purple.500"} href={"/login"}>
                    Ya tienes cuenta?
                  </Link>
                </Stack>
                <Button
                  type="submit"
                  bg={"purple.400"}
                  color={"white"}
                  _hover={{
                    bg: "purple.800",
                  }}
                >
                  Registrarme
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
