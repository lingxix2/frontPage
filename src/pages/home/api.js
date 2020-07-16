import Https from '@/utils/https.js'

const postBannerReq = (params)=> Https('api/v1/content/homePage/carouselMap', 'post', params);
const postNewsReq = (params) => Https('api/v1/consulation/homePage/newsList', 'post', params);
const postCaseReq = (params) => Https('api/v1/content/vendorContent/selectVendorChosenTypicalCases', 'post', params);




export {postBannerReq, postNewsReq, postCaseReq}