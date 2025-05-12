import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from './RootNavigation';
import {BottomTabNavigationType} from './BottomTabNavigation';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootStackProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeTabProps<T extends keyof BottomTabNavigationType> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabNavigationType, T>,
    StackScreenProps<RootStackParamList, 'HomeScreen'>
  >;
