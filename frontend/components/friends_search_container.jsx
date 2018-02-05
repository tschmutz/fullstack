import { connect } from 'react-redux';
import FriendsSearch from './friends_search.jsx';


const mapStateToProps = state => ({
  users: Object.values(state.users),
  currentUser: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({

});



export default connect(mapStateToProps, mapDispatchToProps)(FriendsSearch);
