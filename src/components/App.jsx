import {
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
} from 'components';
import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';

const appStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'spaceAround',
  margin: '50px',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
  gap: '20px',
};

export const App = () => {
  return (
    <div style={appStyle}>
      <Profile {...user}></Profile>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friendsList={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
