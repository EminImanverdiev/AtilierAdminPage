import { createContext, useContext } from "react";

const AdminContext = createContext();
export function useAdminContext() {
    return useContext(AdminContext);
  }
export default AdminContext;