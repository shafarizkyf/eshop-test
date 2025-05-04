import {PropsWithChildren, ReactNode} from 'react';

const RenderIf = ({
  isTrue,
  children,
}: PropsWithChildren & {
  isTrue: boolean;
}): ReactNode | null => (isTrue ? children : null);

export default RenderIf;
