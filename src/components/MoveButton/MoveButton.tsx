import Button from '@mui/material/Button';

type ButtonProps = {
  text: string
}

const MoveButton: React.FC<ButtonProps> = ({ text  , ...props}) => {
  return (
    <Button {...props} type="submit" variant="contained">
      {text}
    </Button>
  );
};

export default MoveButton;
