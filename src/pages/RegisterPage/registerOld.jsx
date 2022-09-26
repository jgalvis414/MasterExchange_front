import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

//chakra ui
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from "@chakra-ui/react";

//Components
import swal from 'sweetalert'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  nickname: yup.string().required(),
  password: yup.string().required(),
  passwordConfirmation: yup.string()
  .oneOf([yup.ref('password'), null], 'Passwords must match'),
  gender: yup.string().required(),
  age: yup.number().required().positive().integer().min(18),
  tel:yup.number()

});

const fnSend = (data) => {
  (async (data) => {
    let response = await axios.post(
      "http://localhost:8888/fn-addUser",
      JSON.stringify(data)
    );
    console.log(response.data);
  })(data);

  return swal({
    title:'Registrado con exito',
    icon: 'success', 
  });
};



export default function RegisterOld() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  

  return (
    <>
    
        <form onSubmit={handleSubmit(fnSend)} id="form1">
          <h1>Registro</h1>
            <FormControl>
              <Input
                type="email"
                placeholder=""
                {...register("email")}
                className="input"
              />
              <label className="label">Email</label>
              <FormHelperText>{errors.email?.message}</FormHelperText>
            </FormControl>
            <FormControl>
            <Input
              className="input"
              type="text"
              placeholder=""
              {...register("name")}
            />
            <label className="label">Nombre y Apellido</label>
            <p>{errors.name?.message}</p>

            </FormControl>
          
            <Input
              type="text"
              placeholder=""
              {...register("nickname")}
              className="input"
            />
            <label className="label">Nombre de Usuario</label>
            <p>{errors.nickname?.message}</p>
            <Input
              className="input"
              type="password"
              placeholder=""
              {...register("password")}
            />
            <label className="label">Contraseña </label>
            <p>{errors.password?.message}</p>
  

            <Input 
            className="input"
            type="password" 
            placeholder="" 
            {...register("passwordConfirmation")} />
            <label className="label">Confirmar Contraseña</label>
            <p>{errors.passwordConfirmation?.message}</p>

            <Input
              type="number"
              placeholder=""
              {...register("age")}
              className="input"
            />
            <label className="label">Edad </label>
            <p>{errors.age?.message}</p>
         
         

          <p>Presione enviar para enviar su formulario</p>
          <button type="submit" form='form1' >
            enviar
          </button>
        </form>
      
      </>
  );
}
