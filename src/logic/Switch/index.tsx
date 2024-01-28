import React, { ReactNode, FC } from "react";

interface SwitchProps {
  fallback?: ReactNode;
  children: ReactNode;
}

interface MatchProps<T> {
  when: T | undefined | null | false;
  children: ReactNode | ((item: T) => ReactNode);
}

export const Switch: FC<SwitchProps> = ({ children, fallback }) => {
  const childArray = React.Children.toArray(children);

  for (let i = 0; i < childArray.length; i++) {
    const child = childArray[i] as React.ReactElement<MatchProps<unknown>>;

    if (child.props.when) {
      return child;
    }
  }

  return fallback || null;
};

export const Match = <T,>({ when, children }: MatchProps<T>) => {
  if (when) {
    return typeof children === "function" ? children(when) : children;
  }

  return null;
};
