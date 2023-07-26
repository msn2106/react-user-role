import useFormInput from '../hooks/useFormInput';

const Signup = () => {
  const name = useFormInput('');
  const dob = useFormInput('');
  const username = useFormInput('');
  const password = useFormInput('');
  const gender = useFormInput('');
  const role = useFormInput('');

  const handleOnSignup = () => {
    console.log(
      `name: ${name}, dob:${dob}, username:${username}, password:${password}, gender:${gender} & role:${role}`,
    );
  };
  return (
    <div>
      <form>
        <label>Name</label>
        <input {...name} />
        <label>DOB</label>
        <input {...dob} />
        <label>Username</label>
        <input {...username} />
        <label>Password</label>
        <input {...password} />
        <label>Gender</label>
        <input {...gender} />
        <label>Role</label>
        <input {...role} />
      </form>
      <button onClick={handleOnSignup}>Signup</button>
    </div>
  );
};

export default Signup;
