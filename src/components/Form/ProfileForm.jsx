// src/components/Form/ProfileForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from "prop-types";
import { updateProfile } from "../../utils/api";
import { useAuth } from "../../context/AuthContext";
import { saveToLocalStorage } from "../../utils/localStorage";

const schema = yup.object().shape({
  avatarUrl: yup.string().url("Avatar must be a valid URL").optional(),
  venueManager: yup.boolean().optional(),
});

const ProfileForm = ({ onUpdateSuccess, onClose }) => {
  const { user, setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      avatarUrl: user?.avatar?.url || "",
      venueManager: user?.venueManager || false,
    },
  });

  const onSubmit = async (data) => {
    const profileData = {
      avatar: {
        url: data.avatarUrl,
      },
      venueManager: data.venueManager,
    };

    try {
      const updatedData = await updateProfile(user.name, profileData);

      // Update user info in AuthContext and localStorage
      const updatedUser = {
        ...user,
        avatar: updatedData.data.avatar,
        venueManager: updatedData.data.venueManager,
      };

      setUser(updatedUser);

      saveToLocalStorage("user", updatedUser);

      if (onUpdateSuccess) {
        onUpdateSuccess(updatedUser);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="profile-form p-4 bg-white rounded-lg shadow-custom max-w-lg w-full"
    >
      <h2 className="mb-4">Edit Profile</h2>

      <div className="mb-4">
        <label className="block font-bold mb-1">Avatar URL</label>
        <input
          {...register("avatarUrl")}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.avatarUrl && (
          <p className="text-red-500">{errors.avatarUrl.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" {...register("venueManager")} />
          <span>Venue Manager</span>
        </label>
        {errors.venueManager && (
          <p className="text-red-500">{errors.venueManager.message}</p>
        )}
      </div>
      <button
        className="bg-primary text-white py-2 px-4 rounded-lg mt-4"
        type="submit"
      >
        Update
      </button>
      <button
        className="bg-accent text-white py-2 px-4 rounded-lg mt-4"
        type="button"
        onClick={onClose}
      >
        Close
      </button>
    </form>
  );
};

ProfileForm.propTypes = {
  onUpdateSuccess: PropTypes.func,
  onClose: PropTypes.func.isRequired,
};

export default ProfileForm;
