import postAjax from '@/utils/ajax.js';


const postContentReq = (input={}, callback) => postAjax('/api/v1/application/selectAllIndustrialApp', input, callback);


export default postContentReq;