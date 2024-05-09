import { useForm } from "react-hook-form";
import Logo from '../assets/LogoMormediNegro.png'
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
import { loginSchema, TLoginSchema } from "../lib/types";
import { zodResolver } from "@hookform/resolvers/zod";



const LoginForm = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });
 
  const onSubmit = async (data: TLoginSchema) => {
    const response = await axios.post("http://localhost:3000/users", {
      email: data.email,
      password: data.password,
    });
    console.log(response.data);
    navigate("/")
    reset();
  };
  
  return (
    <div className="container-login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={Logo} alt="logo mormedi" className="logo"/>
        <p className="line">making tomorrow more tangible</p> 
        <div className="container-input">      
            <label htmlFor="email">Email</label>
            <input 
            {
            ...register("email" 
              )}
            type="email"  
            id="email" 
            />
            {errors.email && (
              <p className="error">{`${errors.email.message}`}</p>
            )}
            <label htmlFor="password">Password</label>
            <input
            {
              ...register("password"
            )}
            type="password" 
            id="password"
            />
            {errors.password && (
              <p className="error">{`${errors.password.message}`}</p>
            )}
          <button 
          type="submit"
          disabled={isSubmitting}
          >
            Login
            </button>
            <Link to={"/register"}className="bottom">
                <p >you have not registered?</p> 
            </Link>
          </div>
      </form>
    </div>
  );
};

export default LoginForm
