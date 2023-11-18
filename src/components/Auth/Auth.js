// hooks
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// icon
import googleIcon from '../../images/auth/google-auth.svg';
// доп импорты
import { signInWithGoogle } from "../../utils/firebase";
import { setCurrentUser } from "../../store/slices/users/users.slice";
import { selectMe } from "../../store/slices/users/users.selectors";

function Auth () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector(selectMe);

  async function handleAuthClick () {
    const data = await signInWithGoogle();
    const user = {
      name: data.user.displayName,
      email: data.user.email,
      token: data.user.accessToken,
      profileImage: data.user.photoURL,
      isAuthorized: !!data.user.accessToken,
    };
    dispatch(setCurrentUser(user));
    navigate("/");
  };

  // если пользователь уже авторизован, то мы его перенаправляем на главную
  useEffect(() => {
    if (currentUser.isAuthorized) {
      navigate("/")
    }
  }, []);

  return (
    <div className="auth">
      <div className='auth__container'>
        <h1 className="auth__title">Привет!</h1>
        <h2 className='auth__subtitle'>Чтобы войти, нажми на кнопку ниже.</h2>
        <button className="auth__google-button" onClick={handleAuthClick}>
          <img className="auth__icon" src={googleIcon} alt="Google icon" />
          Google
        </button>
      </div>
    </div>
  );
};

export default Auth;
