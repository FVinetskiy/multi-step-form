import React from 'react';
import './Step2.sass';
import Header from '../Header/Header';

const Step2 = () => {
  return (
    <div>
      <Header
        title={'Select your plan'}
        description={
          'You have the option of monthly or yearly billing'
        }
      />
    </div>
  );
};

export default Step2;
