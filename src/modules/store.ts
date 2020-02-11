import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
// import logger from 'redux-logger';
import reagentsReducer from './Reagents/index';
import orderReducer from './Orders/index';

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      reagents: reagentsReducer,
      orders: orderReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // applyMiddleware(logger)
  );

  return store;
}
