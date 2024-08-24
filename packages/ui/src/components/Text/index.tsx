import React from 'react';

export type TextProps = {
  children: React.ReactElement | string;
}

export const Text: React.FC<TextProps> = (props) => {
  return <p>{props.children}</p>;
};
