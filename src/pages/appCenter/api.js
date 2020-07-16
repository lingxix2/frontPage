import {postFetch} from '@/utils/ajax.js';


// const postContentReq = (input={}, callback) => postAjax('/api/v1/application/selectAllIndustrialApp', input, callback);
const postContentReq = (input={}) => postFetch('/api/v1/application/selectAllIndustrialApp', input);



export default postContentReq;