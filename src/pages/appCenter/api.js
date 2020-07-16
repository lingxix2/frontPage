import {postFetch} from '@/utils/ajax.js';


const postContentReq = (input={}) => postFetch('/api/v1/application/selectAllIndustrialApp', input);



export default postContentReq;