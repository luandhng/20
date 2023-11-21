import { useBoolean } from "../stores/useBoolean.ts";

const Login = () => {
  const { setBoolean } = useBoolean();

  const onClickGuest = () => {
    setBoolean(true);
  };
  return (
    <div>
      <div>Login with Email</div>
      <div>Login with Google</div>
      <div>Login with GitHub</div>
      <div className={"cursor-pointer"} onClick={onClickGuest}>
        Continue as guest
      </div>
    </div>
  );
};

export default Login;
