import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { StatisticsItem } from '../StatisticsItem';

export const Statistics = ({ title, stats }) => (
  <section className={clsx(css.statistics, !title && css.heightSmall)}>
    {title && <h1 className={css.title}>{title}</h1>}
    <ul className={css.statList}>
      {stats.map(item => (
        <StatisticsItem key={item.id} {...item}></StatisticsItem>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
