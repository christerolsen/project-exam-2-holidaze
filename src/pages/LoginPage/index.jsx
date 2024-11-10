import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email
        <input type="email" {...register("email", { required: true })} />
      </label>
      <label>
        Password
        <input type="password" {...register("password", { required: true })} />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginPage;
