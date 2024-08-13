import React from "react";
import { useParams } from "react-router-dom";

function User() {
  let { id } = useParams();
  return (
    <div className="text-center bg-slate-400 text-white h-60 text-xl ">
      User : {id}
    </div>
  );
}

export default User;
