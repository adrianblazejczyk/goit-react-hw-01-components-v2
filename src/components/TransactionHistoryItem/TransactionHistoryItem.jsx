import css from './TransactionHistoryItem.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
export const TransactionHistoryItem = ({
  id,
  type,
  amount,
  currency,
  index,
}) => {
  return (
    <tr className={clsx(index % 2 ? css.bgcWhite : css.bgcGray)}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
