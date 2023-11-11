import css from './StatisticsItem.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <li
      className={clsx(
        css.item,
        label === '.docx' && css.docx,
        label === '.pdf' && css.pdf,
        label === '.mp3' && css.mp3,
        label === '.psd' && css.psd
      )}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
