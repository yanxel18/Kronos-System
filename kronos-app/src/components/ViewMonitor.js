import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShowBulletin } from "../actions/index";
export const RefreshAPI = () => {
  const CheckSelected = useSelector(
    (state) => state.BulletinStateVar.UserSelected
  );
  const BoardID = useSelector((state) => state.BulletinStateVar.BoardID);
  const dispatch = useDispatch();
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!CheckSelected) {
        dispatch(ShowBulletin(BoardID));
      }
    }, 1500);
    return () => clearInterval(intervalId);
  }, [dispatch, CheckSelected, BoardID]);
};
