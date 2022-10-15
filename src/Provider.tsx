import React, { createContext, ReactElement } from "react";
import { Observer } from "mobx-react";

import * as store from "./store/index";

interface ChildrenProps<T> {
    children: (value: T) => ReactElement<T>
}

interface Props {
    children: React.ReactNode;
  }

export const RootContext = createContext<IStore>(store);

/**
 * Observer
 */
export const RootConsumer = ({ children }: ChildrenProps<IStore>) => <Observer>{() => children(store)}</Observer>;

const Provider: React.FC<Props>= ({ children }) => <RootContext.Provider value={{ ...store }}>{children}</RootContext.Provider>;

export default Provider;