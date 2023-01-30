import { useForm } from "react-hook-form";
import { LoginButtonGoogle, LoginForm, LoginPageContainer } from "./Login.styled";
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import { FcGoogle} from "react-icons/fc"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = (data: any) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  if(loading) return <div>Loading...</div>
  user && navigate('/')

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
    <LoginPageContainer>
      <h1>Login</h1>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Enter your email address" {...register("email", {required:true})} />
        {errors.email && <span>Email is required</span>}
        <input
          placeholder="Enter your password"
          type="password"
          {...register("password",{required:true})}
        />
        {errors.email && <span>Password is required</span>}
        <input type="submit" />
      </LoginForm>
      <LoginButtonGoogle onClick={() => signInWithGoogle()}><FcGoogle size={"2rem"}/>Sign In with Google</LoginButtonGoogle>
    </LoginPageContainer>
  );
};

export default Login;
