import React, { FC } from 'react';
import './MainForm.sass';

interface IpropsForm {
  children?: React.ReactNode;
  onSubmit: (param: any) => void;
}

const MainForm: FC<IpropsForm> = ({
  onSubmit,
  children,
  ...props
}) => {
  return (
    <form
      autoComplete="off"
      onSubmit={onSubmit}
      noValidate
      {...props}
      className="MainForm"
    >
      {children}
    </form>
  );
};

export default MainForm;
