import React, { useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { signIn, signUp } from "../../redux/usersOperations";
import s from "./index.module.scss";

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (arg: boolean) => void;
  modalType: "log in" | "sign up";
}

const Modal: React.FC<ModalProps> = ({ setIsModalOpen, modalType }) => {
  const dispatch = useAppDispatch();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    if (modalType === "log in") {
      dispatch(signIn(emailValue, passwordValue, setIsModalOpen));
    } else {
      dispatch(signUp(emailValue, passwordValue, setIsModalOpen));
    }
  };

  return (
    <div className={s.modalBackdrop}>
      <div className={s.modalMain}>
        <button
          type="button"
          className={s.closeBtn}
          onClick={() => setIsModalOpen(false)}
        >
          X
        </button>
        <div className={s.modalContent}>
          <form onSubmit={(e) => onFormSubmit(e)}>
            <p className={s.modalTitle}>{modalType}</p>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={emailValue}
              placeholder="Enter e-mail"
              onChange={(e) => setEmailValue(e.target.value)}
              required
              autoComplete="off"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={passwordValue}
              placeholder="Enter password"
              onChange={(e) => setPasswordValue(e.target.value)}
              required
              autoComplete="off"
            />
            <button type="submit" className={s.btn}>
              {modalType}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
