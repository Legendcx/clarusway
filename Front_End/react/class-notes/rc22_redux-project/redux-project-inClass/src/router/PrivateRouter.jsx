import { useSelect } from "@mui/base";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const {user} = useSelect((state) => state.auth);

  return user?.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
