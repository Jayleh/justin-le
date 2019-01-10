import server from '../apis/server';
import { SEND_MESSAGE } from './types';

export const submitContact = formValues => async dispatch => {
  console.log(formValues);
  await server.post('/api/email', formValues);

  dispatch({ type: SEND_MESSAGE });

  // history.push('/surveys');
};
