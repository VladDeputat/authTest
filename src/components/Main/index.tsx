import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { getAllUsers } from "../../redux/usersOperations";
import {
  getAllUsersSelector,
  isAuthSelector,
} from "../../redux/usersSelectors";
import s from "./index.module.scss";

const Main = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(isAuthSelector);
  const allUsers = useSelector(getAllUsersSelector);

  useEffect(() => {
    if (isAuth) {
      dispatch(getAllUsers());
    }
  }, [isAuth, dispatch]);

  return (
    <main>
      <ol className={s.usersList}>
        {allUsers.length > 0 ? (
          allUsers.map((user) => <li key={user.id}>{user.email}</li>)
        ) : (
          <></>
        )}
      </ol>
    </main>
  );
};

export default Main;
