import useFormInput from '../hooks/useFormInput';

const Login = () => {
  const username = useFormInput('');
  const password = useFormInput('');

  const handleOnLogin = () => {
    console.log('Logging in with', `user: ${username.value}`, 'and pass:', `${password.value}`);
  };
  return (
    <div>
      <form>
        <label>Username</label>
        <input {...username} />
        <label>Password</label>
        <input {...password} />
      </form>
      <button onClick={handleOnLogin}>Login</button>
    </div>
  );
};

export default Login;
