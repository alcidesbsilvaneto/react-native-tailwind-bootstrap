import {Text} from '@/components/text/text.component';
import {SafeAreaView} from 'react-native';

export const LoginPage: React.FC = () => {
  return (
    <SafeAreaView className="items-center justify-center flex-1 bg-lightbg dark:bg-[#16181F]">
      <Text className="text-5xl">Login</Text>
    </SafeAreaView>
  );
};
