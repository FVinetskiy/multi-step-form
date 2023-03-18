import { FC } from 'react';
import VideoBG from '../VideoBG/VideoBG';
import { Outlet } from 'react-router-dom';
import Aside from '../Aside/Aside';

const Layout: FC = () => {
  return (
    <>
      <VideoBG />
      <div className="mainform">
        <Aside />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
