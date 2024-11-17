import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from "prop-types";
import { fetchVenueById, updateVenue, deleteVenue } from "../../utils/api";
import Button from "../Button";

const schema = yup.object().shape({
  name: yup.string().optional(),
  description: yup.string().optional(),
  media: yup
    .array()
    .of(
      yup.object().shape({
        url: yup.string().url("Media URL must be a valid URL").required(),
        alt: yup.string().optional(),
      })
    )
    .optional(),
  price: yup.number().min(0, "Price must be a positive number").optional(),
  maxGuests: yup.number().min(1, "Max guests must be at least 1").optional(),
  wifi: yup.boolean().optional(),
  parking: yup.boolean().optional(),
  breakfast: yup.boolean().optional(),
  pets: yup.boolean().optional(),
  address: yup.string().optional(),
  city: yup.string().optional(),
  country: yup.string().optional(),
});

const UpdateVenueForm = ({ venueId, onUpdateSuccess, onClose }) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "media",
  });

  const [venue, setVenue] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getVenueData = async () => {
      try {
        const fetchedVenue = await fetchVenueById(venueId);
        setVenue(fetchedVenue.data);
        if (fetchedVenue) {
          setValue("name", fetchedVenue.data.name);
          setValue("description", fetchedVenue.data.description);
          setValue("media", fetchedVenue.data.media || [{ url: "", alt: "" }]);
          setValue("price", fetchedVenue.data.price);
          setValue("maxGuests", fetchedVenue.data.maxGuests);
          setValue("wifi", fetchedVenue.data.meta?.wifi);
          setValue("parking", fetchedVenue.data.meta?.parking);
          setValue("breakfast", fetchedVenue.data.meta?.breakfast);
          setValue("pets", fetchedVenue.data.meta?.pets);
          setValue("address", fetchedVenue.data.location?.address);
          setValue("city", fetchedVenue.data.location?.city);
          setValue("country", fetchedVenue.data.location?.country);
        }
      } catch (error) {
        console.error("Error fetching venue data:", error);
      }
    };

    if (venueId) {
      getVenueData();
    }
  }, [venueId, setValue]);

  const onSubmit = async (data) => {
    const venueData = {
      name: data.name,
      description: data.description,
      media: data.media,
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
      const updatedData = await updateVenue(venueId, venueData);
      if (updatedData) {
        setMessage(
          <>
            Venue updated. Success!{" "}
            <a href={`/venues/${venue.id}`} className="text-primary underline">
              Take a look.
            </a>
          </>
        );
      }
    } catch (error) {
      console.error("Error updating venue:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await deleteVenue(venueId);
      if (response && response.status === 204) {
        setMessage("Venue deleted");
      }
    } catch (error) {
      console.error("Error deleting venue:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="update-venue-form max-w-lg w-full"
    >
      <h2 className="mb-4">Update Venue</h2>

      {message && <p className="text-green-500 mb-4">{message}</p>}

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
            <div className="flex-1">
              <input
                {...register(`media.${index}.alt`)}
                className="p-2 border border-gray-300 rounded w-full"
                placeholder="Image Alt Text"
              />
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
          onClick={() => append({ url: "", alt: venue?.name + " image" })}
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
        Update Venue
      </Button>
    </form>
  );
};

UpdateVenueForm.propTypes = {
  venueId: PropTypes.string.isRequired,
  onUpdateSuccess: PropTypes.func,
  onClose: PropTypes.func.isRequired,
};

export default UpdateVenueForm;
