import postAjax from '@/utils/ajax.js';


const postBannerReq = (input={}, callback) => postAjax('/api/v1/content/homePage/carouselMap', input, callback);
const postNewsReq = (input={}, callback) => postAjax('/api/v1/consulation/homePage/newsList', input, callback);
const postCaseReq = (input={}, callback) => postAjax('/api/v1/content/vendorContent/selectVendorChosenTypicalCases', input, callback);


export {postBannerReq, postNewsReq, postCaseReq}