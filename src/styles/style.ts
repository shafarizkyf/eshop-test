import {StyleSheet} from 'react-native';
import color from './color';

/**
 * Generic styling that will be used frequently
 */

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  flex0: {
    flex: 0,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  row: {
    flexDirection: 'row',
  },
  rowAllCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBetweenInCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  alignItemEnd: {
    alignItems: 'flex-end',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  f10: {
    fontSize: 10,
  },
  f11: {
    fontSize: 11,
  },
  f12: {
    fontSize: 12,
  },
  f13: {
    fontSize: 13,
  },
  f14: {
    fontSize: 14,
  },
  f15: {
    fontSize: 15,
  },
  f16: {
    fontSize: 16,
  },
  f20: {
    fontSize: 20,
  },
  f22: {
    fontSize: 22,
  },
  f24: {
    fontSize: 24,
  },
  m0: {
    margin: 0,
  },
  m10: {
    margin: 10,
  },
  m16: {
    margin: 16,
  },
  m20: {
    margin: 20,
  },
  m15: {
    margin: 15,
  },
  ml0: {
    marginLeft: 0,
  },
  ml5: {
    marginLeft: 5,
  },
  ml10: {
    marginLeft: 10,
  },
  ml15: {
    marginLeft: 15,
  },
  ml20: {
    marginLeft: 20,
  },
  mr5: {
    marginRight: 5,
  },
  mr10: {
    marginRight: 10,
  },
  mr15: {
    marginRight: 15,
  },
  mr20: {
    marginRight: 20,
  },
  mb0: {
    marginBottom: 0,
  },
  mb5: {
    marginBottom: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  mb15: {
    marginBottom: 15,
  },
  mb20: {
    marginBottom: 20,
  },
  mb30: {
    marginBottom: 30,
  },
  mb40: {
    marginBottom: 40,
  },
  mb50: {
    marginBottom: 50,
  },
  mh5: {
    marginHorizontal: 5,
  },
  mh10: {
    marginHorizontal: 10,
  },
  mh20: {
    marginHorizontal: 20,
  },
  mh30: {
    marginHorizontal: 30,
  },
  mh40: {
    marginHorizontal: 40,
  },
  mv10: {
    marginVertical: 10,
  },
  mv20: {
    marginVertical: 20,
  },
  mv30: {
    marginVertical: 30,
  },
  mt0: {
    marginTop: 0,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mt12: {
    marginTop: 12,
  },
  mt15: {
    marginTop: 15,
  },
  mt16: {
    marginTop: 16,
  },
  mt20: {
    marginTop: 20,
  },
  mt30: {
    marginTop: 30,
  },
  mt40: {
    marginTop: 40,
  },
  p0: {
    padding: 0,
  },
  p8: {
    padding: 8,
  },
  pt20: {
    paddingTop: 20,
  },
  pr5: {
    paddingRight: 5,
  },
  pr10: {
    paddingRight: 10,
  },
  pl5: {
    paddingLeft: 5,
  },
  pl10: {
    paddingLeft: 10,
  },
  pl20: {
    paddingLeft: 20,
  },
  p5: {
    padding: 5,
  },
  p10: {
    padding: 10,
  },
  p20: {
    padding: 20,
  },
  p30: {
    padding: 30,
  },
  ph10: {
    paddingHorizontal: 10,
  },
  ph12: {
    paddingHorizontal: 12,
  },
  ph15: {
    paddingHorizontal: 15,
  },
  ph20: {
    paddingHorizontal: 20,
  },
  ph30: {
    paddingHorizontal: 30,
  },
  ph40: {
    paddingHorizontal: 40,
  },
  pv5: {
    paddingVertical: 5,
  },
  pv8: {
    paddingVertical: 8,
  },
  pv10: {
    paddingVertical: 10,
  },
  pv15: {
    paddingVertical: 15,
  },
  pv20: {
    paddingVertical: 20,
  },
  pb20: {
    paddingBottom: 20,
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  errorMessage: {
    fontSize: 10,
    marginTop: 3,
    color: 'red',
  },
  divider: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'grey',
  },
  bgCard: {
    backgroundColor: '#fff',
  },
  bgWhite: {
    backgroundColor: '#fff',
  },
  bgPrimary: {
    backgroundColor: color.primary,
  },
  shadow: {
    shadowColor: color.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  hiddenWebview: {
    position: 'absolute',
    width: 300,
    height: 300,
    zIndex: 1,
    top: -10000,
  },
  gap4: {
    gap: 4,
  },
  gap8: {
    gap: 8,
  },
  gap18: {
    gap: 18,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 600,
  },
});
