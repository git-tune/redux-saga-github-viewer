import { connect } from 'react-redux';
import Modal from '../components/organisms/Modal';

const mapStateToProps = ({ ui: { modal } }) => {
  return {
    show: modal.show,
    component: modal.stack.slice(-1)[0],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
