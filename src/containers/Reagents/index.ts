import { connect } from 'react-redux';
import * as reagentsModule from '../../modules/Reagents/index';
import Reagents from '../../components/Reagents';
import ReagentsOperation from '../../modules/Reagents/operations/index';

const mapStateToProps = (state) => ({
  reagents: state.reagents,
});

const mapDispatchToProps = (dispatch) => ({
  load: ReagentsOperation(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Reagents);
