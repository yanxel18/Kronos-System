import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../images/25.gif";
import Swal from "sweetalert2";
import React from "react";

export default function ConnectionCheck() {
  const ServerState = useSelector(
    (state) => state.BulletinStateVar.ServerStatus
  );
  const ServerStatus = ServerState.Online;
  const ServerMsg = ServerState.ServerMessage;
  useEffect(() => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    if (ServerStatus) {
      Toast.fire({
        icon: "info",
        title: "サーバーに接続されました。",
      });
    } else if (!ServerStatus) {
      Swal.fire({
        allowOutsideClick: false,
        title: "サーバーに接続中。",
        text: "しばらくお待ちください。",
        imageUrl: Loader,
        footer: ServerMsg,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        //confirmButtonText: 'Main Page'
      }).then((result) => {
        if (result.isConfirmed) {
          Toast.fire({
            icon: "info",
            title: "サーバーに接続中。",
            text: "しばらくお待ちください。",
          });
        }
      });
    }
  }, [ServerStatus, ServerMsg]);
  return <React.Fragment></React.Fragment>;
}
