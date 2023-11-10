import googleIcon from '../../images/auth/google-auth.svg';
import { signInWithGoogle } from '../../utils/firebase';
function Auth (props) {

  const handleGoogleAuth = () => {
    signInWithGoogle();
  };

  return (
    <div className="auth">
      <div className='auth__container'>
        <h1 className="auth__title">Привет!</h1>
        <h2 className='auth__subtitle'>Чтобы войти, нажми на кнопку ниже.</h2>
        <button className="auth__google-button" onClick={handleGoogleAuth}>
          <img className="auth__icon" src={googleIcon} alt="Google icon" />
          Google
        </button>
      </div>
    </div>
  );
};

export default Auth;