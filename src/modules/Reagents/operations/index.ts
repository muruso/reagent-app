// @flow
// import type { Dispatch } from 'redux';
// import { push } from 'connected-react-router';
import * as reagentsModule from '../index';

// import i18n from '~/utils/i18n';
// import * as flashMessage from '~/modules/flashMessage';

// import MetroncPublicpApi from '~/api/metronc/public';
// import * as sharedMovie from '~/modules/sharedMovie';

const loadReagents = (dispatch) => async () => {
  const method = 'GET';
  // const body = new FormData(document.getElementById('form'));
  fetch('http://127.0.0.1:3000/api/v1/reagents', { method })
    .then((response) => response.json())
    .then((responseJson) => {
      console.error(responseJson);
      dispatch(reagentsModule.success({ reagents: responseJson.reagents }));
    });
};

export default loadReagents;

// const loadSharedRevision = async (
//   dispatch: Dispatch<any>,
//   params: {
//     token: string,
//     password: string,
//     withPassword: boolean
//   }
// ) => {
//   const { token, password, withPassword } = params;
//   const response = await MetroncPublicpApi.request(`shared_revision`, 'POST', {
//     data: {
//       token: token,
//       password: password
//     }
//   });

//   if (response.ok) {
//     const sharedRevision = response.json.sharedRevision;
//     dispatch(
//       sharedMovie.loadSharedRevisionSuccess({ sharedRevision: sharedRevision })
//     );
//   } else {
//     const { code } = response.json.error;
//     if (code === 401) {
//       if (withPassword) {
//         dispatch(
//           flashMessage.show(i18n.t('shared.login.passwordError'), 'error')
//         );
//       }
//       dispatch(sharedMovie.loadSharedRevisionRequiredAuth({}));
//     } else {
//       dispatch(sharedMovie.loadSharedRevisionFail({ code }));
//     }
//     return null;
//   }
// };

// export default loadSharedRevision;
