import {View} from 'react-native';

interface BaseStyleProviderProps {
  children: React.ReactNode;
}

export const BaseStyleProvider: React.FC<BaseStyleProviderProps> = ({
  children,
}) => {
  return <View className="text-red-300 flex-1">{children}</View>;
};
