import TextField from '@mui/material/TextField';
import { forwardRef } from 'react';


interface Props {
  id: string;
  type: 'phone' | 'email' | 'text';
  label: string;
  name: string;
  error: boolean;
  helperText: any;
}
export type Ref = JSX.Element;

const CustomInput = forwardRef<Ref, Props>((props, ref) => {
  return (
    <>
      <TextField
        inputRef={ref}
        variant="filled"
        {...props}
      />
    </>
  );
});

export default CustomInput;
