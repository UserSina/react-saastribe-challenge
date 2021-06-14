import { API } from './index';

export const getComments = async (cancelToken) => {
  return await API.get('/comments?_limit=5', { cancelToken: cancelToken });
};
