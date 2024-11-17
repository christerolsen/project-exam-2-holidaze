// src/components/Form/CreateVenueForm.jsx
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from "prop-types";
import { createVenue } from "../../utils/api";
import Button from "../Button";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  media: yup
    .array()
    .of(
      yup.object().shape({
        url: yup.string().url("Media URL must be a valid URL").required(),
      })
    )
    .min(1, "At least one media URL is required"),
  price: yup
    .number()
    .min(0, "Price must be a positive number")
    .required("Price is required"),
  maxGuests: yup
    .number()
    .min(1, "Max guests must be at least 1")
    .required("Max guests is required"),
  wifi: yup.boolean().optional(),
  parking: yup.boolean().optional(),
  breakfast: yup.boolean().optional(),
  pets: yup.boolean().optional(),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
});

const CreateVenueForm = ({ onCreateSuccess }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      media: [{ url: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "media",
  });

  const [createdVenue, setCreatedVenue] = useState(null);

  const onSubmit = async (data) => {
    const venueData = {
      name: data.name,
      description: data.description,
      media: data.media.map((media) => ({
        url: media.url,
        alt: `${data.name} image`,
      })),
      price: data.price,
      maxGuests: data.maxGuests,
      meta: {
        wifi: data.wifi,
        parking: data.parking,
        breakfast: data.breakfast,
        pets: data.pets,
      },
      location: {
        address: data.address,
        city: data.city,
        country: data.country,
      },
    };

    try {
      const createdData = await createVenue(venueData);
      setCreatedVenue(createdData);
      if (onCreateSuccess) {
        onCreateSuccess(createdData);
      }
    } catch (error) {
      console.error("Error creating venue:", error);
    }
  };

  if (createdVenue) {
    return (
      <div className="create-venue-success w-full flex flex-col items-center mt-10">
        <h4 className="text-success">Success!</h4>
        <Link to={`/venues/${createdVenue.data.id}`} className="text-primary">
          <Button variant="accent" type="button">
            Take a look
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="create-venue-form max-w-lg w-full"
    >
      <h1 className="mb-4">Create Venue</h1>

      <div className="mb-4">
        <label className="block font-bold mb-1">Name</label>
        <input
          {...register("name")}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">Description</label>
        <textarea
          {...register("description")}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>

      <div className="mb-4">
        <h4 className="font-bold mb-2">Media</h4>
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-4 mb-2">
            <div className="flex-1">
              <input
                {...register(`media.${index}.url`)}
                className="p-2 border border-gray-300 rounded w-full"
                placeholder="Image URL"
              />
              {errors.media?.[index]?.url && (
                <p className="text-red-500">
                  {errors.media[index].url.message}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <Button
          type="button"
          variant="primary"
          onClick={() => append({ url: "" })}
        >
          Add Image
        </Button>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">Price per Night</label>
        <input
          type="number"
          {...register("price")}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">Max Guests</label>
        <input
          type="number"
          {...register("maxGuests")}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.maxGuests && (
          <p className="text-red-500">{errors.maxGuests.message}</p>
        )}
      </div>

      {/* Meta fields */}
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" {...register("wifi")} />
          <span>WiFi</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" {...register("parking")} />
          <span>Parking</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" {...register("breakfast")} />
          <span>Breakfast</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" {...register("pets")} />
          <span>Pets Allowed</span>
        </label>
      </div>

      {/* Location fields */}
      <div className="mb-4">
        <label className="block font-bold mb-1">Address</label>
        <input
          {...register("address")}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.address && (
          <p className="text-red-500">{errors.address.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">City</label>
        <input
          {...register("city")}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.city && <p className="text-red-500">{errors.city.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">Country</label>
        <input
          {...register("country")}
          className="p-2 border border-gray-300 rounded w-full"
        />
        {errors.country && (
          <p className="text-red-500">{errors.country.message}</p>
        )}
      </div>

      <Button variant="primary" type="submit">
        Create Venue
      </Button>
    </form>
  );
};

CreateVenueForm.propTypes = {
  onCreateSuccess: PropTypes.func,
};

export default CreateVenueForm;
