import { NavLink } from 'react-router-dom';
import './Aside.sass';
import { FC } from 'react';

const Aside:FC = () => {
  return (
    <ul className="steps">
      <li className="steps__item">
        <NavLink className="steps__link-nav" to="/">
          <span className="steps__circle">1</span>
          <div className="steps__wrap-text">
            <span className="steps__title">STEP 1</span>
            <p className="steps__description">YOUR INFO</p>
          </div>
        </NavLink>
      </li>
      <li className="steps__item">
        <NavLink className="steps__link-nav" to="/select-plan">
          <span className="steps__circle">2</span>
          <div className="steps__wrap-text">
            <span className="steps__title">STEP 2</span>
            <p className="steps__description">SELECT PLAN</p>
          </div>
        </NavLink>
      </li>
      <li className="steps__item">
        <NavLink className="steps__link-nav" to="/add-ons">
          <span className="steps__circle">3</span>
          <div className="steps__wrap-text">
            <span className="steps__title">STEP 3</span>
            <p className="steps__description">ADD-ONS</p>
          </div>
        </NavLink>
      </li>
      <li className="steps__item">
        <NavLink className="steps__link-nav" to="/summary">
          <span className="steps__circle">4</span>
          <div className="steps__wrap-text">
            <span className="steps__title">STEP 4</span>
            <p className="steps__description">SUMMARY</p>
          </div>
        </NavLink>
      </li>
    </ul>
  );
};

export default Aside;
