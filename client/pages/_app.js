import FirebaseAuthState from '../components/FirebaseAuthState';
import Nav from '../components/Nav';
import { Provider } from '../context';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <FirebaseAuthState>
        <Nav />
        <Component {...pageProps} />
      </FirebaseAuthState>
    </Provider>
  );
}

export default MyApp;
