
import "./NuevoProfile.css";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

//Components
import Header from "../Header/Header";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  nickname: yup.string().required(),
  password: yup.string().required(),
  passwordConfirmation: yup.string()
  .oneOf([yup.ref('password'), null], 'Passwords must match'),
  gender: yup.string().required(),
  age: yup.number().required().positive().integer().min(18),
});

const fnSend = (data) => {
  (async (data) => {
    let response = await axios.post(
      "http://localhost:8888/fn-addUser",
      JSON.stringify(data)
    );
    console.log(response.data);
  })(data);
  alert(JSON.stringify(data));
};

export default function NuevoProfile() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });


  return (
    <>
      <div className="Container">
        <div className="ContainerForm">
          <div className="containerLogo">
            <img src="../../../src/assets/exchange.png" alt="Mi SVG feliz" className="logo" href="https://www.google.com"/>
            <h1 className="text1">Bienvenido a Master Exchange</h1>
            <h2 className="text2">Obtener monedas de bajo fee es muy facil con nosotros</h2>
          </div>
        </div>

        <div className="ContainerWelcome">
        <form onSubmit={handleSubmit(fnSend)} className="form">
          <h1 className="title">Registro</h1>
          <div className="inputContainer">
            
              <input
                type="email"
                placeholder=""
                {...register("email")}
                className="input"
              />
              <label className="label">Email</label>
             <p>{errors.email?.message} </p> 
            
          </div>
          <div className="inputContainer">
            <input
              className="input"
              type="text"
              placeholder=""
              {...register("name")}
            />
            <label className="label">Nombre y Apellido</label>
            <p>{errors.name?.message}</p>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              placeholder=""
              {...register("nickname")}
              className="input"
            />
            <label className="label">Nombre de Usuario</label>
            <p>{errors.nickname?.message}</p>
          </div>
          <div className="inputContainer">
            <input
              className="input"
              type="password"
              placeholder=""
              {...register("password")}
            />
            <label className="label">Contraseña </label>
            <p>{errors.password?.message}</p>
          </div>

          <div className="inputContainer">
            <input 
            className="input"
            type="password" 
            placeholder="" 
            {...register("passwordConfirmation")} />
            <label className="label">Confirmar Contraseña</label>
            <p>{errors.passwordConfirmation?.message}</p>
          </div>

          <div className="inputContainer">
            <input
              type="number"
              placeholder=""
              {...register("age")}
              className="input"
            />
            <label className="label">Edad </label>
            <p>{errors.age?.message}</p>
          </div>
          <p></p>
          <input {...register("gender")} type="radio" value="Masculino" />
          <label htmlFor="Masculino">Masculino</label>
          <input {...register("gender")} type="radio" value="Femenino" />
          <label htmlFor="Femenino">Femenino</label>
          <input {...register("gender")} type="radio" value="Indefinido" />
          <label htmlFor="Indefinido">Indefinido</label>
          <p>{errors.gender?.message}</p>

          <p>Presione enviar para enviar su formulario</p>
          <input type="submit" className="submitBtn" />
        </form>
            
        </div>
      </div>
    </>
  );

  };
