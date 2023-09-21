import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div className="flex gap-10 text-3xl font-bold text-black ">
            <NavLink to={'/'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-red-500 p-1 rounded" : ""
  }>Home</NavLink>
            <NavLink to={'/products'} className={({isActive}) => isActive?'bg-red-500 p-1 rounded' : ''}>Products</NavLink>
            <NavLink to={'/dashboard'} className={({isActive}) => isActive?'bg-red-500 p-1 rounded' : ''}> Dashboard</NavLink>
            
        </div>
    );
};

export default Nav;