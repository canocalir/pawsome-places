import { BiCurrentLocation } from "react-icons/bi";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormElement } from "./HomeForm.styled";
import { useState } from "react";

type Inputs = {
  location: string;
  estateType: string;
  countries: string[];
};

const countries = [
  "AE",
  "AR",
  "AS",
  "AT",
  "AU",
  "BE",
  "BR",
  "CA",
  "CH",
  "CL",
  "CN",
  "CO",
  "DE",
  "DK",
  "ES",
  "FI",
  "FR",
  "GB",
  "GR",
  "HK",
  "HU",
  "ID",
  "IE",
  "IN",
  "IS",
  "IT",
  "JP",
  "KR",
  "MX",
  "MY",
  "NL",
  "NO",
  "NZ",
  "PE",
  "PH",
  "PT",
  "SE",
  "SG",
  "TH",
  "TR",
  "TW",
  "US",
  "VN",
  "XE",
  "ZA",
];

const HomeForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isLoading },
  } = useForm<Inputs>();
  const [submittedDate, setSubmittedDate] = useState();


  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <FormElement onSubmit={handleSubmit(onSubmit)}>
     
      <input
        placeholder="Enter desired location"
        {...register("location", { required: true })}
      />
      <BiCurrentLocation size={"1.5rem"} color="green" />
      <select {...register("estateType", { required: true })}>
        <option value="Home">Home</option>
        <option value="Home1">Home1</option>
        <option value="Home2">Home2</option>
      </select>
      <select {...register("countries", { required: true })}>
        {countries.map((country) => {
          return <option key={country}>{country}</option>;
        })}
      </select>
      <input type="submit" />
    </FormElement>
  );
};

export default HomeForm;
