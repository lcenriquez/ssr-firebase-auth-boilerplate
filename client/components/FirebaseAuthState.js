import { onIdTokenChanged } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { axiosAuth } from '../actions/axios';
import { Context } from '../context';
import { auth } from '../firebase';

export default function FirebaseAuthState({ children }) {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    return onIdTokenChanged(auth, async (user) => {
      if (!user) {
        dispatch({ type: 'LOGOUT' });
      } else {
        // Send auth token to the backend
        const { token } = await user.getIdTokenResult();
        console.log('token:', token);
        axiosAuth
          .post(
            '/current-user',
            {},
          )
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
