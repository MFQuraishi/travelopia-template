import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div className="demo-top-bar">Navbar goes here</div>
      <Outlet/>
      <div className='demo-content'>
        Page Content goes here
      </div>
    </div>
  );
}
