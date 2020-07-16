import {postFetch} from '@/utils/ajax.js';

const postBannerReq = (input)=> postFetch('/api/v1/content/homePage/carouselMap', input);
const postNewsReq = (input={}) => postFetch('/api/v1/consulation/homePage/newsList', input);
const postCaseReq = (input={}) => postFetch('/api/v1/content/vendorContent/selectVendorChosenTypicalCases', input);




export {postBannerReq, postNewsReq, postCaseReq}