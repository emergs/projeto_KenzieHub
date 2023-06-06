import { useFormContext } from "react-hook-form";
import { Span } from "../../pages/Login/style";
import { SelectInputStyled, ISelectInput } from "./styles";

const SelectInput = ({name, label, options}:ISelectInput) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    /*<SelectInputStyled>
      <label htmlFor="module">Selecione seu módulo</label>
      <select id="module" {...register("module")}>
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
      </select>
      {errors && <Span marginTop="0px">{(errors as any).message}</Span>}
    </SelectInputStyled>*/
    <SelectInputStyled>
      <label htmlFor={name}>Selecione seu módulo</label>
      <select id={name} {...register(`${name}`)}>
        {
         options?.map(option)=>{
           return(
             <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
           )
         } 
        }
      </select>
      {errors && <Span marginTop="0px">{(errors as any).message}</Span>}
    </SelectInputStyled>
  );
};
export default SelectInput;
