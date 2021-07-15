import React from 'react';
import s from './Controls.module.css';

const Controls = ({ goodIncrement, neutralIncrement, badIncrement }) => (
  <div className={s.Control__buttons}>
    <button type="button" onClick={goodIncrement}>
      Good
    </button>
    <button type="button" onClick={neutralIncrement}>
      Neutral
    </button>
    <button type="button" onClick={badIncrement}>
      Bad
    </button>
  </div>
);

export default Controls;
