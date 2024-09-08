import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import {twMerge} from 'tailwind-merge';

export interface TextProps extends RNTextProps {
  bold?: boolean;
  italic?: boolean;
  light?: boolean;
}
export const Text: React.FC<TextProps> = props => {
  const classNames: string[] = [
    'text-black',
    'dark:text-white',
    'font-[Quicksand]',
  ];
  const {bold, italic, light} = props;

  if (bold) {
    classNames.push('font-bold');
  }
  if (italic) {
    classNames.push('italic');
  }
  if (light) {
    classNames.push('font-light');
  }

  return (
    <RNText
      {...props}
      className={twMerge(classNames.join(' '), props.className)}>
      {props.children}
    </RNText>
  );
};
