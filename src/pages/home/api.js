import {postAjax, postJSON} from '@/utils/ajax.js';


// const postBannerReq = (input={}, callback) => postAjax('/api/v1/content/homePage/carouselMap', input, callback);
// const postNewsReq = (input={}, callback) => postAjax('/api/v1/consulation/homePage/newsList', input, callback);
// const postCaseReq = (input={}, callback) => postAjax('/api/v1/content/vendorContent/selectVendorChosenTypicalCases', input, callback);
const postBannerReq = (input={}) => postJSON('/api/v1/content/homePage/carouselMap', input);
const postNewsReq = (input={}) => postJSON('/api/v1/consulation/homePage/newsList', input);
const postCaseReq = (input={}) => postJSON('/api/v1/content/vendorContent/selectVendorChosenTypicalCases', input);



export {postBannerReq, postNewsReq, postCaseReq}