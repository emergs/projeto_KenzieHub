import { useFormContext } from "react-hook-form";
import { Span } from "../../pages/Login/style";
import { SelectInputStyled, ISelectInput } from "./styles";

const SelectInput = ({ name, label, options }: ISelectInput) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <SelectInputStyled>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...register(name)}>
        {options?.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.content}
            </option>
          );
        })}
      </select>
      {errors && <Span marginTop="0px">{(errors as any).message}</Span>}
    </SelectInputStyled>
  );
};
export default SelectInput;
