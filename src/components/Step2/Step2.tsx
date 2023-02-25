import './Step2.sass';
import Header from '../Header/Header';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import {
  selectDetail,
  setValueplan,
  setSwitch,
} from '../../redux/slice/stepSlice';
import Switch from '@mui/material/Switch';
import MainForm from '../MainForm/MainForm';
import { useNavigate } from 'react-router-dom';
import MoveButton from '../MoveButton/MoveButton';
import './Step2.sass';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import React from 'react';

const Step2 = () => {
  const dispatch = useAppDispatch();
  const { plan, switchYearly, valuePlan } = useSelector(selectDetail);
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/add-ons');
  };

  const switchHandler = (event:any) => {
    dispatch(setSwitch(event.target.checked));
  };

  const handleAlignment = (event:any, alignment:any) => {
    if (alignment !== null) {
      dispatch(setValueplan(alignment));
    }
  };

  return (
    <div className="step2">
      <Header
        title={'Select your plan'}
        description={
          'You have the option of monthly or yearly billing'
        }
      />
      <MainForm onSubmit={onSubmit}>
        <ToggleButtonGroup
          className="MainButtonGroup"
          value={valuePlan}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          {plan.map((item ) => (
            <ToggleButton
              id={item.id}
              key={item.id}
              value={item.name}
              className="step2__wrap-radio"
            >
              <p>{item.name} </p>
              {switchYearly ? (
                <p>{item.price * 10} $</p>
              ) : (
                <p>{item.price} $</p>
              )}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <div className="step2__wrapper-Switch">
          <p className={switchYearly ? '' : 'active'}>Monthly </p>
          <Switch checked={switchYearly} onChange={switchHandler} />
          <p className={switchYearly ? 'active' : ''}>Yearly</p>
        </div>
        <div className="step2__wrapper-button">
          <MoveButton
            variant={'outlined'}
            text={' Go back'}
            onClick={() => navigate(-1)}
          />
          <MoveButton variant={'contained'} text={'Next Step'} />
        </div>
      </MainForm>
      <hr />
    </div>
  );
};

export default Step2;
