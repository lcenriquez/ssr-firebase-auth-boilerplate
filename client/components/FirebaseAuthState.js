import { onIdTokenChanged } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { destroyCookie, setCookie } from 'nookies';
import { axiosAuth } from '../actions/axios';
import { Context } from '../context';
import { auth } from '../firebase';

export default function FirebaseAuthState({ children }) {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    return onIdTokenChanged(auth, async (user) => {
      if (!user) {
        dispatch({ type: 'LOGOUT' });
        destroyCookie(null, 'token');
        setCookie(null, 'token', '', {});
      } else {
        // Send auth token to the backend
        const { token } = await user.getIdTokenResult();
        console.log('token:', token);
        destroyCookie(null, 'token');
        setCookie(null, 'token', token, {});
        axiosAuth
          .post('/current-user', {})
          .then((res) => {
            console.log(res);
            dispatch({
              type: 'LOGIN',
              payload: res.data.firebaseUser,
            });
          });
        // Otherwise, we could handle it on the client side
        // dispatch({
        //   type: 'LOGIN',
        //   payload: user,
        // });
      }
    });
  }, []);

  return <>{children}</>;
}
