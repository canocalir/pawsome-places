import { SubmitHandler, useForm } from "react-hook-form";
import { FormElement, LocationButton } from "./HomeForm.styled";
import useLocation from "../../hooks/useLocation";

type Inputs = {
  location: string;
  priceTag: string;
};

const HomeForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isLoading },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const { coords, getLocation } = useLocation();
  console.log(coords);
  return (
    <FormElement onSubmit={handleSubmit(onSubmit)}>
      <input
        disabled={!!coords.lat}
        placeholder={!!coords.lat ? "We found your location, please proceed" : "Enter or click button to get your current location"}
        {...register(
          "location",
          coords.lat ? { required: false } : { required: true }
        )}
      />
      {errors.location && <span>You must enter a location</span>}

      <LocationButton onClick={getLocation} size={"1.5rem"} color="green" />
      <select {...register("priceTag", { required: true })}>
        <option disabled defaultValue="Price">
          Price
        </option>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
        <option value="4">$$$$</option>
      </select>
      <input type="submit" value="Find Places" />
    </FormElement>
  );
};

export default HomeForm;
