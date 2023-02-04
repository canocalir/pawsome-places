import { useForm } from "react-hook-form";
import { RegisterForm, RegisterPageContainer } from "./Register.styled";
import { useNavigate } from "react-router-dom";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import { registerError } from "../../helpers/toastError";

const Register = () => {
  
  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = async (data: any) => {
      await createUserWithEmailAndPassword(data.email, data.password)
      && navigate("/dashboard");
      if (!user) registerError();
    };

  if (loading) return <div>Loading...</div>;
  
  return (
    <RegisterPageContainer>
      <h1>Register</h1>
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter your email address"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Email is required</span>}
        <input
          placeholder="Enter your password"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.email && <span>Password is required</span>}
        <input type="submit" value="Register"/>
      </RegisterForm>
    </RegisterPageContainer>
  );
};

export default Register;
