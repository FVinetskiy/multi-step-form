import './Step3.sass';
import Header from '../Header/Header';
import MoveButton from '../MoveButton/MoveButton';
import MainForm from '../MainForm/MainForm';
import { useAppDispatch } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectChecked,
  toggleChecked,
} from '../../redux/slice/stepChecked';
import { selectDetail } from '../../redux/slice/stepSlice';
import { FC } from 'react';

const Step3: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { items } = useSelector(selectChecked);
  const { switchYearly } = useSelector(selectDetail);

  const onSubmit = () => {
    navigate('/summary');
  };

  const handleOnChange = (e: any) => {
    dispatch(toggleChecked(Number(e.target.id)));
  };

  const getFormattedPrice = (price: any) => `$${price.toFixed(2)}`;

  return (
    <div className="step3">
      <Header
        title={'Pick add-ons'}
        description={'Add-ons help enhance your gaming experience'}
      />
      <MainForm onSubmit={onSubmit}>
        <ul className="step3__wrap-chexbox">
          {items.map(({ name, price, isChecked, id }) => {
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
                    {switchYearly
                      ? getFormattedPrice(price * 10)
                      : getFormattedPrice(price)}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="step2__wrapper-button">
          <MoveButton
            variant={'outlined'}
            disabled={false}
            text={' Go back'}
            onClick={() => navigate(-1)}
          />
          <MoveButton
            disabled={false}
            variant={'contained'}
            text={'Next Step'}
          />
        </div>
      </MainForm>
      <hr />
    </div>
  );
};

export default Step3;
