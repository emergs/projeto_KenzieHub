import { Controller, useFormContext } from "react-hook-form";
import { Span } from "../../pages/Login/style";
import { SelectInputStyled, ISelectInput } from "./styles";
import React from "react";

const SelectInput = React.forwardRef(({ name, label, errors, options, ref, onChange, onBlur, register }: ISelectInput) => (
  <SelectInputStyled>
    <label htmlFor={name}>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      {options?.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.content}
          </option>
        );
      })}
    </select>

    {errors[name] && <Span marginTop="0px">{errors[name].message}</Span>}
  </SelectInputStyled>
))


export default SelectInput;
