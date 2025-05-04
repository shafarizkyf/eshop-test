import {Dimensions} from 'react-native';

const {width: wWidth} = Dimensions.get('window');
export const PRODUCT_CARD_SIZE = wWidth / 2 - 25;
export const CATEGORY_CARD_SIZE = wWidth / 3 - 20;
