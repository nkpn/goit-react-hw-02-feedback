import React from 'react';
import s from './Controls.module.css';
import PropTypes from 'prop-types';

const Controls = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul className={s.Control__list}>
        {options.map(option => (
          <li key={option}>
            <button
              type="button"
              onClick={onLeaveFeedback}
              className={s.Control__button}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

Controls.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Controls;
