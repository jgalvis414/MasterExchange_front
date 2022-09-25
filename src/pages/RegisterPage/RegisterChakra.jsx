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
  InputGroup,
  InputRightElement
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
  passwordConfirmation: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
  gender: yup.string().required(),
  age: yup.number().required().positive().integer().min(18),
});



export default function RegisterChakra() {

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

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
      minH={["100vh", "100vh", "100vh","93.2vh"]}
      minW={"100%"}
      align={"center"}
      justify={"center"}
      bgImage= "url('../../public/assets/parallax-img-1.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      backgroundPosition="center"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} color={"gray.100"}>Registro</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          width={["200px", "350px", "400px", "450px"]}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(fnSend)}>
              <FormControl>
                <FormLabel mb={"8px"}>Correo electrónico</FormLabel>
                <Input type="email" {...register("email")} id="email"  mb={"16px"} 
                isInvalid={errors.email} errorBorderColor={"red.400"} placeholder="ej: foo@foo.com" />
                <FormHelperText>{errors.email?.message}</FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel mb={"8px"}>Nombre y Apellido</FormLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="ej: Nelson García"
                  {...register("name")}
                  className="input"
                  isInvalid={errors.name} 
                  errorBorderColor={"red.400"}
                  mt={"0"}
                  mb={"16px"}
                />
                <FormHelperText>{errors.name?.message}</FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel mb={"8px"}>Nombre de usuario</FormLabel>
                <Input
                  id="nickname"
                  type="text"
                  placeholder="ej: Fookziman"
                  {...register("nickname")}
                  isInvalid={errors.nickname} 
                  errorBorderColor={"red.400"}
                  mb={"16px"}
                />
                <FormHelperText>{errors.nickname?.message}</FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel mb={"8px"}>Contraseña</FormLabel>
                <InputGroup>
                  <Input
                    id="password"
                    type={show ? 'text' : 'password'}
                    placeholder="ej: 12345"
                    {...register("password")}
                    isInvalid={errors.password} 
                    errorBorderColor={"red.400"}
                    mb={"16px"}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.6rem' size='sm' onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText>{errors.password?.message}</FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel mb={"8px"}>Confirmar Contraseña</FormLabel>
                <InputGroup>
                  <Input
                    id="password"
                    type={show ? 'text' : 'password'}
                    placeholder="ej: 12345"
                    {...register("passwordConfirmation")}
                    isInvalid={errors.passwordConfirmation} 
                    errorBorderColor={"red.400"}
                    mb={"16px"}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.6rem' size='sm' onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
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
                    ¿Ya tienes cuenta? Inicia sesión
                  </Link>
                </Stack>
                <Button
                  type="submit"
                  bg={"#131a42"}
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
