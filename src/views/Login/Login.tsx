import { useForm } from "react-hook-form";
import {
  LoginButtonGoogle,
  LoginForm,
  LoginPageContainer,
} from "./Login.styled";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { loginError } from "../../helpers/toastError";
import { loggedInSuccess } from "../../helpers/toasSuccess";


const Login = () => {
  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, loading] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = async (data: any) => {
    (await signInWithEmailAndPassword(data.email, data.password)) &&
      navigate("/dashboard");
      if(!user){
        loginError()
      } else if(user){
        loggedInSuccess()
      }
  };

  const googleSignInHandler = async () => {
    (await signInWithGoogle()) && navigate("/");
  };
  if (loading) return <div>Loading...</div>;

  return (
    <LoginPageContainer>
      <h1>Login</h1>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
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
        <input type="submit" value="Login" />
      </LoginForm>
      <LoginButtonGoogle onClick={googleSignInHandler}>
        <FcGoogle size={"2rem"} />
        Sign In with Google
      </LoginButtonGoogle>
    </LoginPageContainer>
  );
};

export default Login;
