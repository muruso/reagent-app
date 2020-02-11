import { connect } from 'react-redux';
import History from '../../components/History';
import OrdersOperation from '../../modules/Orders/operations/index';

const mapStateToProps = state => ({
  orders: state.orders
});

const mapDispatchToProps = dispatch => ({
  loadOrders: OrdersOperation(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
