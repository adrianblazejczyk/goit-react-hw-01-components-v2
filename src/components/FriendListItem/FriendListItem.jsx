import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={css.item}>
      <span className={clsx(css.status, isOnline && css.statusOnLine)}>
        {' '}
        &#x00B7;
      </span>
      <img className={avatar} src={avatar} alt="User avatar" width="48" />
      <p className={name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
