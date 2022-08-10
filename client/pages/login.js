import { useRouter } from 'next/router';
import { useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import LoginRegisterForm from '../components/LoginRegisterForm';

export default function Login() {
  const [email, setEmail] = useState('l@me.com');
  const [pass, setPass] = useState('123456');
  const router = useRouter();

  const login = async () => {
    let user;
    try {
      user = await signInWithEmailAndPassword(auth, email, pass);
      console.log('user:', user);
    } catch (e) {
      alert(e);
    }
  };

  const register = async () => {
    let user;
    try {
      user = await createUserWithEmailAndPassword(auth, email, pass);
      console.log('user:', user);
    } catch (e) {
      alert(e);
    }
  };

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
  }

  return (
    <div>
      <h2>Login page</h2>
      <LoginRegisterForm email={email} setEmail={setEmail} pass={pass} setPass={setPass} handleSubmit={login} value={'Login'} />
      <button onClick={googleLogin}>Log in with Google</button>
      <hr />
      <LoginRegisterForm email={email} setEmail={setEmail} pass={pass} setPass={setPass} handleSubmit={register} value={'Register'} />
    </div>
  );
}
