import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchFriends} from '../../actions/friend_actions';
import { fetchAllBills } from '../../actions/bills_actions';
import { fetchUsers } from '../../actions/user_actions';


function mapStateToProps({session, bills, users, friends}){
  const id = session.currentUser.id
  const amountLent = Object.keys(bills).reduce((total, billId) => {
        const bill = bills[billId]
        const amount = parseInt(bill.amount)
        const lender = bill.lender
        if(id === lender) {
          return amount + total
        }else {
          return total
        }
  }, 0)
  const amountBorrowed = Object.keys(bills).reduce((total, billId) => {
    const bill = bills[billId]
    const amount = parseInt(bill.amount)
    const lendee = bill.lendee
    if(id === lendee) {
      return amount + total
    }else {
      return total
    }
  }, 0)

  const totalAmount = amountLent - amountBorrowed

  return {
    totalAmount,
    amountBorrowed,
    amountLent,
    friends,
    bills,
    users,
  }
};

const mapDispatchToProps = dispatch => ({
  requestFriends: () => dispatch(fetchFriends()),
  requestBills: () => dispatch(fetchAllBills()),
  requestUsers: () => dispatch(fetchUsers()),
});



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
