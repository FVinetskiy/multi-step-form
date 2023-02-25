import './Step1.sass';
import Header from '../Header/Header';
import MainForm from '../MainForm/MainForm';
import MoveButton from '../MoveButton/MoveButton';
import CustomInput from '../CustomInput/CustomInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { selectDetail, setData } from '../../redux/slice/stepSlice';

const scheme = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
    .required('First name is a required field'),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(
      /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
      'Phone number is not valid'
    )
    .required('Phone number is required'),
});

const Step1 = () => {
  const dispatch = useAppDispatch();
  const { data } = useSelector(selectDetail);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      firstName: data.firstName,
      email: data.email,
      phone: data.phone,
    },
    resolver: yupResolver(scheme),
  });

  const onSubmit = (data: Object) => {
    navigate('/select-plan');
    dispatch(setData(data));
  };

  return (
    <div>
      <Header
        title={'Personal info'}
        description={
          'Please provide your name , email address and phone number'
        }
      />
      <MainForm onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          {...register('firstName')}
          id="name"
          type="text"
          label="name"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <CustomInput
          {...register('email')}
          id="email"
          type="email"
          label="email"
          name="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <CustomInput
          {...register('phone')}
          id="phone"
          type="phone"
          label="phone"
          name="phone"
          error={!!errors.phone}
          helperText={errors?.phone?.message}
        />

        <MoveButton variant={'contained'} text={'Next Step'} />
      </MainForm>
    </div>
  );
};

export default Step1;
