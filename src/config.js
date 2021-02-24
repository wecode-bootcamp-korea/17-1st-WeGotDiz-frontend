//common API
export const API = '';

//local mock data

export const RANK_DATA = '/public/data/planerRankData.json';
export const PLAN_DATA = '/public/data/planerData.json';
export const PRODUCTLIST_DATA = '/public/data/productListData.json';

export const PRODUCTDETAIL_DATA = '/public/data/productData.json';
export const MAKERINFO_DATA = '/public/data/productData.json';
export const CATEGORYLIST_DATA = '/public/data/categoryListData.json';

//정민님 메인 상품페이지, 기획전 상품리스트, 카테고리 정렬, 전체/진행/종료 필터링
export const PRODUCTLIST_API = `http://10.58.2.108:8000/product/main`;
export const PLAN_API = 'http://10.58.1.148:8000/product/main';
// export const CATEGORY_FILTER_API = `http://10.58.2.108:8000/product/main/${category.id}`;
export const ING_FILTER_API = ``;

//사랑님 상품 상세페이지, (추후 의논)
// export const PRODUCTDETAIL_API = `http://10.58.1.148:8000/product/${this.props.match.params.id}`;

//혜성님 회원가입, 로그인, 마이페이지
export const SIGNUP_API = 'http://172.20.10.7:8000/user/signup';
export const SIGNIN_API = 'http://10.58.2.95:8000/user/signin';
