import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {RootStackParamList} from './RootNavigation';
import {BottomTabNavigationType} from './BottomTabNavigation';

export const navigationRef = createNavigationContainerRef<
  RootStackParamList & BottomTabNavigationType
>();

export function navigateTo(routeName: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(routeName, params));
  }
}
