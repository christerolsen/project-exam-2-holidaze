import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { Link } from "react-router-dom";

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
    .matches(/@stud\.noroff\.no$/, "Email must be a stud.noroff.no address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[0-9]/, "Password must contain a number")
    .matches(/[!@#$%^&*]/, "Password must contain a special character")
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
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError(""); // Clear previous error
    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
        avatar: {
          url: data.avatarUrl || "", // Optional
          alt: "User avatar",
        },
        venueManager: data.isVenueManager || false, // Checkbox value
      };
      await registerUser(userData);
      reset(); // Reset form after successful submission
      navigate("/login");
    } catch (error) {
      console.error("Registration failed", error);
      setServerError(
        "Registration failed. Please check your details or try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-form-container p-4">
      <h1 className=" mb-4">Register</h1>
      {serverError && <p className="text-red-500 mb-4">{serverError}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">
            Username:
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="p-2 border border-gray-300 rounded-lg w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
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
        <div>
          <label htmlFor="confirmPassword" className="block font-semibold mb-1">
            Confirm Password:
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
            className="p-2 border border-gray-300 rounded-lg w-full"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="avatarUrl" className="block font-semibold mb-1">
            Avatar URL:
          </label>
          <input
            id="avatarUrl"
            type="text"
            {...register("avatarUrl")}
            className="p-2 border border-gray-300 rounded-lg w-full"
          />
          {errors.avatarUrl && (
            <p className="text-red-500 text-sm mt-1">
              {errors.avatarUrl.message}
            </p>
          )}
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("isVenueManager")}
              className="mr-2"
            />
            Register as a Venue Manager
          </label>
        </div>
        <Button
          variant="primary"
          type="submit"
          className={`bg-primary text-white py-2 px-4 rounded-lg mt-4 ${
            loading ? "opacity-50" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </Button>
      </form>
      <p className="text-sm mt-4">
        Already a user?{" "}
        <Link to="/login" className="text-primary font-semibold">
          Log in here!
        </Link>
      </p>
    </div>
  );
}

export default RegisterForm;
