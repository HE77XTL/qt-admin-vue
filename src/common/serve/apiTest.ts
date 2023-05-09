import vHttp from '../request/vHttp';

import {HttpOptionsInterface} from '../utils/responseUtil';

const getApiTest = (params: any, options?: HttpOptionsInterface) => {

  //return vHttp.get('http://localhost:3000/cats', params);
  return new Promise((resolve, reject) => {
    vHttp.get('http://localhost:3000/cats', params);
  })
};
const getApiTest2 = (params: any, options?: HttpOptionsInterface) => {
  return vHttp.get('http://localhost:3000/cats', params);
};

export {
  getApiTest,
  getApiTest2
};
