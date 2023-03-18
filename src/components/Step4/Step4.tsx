import './Step4.sass';
import Header from '../Header/Header';
import MainForm from '../MainForm/MainForm';
import MoveButton from '../MoveButton/MoveButton';
import { useNavigate } from 'react-router-dom';
import './Step4.sass';
import { useSelector } from 'react-redux';
import {
  selectDetail,
  setSwitchOnStep4,
} from '../../redux/slice/stepSlice';
import { useAppDispatch } from '../../redux/store';
import { selectChecked } from '../../redux/slice/stepChecked';
import { FC } from 'react';

const Step4:FC = () => {
  const navigate = useNavigate();
  const { switchYearly, plan, valuePlan } = useSelector(selectDetail);
  const { items } = useSelector(selectChecked);

  const dispatch = useAppDispatch();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const finish = () => {
    alert('you have successfully completed the form');
  };

  const setSwitchOr = () => {
    if (switchYearly === true) {
      dispatch(setSwitchOnStep4(false));
    } else {
      dispatch(setSwitchOnStep4(true));
    }
  };

  const ArrCheckBoxTrue = items.filter(
    (word) => word.isChecked === true
  );

  const activePlan = plan.filter((item) => item.name === valuePlan);
  const price = activePlan.map((i) => i.price);
  const resultActivePlan = `$${price[0].toFixed(2)}`;
  const resultActivePlanSwitch = price[0] * 10;
  const priceMOD = price[0];
  const priceSumOption = ArrCheckBoxTrue.map((i) => i.price).reduce(
    (sum, elem) => sum + elem,
    0
  );
  const totalPrice = priceSumOption + priceMOD;

  return (
    <div>
      <Header
        title={'Finishing up'}
        description={
          'Double-check everything looks OK before confirming'
        }
      />
      <div className="result">
        <button className="result__link" onClick={setSwitchOr}>
          Change
        </button>
        <div className="result__header">
          <p>
            {activePlan.map((i) => i.name)} ({' '}
            {switchYearly ? 'Yearly' : 'Monthly'} )
          </p>

          {switchYearly ? (
            <p>{`$${resultActivePlanSwitch.toFixed(2)}`}</p>
          ) : (
            <p>{resultActivePlan}</p>
          )}
        </div>

        {ArrCheckBoxTrue.map((item) => (
          <div className="result__cheked" key={item.id}>
            <p>{item.name}</p>
            {switchYearly ? (
              <p>{`$${(item.price * 10).toFixed(2)}`}</p>
            ) : (
              <p>{`$${item.price.toFixed(2)}`}</p>
            )}
          </div>
        ))}

        <p className="totalPrice">
          <span>
            total per({switchYearly ? 'Yearly' : 'Monthly'})
          </span>
          <span>
            {switchYearly ? `$${totalPrice * 10}` : `$${totalPrice}`}
          </span>
        </p>
      </div>

      <div className="step2__wrapper-button">
        <MoveButton
          disabled={false}
          variant={'outlined'}
          text={'Go back'}
          onClick={() => navigate(-1)}
        />
        <MainForm onSubmit={onSubmit}>
          <MoveButton
            disabled={false}
            onClick={finish}
            variant={'contained'}
            text={'Confirm'}
          />
        </MainForm>
      </div>
    </div>
  );
};

export default Step4;
