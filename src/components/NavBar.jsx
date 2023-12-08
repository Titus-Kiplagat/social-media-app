import {
  AccountCircleOutlined,
  DarkModeOutlined,
  EmailOutlined,
  GridViewOutlined,
  HomeOutlined,
  NotificationsOutlined,
  PersonOutlined,
	SearchOutlined,
	WbSunnyOutlined
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	const user = true;
	const [darkMode, setDarkMode] = useState(false);

	const handleDarkMode = () => {
		setDarkMode(prevMode => !prevMode);
	};

	useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);
	
  return (
    <div className="flex justify-between items-center px-5 py-2.5 border-b-2 border-primary sticky top-0 bg-primary text-primary">
      <div className="flex items-center gap-[1.875rem]">
        <Link to="/">
          <span className="text-logo font-extrabold text-xl">XCitizen</span>
        </Link>
				<HomeOutlined />
				{darkMode ? (<WbSunnyOutlined onClick={handleDarkMode} />) : (<DarkModeOutlined onClick={handleDarkMode} />)}
        <GridViewOutlined />
        <div className="flex items-center gap-2.5 p-1 border border-primary rounded-lg">
          <SearchOutlined />
          <input
            className="w-[500px] outline-none px-1 rounded-lg bg-transparent text-primary"
            type="search"
            placeholder="search"
          />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <PersonOutlined />
        <EmailOutlined />
        <NotificationsOutlined />
        <div className="flex items-center gap-2.5 font-medium">
          {user ? (
						<>
            <img
              className="w-8 h-8 rounded-full object-cover"
              src="https://images.pexels.com/photos/4046710/pexels-photo-4046710.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="user"
            />
              <span>John Doe</span>
						</>
          ) : (
						<>
              <AccountCircleOutlined />
							<span>Login</span>
						</>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
