import {BiCurrentLocation} from "react-icons/bi"
import { useForm } from "react-hook-form";
import { FormElement } from "./HomeForm.styled";

type Inputs = {
  location: string;
  estateType: string;
};

const HomeForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isLoading },
  } = useForm<Inputs>();
  console.log(watch("estateType"));
  return (
    <FormElement>
      <input
        placeholder="Enter desired location"
        {...register("location", { required: true })}
      />
      <BiCurrentLocation size={"1.5rem"} color="green"/>
      <select
        {...register("estateType", { required: true })}
      >
        <option value="Home">Home</option>
        <option value="Home1">Home1</option>
        <option value="Home2">Home2</option>
      </select>
    </FormElement>
  );
};

export default HomeForm;
