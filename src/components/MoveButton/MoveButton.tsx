import Button from '@mui/material/Button';
import { FC } from 'react';

type ButtonProps = {
  text: string;
  variant: 'text' | 'outlined' | 'contained';
  onClick?: () => void;
  disabled: any;
};

const MoveButton: FC<ButtonProps> = ({
  text,
  variant,
  ...props
}) => {
  return (
    <Button
      {...props}
      type="submit"
      variant={variant}
    >
      {text}
    </Button>
  );
};

export default MoveButton;
