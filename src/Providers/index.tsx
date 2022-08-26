import { ReactNode } from 'react';
import UserProvider from './user'

interface IProvaiders{
  children: ReactNode;
}

const Providers = ({ children }: IProvaiders) => {
    return(
      <UserProvider>{children}</UserProvider>
    )
};

export default Providers;