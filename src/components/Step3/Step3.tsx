import React from 'react';
import './Step3.sass';
import Header from '../Header/Header';
import MoveButton from '../MoveButton/MoveButton';
import MainForm from '../MainForm/MainForm';
import { useAppDispatch } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useSelector } from 'react-redux';
import {
  selectChecked,
  toggleChecked,
} from '../../redux/slice/stepChecked';

const Step3 = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { items } = useSelector(selectChecked);
  

  // const handleChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   dispatch(
  //     setCheckbox({
  //       [event.target.name]: event.target.checked,
  //     })
  //   );
  // };

  const onSubmit = () => {
    navigate('/summary');
  };

  const handleOnChange = (e:any) => {
    dispatch(toggleChecked(Number(e.target.id)));

  };
  // const change = (event: any) => {
  //   dispatch(toggleChecked(event.target.checked));
  // };

  const getFormattedPrice = (price: any) => `$${price.toFixed(2)}`;

  return (
    <div className="step3">
      <Header
        title={'Pick add-ons'}
        description={'Add-ons help enhance your gaming experience'}
      />
      <MainForm onSubmit={onSubmit}>
        <div className="step3__wrap-chexbox">
          {items.map(({ name, price, isChecked, id}) => {
            return (
              <li key={id}>
                <div className="toppings-list-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={id}
                      name={name}
                      value={name}
                      checked={isChecked}
                      onChange={handleOnChange}
                    />
                    <label htmlFor={id}>{name}</label>
                  </div>
                  <div className="right-section">
                    {getFormattedPrice(price)}
                  </div>
                </div>
              </li>
            );
          })}

          {/* <div className="step3__wrapper-item">
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked.online}
                  onChange={handleChange}
                  name="online"
                />
              }
              label="Online service"
            />
            <span>+1$/mo</span>
          </div> */}

          {/* <div className="step3__wrapper-item">
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked.larger}
                  onChange={handleChange}
                  name="larger"
                />
              }
              label="Larger storage"
            />
            <span>+2$/mo</span>
          </div> */}

          {/* <div className="step3__wrapper-item">
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked.custom}
                  onChange={handleChange}
                  name="custom"
                />
              }
              label="Customizable Profile"
            />
            <span>+2$/mo</span>
          </div> */}
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

export default Step3;
