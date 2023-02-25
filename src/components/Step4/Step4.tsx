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

const Step4 = () => {
  const navigate = useNavigate();
  const { switchYearly } = useSelector(selectDetail);
  const { items } = useSelector(selectChecked);

  const dispatch = useAppDispatch();

  const onSubmit = () => {
    navigate('/summary');
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

  return (
    <div>
      <Header
        title={'Finishing up'}
        description={
          'Double-check everything looks OK before confirming'
        }
      />

      <div className="result">
        <p>Arcade ( {switchYearly ? 'Yearly' : 'Monthly'} )</p>
        <button className="result__link" onClick={setSwitchOr}>
          Change
        </button>
        <hr />
        {ArrCheckBoxTrue.map((item) => (
          <div className="result__cheked" key={item.id}>
            <p>{item.name}</p>
            <p>{`$${item.price.toFixed(2)}`}</p>
          </div>
        ))}

        <p className="totalPrice">
          total per({switchYearly ? 'Yearly' : 'Monthly'})
        </p>
      </div>

      <MainForm onSubmit={onSubmit}>
        <div className="step2__wrapper-button">
          <MoveButton
            variant={'outlined'}
            text={' Go back'}
            onClick={() => navigate(-1)}
          />
          <MoveButton
            onClick={finish}
            variant={'contained'}
            text={'Confirm'}
          />
        </div>
      </MainForm>
      <hr />
    </div>
  );
};

export default Step4;
