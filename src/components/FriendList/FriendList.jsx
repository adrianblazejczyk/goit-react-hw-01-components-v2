import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from 'components';

export const FriendList = ({ friendsList }) => {
  return (
    <ul className={css.friendList}>
      {friendsList.map(friendItem => (
        <FriendListItem key={friendItem.id} {...friendItem}></FriendListItem>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
