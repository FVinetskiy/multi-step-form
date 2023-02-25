import './Step2.sass';
import Header from '../Header/Header';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import {
  selectDetail,
  setplan,
  setSwitch,
} from '../../redux/slice/stepSlice';
import Switch from '@mui/material/Switch';
import MainForm from '../MainForm/MainForm';
import { useNavigate } from 'react-router-dom';
import MoveButton from '../MoveButton/MoveButton';
import './Step2.sass';

const Step2 = () => {
  const dispatch = useAppDispatch();
  const { plan, switchYearly } = useSelector(selectDetail);

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/add-ons');
  };

  const onOptionChange = (e) => {
    dispatch(setplan(e.target.value));
  };

  const switchHandler = (event) => {
    dispatch(setSwitch(event.target.checked));
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
        <div className="step2__content-radio">
          <div className="step2__wrap-radio">
            <input
              type="radio"
              name="plan"
              value="Arcade"
              id="Arcade"
              checked={plan === 'Arcade'}
              onChange={onOptionChange}
            />
            <label htmlFor="Arcade">
              <p>Arcade</p>
              <p>9$</p>
            </label>
          </div>
          <div className="step2__wrap-radio">
            <input
              type="radio"
              name="plan"
              value="Advanced"
              id="Advanced"
              checked={plan === 'Advanced'}
              onChange={onOptionChange}
            />
            <label htmlFor="Advanced">
              <p>Advanced</p>
              <p>12$</p>
            </label>
          </div>
          <div className="step2__wrap-radio">
            <input
              type="radio"
              name="plan"
              value="Pro"
              id="Pro"
              checked={plan === 'Pro'}
              onChange={onOptionChange}
            />
            <label htmlFor="Pro">
              <p>Pro</p>
              <p>15$</p>
            </label>
          </div>
        </div>

        <div className="step2__wrapper-Switch">
          <p>Monthly</p>
          <Switch checked={switchYearly} onChange={switchHandler} />
          <p>Yearly</p>
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
