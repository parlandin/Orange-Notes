import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const useAuth = () => {
  const [authUser, setAuthUser] = useContext(AuthContext);

  return [authUser, setAuthUser];
};

export default useAuth;
