import { useFormContext } from "react-hook-form";
import { Span } from "../../pages/Login/style";
import { SelectInputStyled } from "./styles";

const SelectInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <SelectInputStyled >
      <label htmlFor="module">Selecione seu módulo</label>
      <select id="module" {...register("module")}>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          <div>

            Primeiro módulo (Introdução ao Frontend)
          </div>
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)">
          Quarto módulo (Backend Avançado)
        </option>
      </select>
      {errors && <Span marginTop="0px">{(errors as any).message}</Span>}
    </SelectInputStyled>
  );
};
export default SelectInput;
