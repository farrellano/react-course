import { useForm } from "react-hook-form";
import useUser from "../../hook/useUser";
import { useLocation } from "wouter";
import { useEffect } from "react";

export default function Login() {
  const { login, isLogged, isLoginHasError, isLoginLoading } = useUser();
  const [, navigate] = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate]);

  const onSubmit = (data) => {
    const { username, password } = data;
    login({ username, password });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Username
          <input
            placeholder="Username"
            type="text"
            {...register("username", { required: true })}
          />
          {errors.username && <span>This field is required</span>}
        </label>
        <label>
          Password
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </label>
        <input type="submit" value="Ingresar" />
      </form>
    </>
  );
}
