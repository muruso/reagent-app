// @flow
import * as reagentsModule from '../index';

const loadReagents = (dispatch) => async () => {
  const method = 'GET';
  fetch('http://127.0.0.1:3000/api/v1/reagents', { method })
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(reagentsModule.success({ reagents: responseJson.reagents }));
    });
};

export default loadReagents;
