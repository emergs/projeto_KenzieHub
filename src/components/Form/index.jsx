import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Forms from './styles'
import Button from '../Button';

const Form = ({onSubmit, children})=>{

  return(
    <Forms onSubmit={onSubmit}>
      {children}
    </Forms>
  )
}
export default Form;