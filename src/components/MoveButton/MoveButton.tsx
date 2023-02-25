import Button from '@mui/material/Button';

type ButtonProps = {
  text: string;
  variant: 'text' | 'outlined' | 'contained';
  onClick?: () => void;
};

const MoveButton: React.FC<ButtonProps> = ({
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
