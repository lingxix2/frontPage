import Https from '@/utils/https.js'


const postContentReq = (params={}) => Https('/api/v1/application/selectAllIndustrialApp', 'post', params);



export default postContentReq;