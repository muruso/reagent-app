import { connect } from 'react-redux';
// import * as reagentsModule from '../../modules/Reagents/index';
import Order from '../../components/Order';
import ReagentsOperation from '../../modules/Reagents/operations/index';

const mapStateToProps = state => ({
  reagents: state.reagents
});

const mapDispatchToProps = dispatch => ({
  loadReagents: ReagentsOperation(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
