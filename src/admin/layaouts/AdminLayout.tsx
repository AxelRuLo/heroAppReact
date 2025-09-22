import { Outlet } from "react-router";

export const AdminLayout = () => {
  return (
    <div>
      admin layaout
      <Outlet />
    </div>
  );
};

export default AdminLayout;
