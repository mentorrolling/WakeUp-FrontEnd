import { Route, Routes } from 'react-router-dom';
import Sidebar from './CommonComponents/Sidebar';
import Header from './CommonComponents/Header';
import UsersTable from './Tables/UsersTable';
import MenusTable from './Tables/MenusTable';
import OrdersTable from './Tables/OrdersTable';
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <Header />
        <Routes>
          <Route path="/dashboard/users" element={<UsersTable />} />
          <Route path="/dashboard/menus" element={<MenusTable />} />
          <Route path="/dashboard/orders" element={<OrdersTable />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;