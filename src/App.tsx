import {StatusBar} from 'react-native';
import {Navigation} from '@/components/navigation/navigation-wrapper.component';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import './styles/globals.css';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <Toast topOffset={(StatusBar.currentHeight ?? 0) + 70} />
    </QueryClientProvider>
  );
};

export default App;
