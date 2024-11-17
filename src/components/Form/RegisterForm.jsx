import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    )
    .required("Username is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .matches(/@stud\\.noroff\\.no$/, "Email must be a stud.noroff.no address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  avatarUrl: yup
    .string()
    .url("Avatar URL must be a valid URL")
    .required("Avatar URL is required"),
  isVenueManager: yup.boolean(),
});

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
        avatar: {
          url: data.avatarUrl || "", // Optional
          alt: "User avatar",
        },
        venueManager: data.isVenueManager || false, // Make sure this matches the checkbox
      };
      await registerUser(userData);
      // Redirect to login page after successful registration
      navigate("/login");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username:</label>
        <input {...register("name")} />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <label>Email:</label>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" {...register("password")} />
        <p>{errors.password?.message}</p>
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" {...register("confirmPassword")} />
        <p>{errors.confirmPassword?.message}</p>
      </div>
      <div>
        <label>Avatar URL:</label>
        <input {...register("avatarUrl")} />
        <p>{errors.avatarUrl?.message}</p>
      </div>
      <div>
        <label>
          <input type="checkbox" {...register("isVenueManager")} /> Register as
          a Venue Manager
        </label>
      </div>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
