import { useFormContext } from "react-hook-form";
import InputStyled, { IInput } from "./styles";

const Input: React.FC<IInput> = ({ name, placeholder, type, label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <InputStyled>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        {...register(name)} // Registra o campo com o React Hook Form
      />
      {errors[name] && <span>{(errors[name] as any).message}</span>}
    </InputStyled>
  );
};
export default Input;
