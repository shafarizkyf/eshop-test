import * as React from 'react';
import {useFocusEffect} from '@react-navigation/native';

export function useRefreshOnFocus(refetch: () => void) {
  const enabledRef = React.useRef(false);

  useFocusEffect(
    React.useCallback(() => {
      if (enabledRef.current) {
        console.log('focus refresh');
        refetch();
      } else {
        enabledRef.current = true;
      }
    }, [refetch]),
  );
}
