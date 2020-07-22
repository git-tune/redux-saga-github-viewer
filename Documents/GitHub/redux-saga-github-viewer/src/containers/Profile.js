import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Profile from '../pages/Profile';
import { actionCreators } from '../actions';

const mapStateToProps = ({ user }) => {
  return {
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
