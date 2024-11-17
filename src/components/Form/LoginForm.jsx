import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { Link } from "react-router-dom";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const { login } = useAuth();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(""); // State for server error messages

  const onSubmit = async (data) => {
    try {
      setServerError(""); // Clear previous errors
      await login(data.email, data.password);
      // Redirect to profile page after successful login
      navigate("/profile");
    } catch (error) {
      console.error("Login failed", error);
      setServerError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-form-container p-4">
      <h1 className="mb-4">Log In</h1>
      {serverError && <p className="text-red-500 mb-4">{serverError}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="block font-semibold mb-1">
            Email:
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="p-2 border border-gray-300 rounded-lg w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block font-semibold mb-1">
            Password:
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className="p-2 border border-gray-300 rounded-lg w-full"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <Button
          variant="primary"
          type="submit"
          className={`bg-primary text-white py-2 px-4 rounded-lg mt-4 ${
            isSubmitting ? "opacity-50" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>
      <p className="text-sm mt-4">
        No account?{" "}
        <Link to="/register" className="text-primary font-semibold">
          Register here!
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;
