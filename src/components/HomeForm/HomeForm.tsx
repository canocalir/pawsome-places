import { SubmitHandler, useForm } from "react-hook-form";
import {
  ErrorMessageContainer,
  FindPlacesButton,
  FormElement,
  InputElementContainer,
  LocationButton,
  PriceSelect,
} from "./HomeForm.styled";
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
      <InputElementContainer>
      
        <input
          disabled={!!coords.lat}
          placeholder={
            !!coords.lat
              ? "We found your location"
              : "Enter Location or Click Button"
          }
          {...register(
            "location",
            coords.lat ? { required: false } : { required: true }
          )}
        />
        <LocationButton onClick={getLocation} />
        <ErrorMessageContainer>
          {errors.location && !coords.lat && <span>You must enter a location</span>}
        </ErrorMessageContainer>
      </InputElementContainer>

      <PriceSelect {...register("priceTag", { required: true })}>
        <option disabled defaultValue="Price">
          Price
        </option>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
        <option value="4">$$$$</option>
      </PriceSelect>
      <FindPlacesButton type="submit" value="Find Places" />
    </FormElement>
  );
};

export default HomeForm;
