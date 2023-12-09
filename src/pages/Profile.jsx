import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../components/Posts";

const Profile = () => {
  return (
    <div className="flex-[6] overflow-y-scroll scroll-bar bg-secondary">
      <div className="relative w-full h-[300px]">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="cover image"
          className="w-full h-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt="profile image"
          className="absolute left-0 right-0 m-auto top-[200px] h-[200px] w-[200px] rounded-full object-cover"
        />
      </div>
      <div className="py-5 px-[4.375rem] space-y-5">
        <div className="h-[17rem] bg-primary text-primary flex items-center justify-between p-12 rounded-2xl shadow-xl">
          <div className="flex-1 flex gap-2.5">
            <a className="text-secondary" href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a className="text-secondary" href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a className="text-secondary" href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a className="text-secondary" href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a className="text-secondary" href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="flex-1 flex flex-col items-center gap-2.5">
            <span className="text-3xl font-medium">Jane Doe</span>
            <div className="flex items-center w-full justify-around">
              <div className="text-secondary flex items-center gap-1">
                <PlaceIcon />
                <span className="text-xs">San Francisco</span>
              </div>
              <div className="text-secondary flex items-center gap-1">
                <LanguageIcon />
                <span className="text-xs">janedoe.com</span>
              </div>
            </div>
            <button className="text-white bg-[#5271ff] py-1.5 px-5 rounded-md">
              Follow
            </button>
          </div>
          <div className="flex-1 flex items-center justify-end gap-2.5">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
