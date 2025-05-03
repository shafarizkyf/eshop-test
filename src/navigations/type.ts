import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from './RootNavigation';

export type RootStackProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
