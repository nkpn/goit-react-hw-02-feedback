import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={s.Stat__list}>
    <li className={s.Stat__item}>Good: {good}</li>
    <li className={s.Stat__item}>Neutral: {neutral}</li>
    <li className={s.Stat__item}>Bad: {bad}</li>
    <li className={s.Stat__item}>Total: {total}</li>
    <li className={s.Stat__item}>Positive feedback: {positivePercentage}%</li>
  </ul>
);

export default Statistics;
