import type {ComponentType, PropsWithChildren, ReactNode} from 'react';
import React from 'react';

type ComposeProvidersProps = PropsWithChildren & {
  /** Provider components go here */
  components: Array<ComponentType<PropsWithChildren>>;
};

function ComposeProviders(props: ComposeProvidersProps): ReactNode {
  return props.components.reduceRight((memo, Component) => {
    console.log(Component);
    return <Component>{memo}</Component>;
  }, props.children);
}

ComposeProviders.displayName = 'ComposeProviders';
export default ComposeProviders;
