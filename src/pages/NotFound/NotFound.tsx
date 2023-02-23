import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.sass';
import Button from '@mui/material/Button';

const NotFound: React.FC = () => {
  return (
    <div className="notfound">
      <span>404 not found</span>
      <Button variant="contained">
        <Link to="/">вернуться на главную</Link>
      </Button>
    </div>
  );
};

export default NotFound;
