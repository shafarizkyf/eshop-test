import {PropsWithChildren} from 'react';
import ActionSheet from 'react-native-actions-sheet';
import color from 'styles/color';

type Props = PropsWithChildren & {
  sheetId: (string & {}) | undefined;
};

const BaseActionSheet = (props: Props) => {
  return (
    <ActionSheet
      id={props.sheetId}
      overlayColor={color.primary}
      gestureEnabled
      indicatorStyle={{
        height: 5,
        width: 36,
        borderRadius: 2.5,
      }}
      defaultOverlayOpacity={0.5}
      containerStyle={{
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}>
      {props.children}
    </ActionSheet>
  );
};

export default BaseActionSheet;
