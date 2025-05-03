import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {RootStackParamList} from './RootNavigation';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigateTo(routeName: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(routeName, params));
  }
}
