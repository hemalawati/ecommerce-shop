import Commerce from '@chec/commerce.js';

//true means creating new commerce store
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);
