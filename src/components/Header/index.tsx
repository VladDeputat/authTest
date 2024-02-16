import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { logOut, signIn, signUp } from "../../redux/usersOperations";
import { isAuthSelector, userEmailSelector } from "../../redux/usersSelectors";
import Modal from "../Modal";
import s from "./index.module.scss";

const Header = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(isAuthSelector);
  const userEmail = useSelector(userEmailSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"log in" | "sign up">("log in");

  const onOpenModal = (modaltype: "log in" | "sign up") => {
    setModalType(modaltype);
    setIsModalOpen(true);
  };

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <>
      <header className={s.header}>
        <p className={s.logo}>LOGO</p>
        {isAuth && <p className={s.wellcomeText}>{`Welcome, ${userEmail}!`}</p>}
        <div className={s.btnBox}>
          {!isAuth ? (
            <>
              <button
                type="button"
                className={s.btn}
                onClick={() => onOpenModal("log in")}
              >
                Log in
              </button>
              <button
                type="button"
                className={s.btn}
                onClick={() => onOpenModal("sign up")}
              >
                Sign up
              </button>
            </>
          ) : (
            <button type="button" className={s.btn} onClick={onLogout}>
              Log out
            </button>
          )}
        </div>
      </header>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          modalType={modalType}
        />
      )}
    </>
  );
};

export default Header;
