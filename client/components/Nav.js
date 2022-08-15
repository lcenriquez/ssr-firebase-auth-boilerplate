import Link from "next/link";
import { useContext } from "react";
import { Context } from "../context";
import { auth } from "../firebase";

export default function Nav() {
  const { state: { user }, dispatch } = useContext(Context);

  const handleLogout = async () => {
    await auth.signOut();
    dispatch({
      type: 'LOGOUT'
    });
  };

  return (
    <nav>
      <Link href='/'><a>Home</a></Link>
      { user ? (
        <Link href='/login'><a onClick={handleLogout}>Logout</a></Link>
      ) : (
        <Link href='/login'><a>Login</a></Link>
      ) }
    </nav>
  )
}