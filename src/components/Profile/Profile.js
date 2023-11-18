import { useSelector } from "react-redux";
import { selectMe } from "../../store/slices/users/users.selectors";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Profile () {
  const user = useSelector(selectMe);

  const handleSignOutClick = () => {

  };

  return (
    <>
      <Header />
      <section className="profile">
        <img className="profile__image" src={user.profileImage} alt="Фото пользователя"/>
        <h2 className="profile__name">{user.name}</h2>
        <h3 className="profile__email">{user.email}</h3>
        <button className="profile__sign-out-button" onClick={handleSignOutClick}>Выйти из аккаунта</button>
      </section>
      <Footer />
    </>
  );

};

export default Profile;