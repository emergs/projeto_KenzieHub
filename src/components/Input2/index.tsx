import { useFormContext } from "react-hook-form";
import InputStyled, { IInput } from "./styles";
import { Span } from "../../pages/Login/style";

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
        placeholder={placeholder}
        {...register(name)}
      />
      {errors[name] && <Span marginTop="0px">{(errors[name] as any).message}</Span>}
    </InputStyled>
  );
};
export default Input;
