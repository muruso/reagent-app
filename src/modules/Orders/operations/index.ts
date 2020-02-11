// @flow
import * as ordersModule from '../index';

const loadOrders = dispatch => async () => {
  const method = 'GET';
  fetch('http://127.0.0.1:3000/api/v1/orders', { method })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(ordersModule.success({ orders: responseJson.orders }));
    });
};

export default loadOrders;
