import { AccountCircleOutlined } from "@mui/icons-material";
import Friends from "../assets/1.png";
import Groups from "../assets/2.png";
import Market from "../assets/3.png";
import Watch from "../assets/4.png";
import Memories from "../assets/5.png";
import Events from "../assets/6.png";
import Gaming from "../assets/7.png";
import Gallery from "../assets/8.png";
import Videos from "../assets/9.png";
import Messages from "../assets/10.png";
import Tutorials from "../assets/11.png";
import Courses from "../assets/12.png";
import Fundraiser from "../assets/13.png";

const LeftBar = () => {
  const user = true;

  return (
		<div className="flex-[2] sticky top-[4.375rem] overflow-scroll scroll-bar bg-primary text-primary">
      <div className="p-5">
        <ul className="list-item-styles flex flex-col gap-5">
          <li>
            {user ? (
              <>
                <img
                  className="rounded-full"
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
          </li>
          <li>
            <img src={Friends} alt="friends" />
            <span>Friends</span>
          </li>
          <li>
            <img src={Groups} alt="groups" />
            <span>Groups</span>
          </li>
          <li>
            <img src={Market} alt="marketplace" />
            <span>Marketplace</span>
          </li>
          <li>
            <img src={Watch} alt="watch" />
            <span>Watch</span>
          </li>
          <li>
            <img src={Memories} alt="memories" />
            <span>Memories</span>
          </li>
        </ul>
				<hr className="my-5 bg-borderColor" />
				<p className="text-sm mb-2.5">Your Shortcuts</p>
        <ul className="list-item-styles flex flex-col gap-5">
          <li>
            <img src={Events} alt="events" />
            <span>Events</span>
          </li>
          <li>
            <img src={Gaming} alt="gaming" />
            <span>Gaming</span>
          </li>
          <li>
            <img src={Gallery} alt="gallery" />
            <span>Gallery</span>
          </li>
          <li>
            <img src={Videos} alt="videos" />
            <span>Videos</span>
          </li>
          <li>
            <img src={Messages} alt="messages" />
            <span>Messages</span>
          </li>
				</ul>
				<hr className="my-5 bg-borderColor" />
				<p className="text-sm mb-2.5">Others</p>
				<ul className="list-item-styles flex flex-col gap-5">
					<li>
						<img src={Fundraiser} alt="fundraiser" />
						<span>Fundraiser</span>
					</li>
					<li>
						<img src={Tutorials} alt="tutorials" />
						<span>Tutorials</span>
					</li>
					<li>
						<img src={Courses} alt="courses" />
						<span>Courses</span>
					</li>
					<li>
						<img src={Fundraiser} alt="fundraiser" />
						<span>Fundraiser</span>
					</li>
					<li>
						<img src={Tutorials} alt="tutorials" />
						<span>Tutorials</span>
					</li>
					<li>
						<img src={Courses} alt="courses" />
						<span>Courses</span>
					</li>
				</ul>
      </div>
    </div>
  );
};

export default LeftBar;
