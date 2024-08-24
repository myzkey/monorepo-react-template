export type TextProps = {
  children: React.ReactElement | string;
  color: "red";
};

export const Text: React.FC<TextProps> = (props) => {
  return <p>{props.children}</p>;
};
