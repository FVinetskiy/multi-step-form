import React, { Children } from 'react';
import './MainForm.sass';

interface IpropsForm {
  children?: React.ReactNode;
  onSubmit: (param: any) => void;
}

const MainForm = ({onSubmit, children, ...props }: IpropsForm) => {
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
