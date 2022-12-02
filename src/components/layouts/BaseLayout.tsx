import { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const BaseLayout: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default BaseLayout;
