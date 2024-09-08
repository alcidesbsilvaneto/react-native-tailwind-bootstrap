import {isIOS} from '@/utils/is-ios.util';

export const fontFamilies = {
  QUICKSAND: {
    normal: isIOS() ? 'Quicksand-Regular' : 'QuicksandRegular',
    medium: isIOS() ? 'Quicksand-Medium' : 'QuicksandMedium',
    bold: isIOS() ? 'Quicksand-Bold' : 'QuicksandBold',
    italic: isIOS() ? 'Quicksand-Italic' : 'QuicksandItalic',
    extraBold: isIOS() ? 'Quicksand-ExtraBold' : 'QuicksandExtraBold',
    light: isIOS() ? 'Quicksand-Light' : 'QuicksandLight',
  },
};
