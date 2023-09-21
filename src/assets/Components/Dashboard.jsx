import { NavLink } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="text-2xl font-bold flex flex-col p-5 bg-slate-200 text-black">
            <NavLink to={'/dashboard/profile'} className={({isActive})=> isActive? "bg-blue-700": ''}>Profile</NavLink>
            <NavLink to={'/dashboard/editprofile'} className={({isActive})=> isActive? "bg-blue-700": ''}> Edit Profile</NavLink>
            <NavLink to={'/dashboard/email'} className={({isActive})=> isActive? "bg-blue-700": ''}> Emails</NavLink>
            <NavLink to={'/dashboard/youraccount'}className={({isActive})=> isActive? "bg-blue-700": ''}> Your Account</NavLink>
        </div>
    );
};

export default Dashboard;