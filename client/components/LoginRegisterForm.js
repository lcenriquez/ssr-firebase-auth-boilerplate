export default function LoginRegisterForm({ email, setEmail, pass, setPass, handleSubmit, value }) {
  return (
    <>
      <div>
        <label>Email</label>
        <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} />
      </div>
      <div>
        <label>Password</label>
        <input type='password' onChange={(e) => setPass(e.target.value)} value={pass} />
      </div>
      <div>
        <button onClick={handleSubmit}>{value}</button>
      </div>
    </>
  );
}
