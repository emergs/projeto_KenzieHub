import { useFormContext } from "react-hook-form";
import { Span } from "../../pages/Login/style";
import { SelectInputStyled } from "./styles";

const SelectInput = () => {
  return (
    <SelectInputStyled>
      <option value="Primeiro módulo (Introdução ao Frontend)">
        Primeiro módulo (Introdução ao Frontend)
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
      {/*{errors && <Span marginTop="0px">{(errors as any).message}</Span>}*/}
    </SelectInputStyled>
  );
};
export default SelectInput;
