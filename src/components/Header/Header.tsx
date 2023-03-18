import { FC } from 'react';
import './Header.sass';

type IheaderProps = {
  title: string;
  description: string;
};

const Header:FC<IheaderProps> = ({ title, description }) => {
  return (
    <div className="header">
      <p className="header__title">🐱{title}</p>
      <p className="header__description">{description}</p>
    </div>
  );
};

export default Header;
