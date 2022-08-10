import FirebaseAuthState from '../components/FirebaseAuthState';
import { Provider } from '../context';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <FirebaseAuthState>
        <Component {...pageProps} />
      </FirebaseAuthState>
    </Provider>
  );
}

export default MyApp;
