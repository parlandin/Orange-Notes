import React from "react";
import { useParams } from "react-router-dom";

const Note = () => {
  const { id } = useParams();
  return <div>Note{("id", id)}</div>;
};

export default Note;
