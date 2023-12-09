import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "./comments";
import { PropTypes } from "prop-types";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const like = false;

  const { name, userId, profilePic, img, desc } = post;

  return (
    <div className="rounded-3xl text-primary bg-primary p-5 space-y-5 shadow-xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={profilePic}
            alt={`${name} profile picture`}
          />
          <div>
            <Link to={`/profile/${userId}`}>
              <p className="font-medium">{name}</p>
            </Link>
            <p className="text-sm">a few seconds ago</p>
          </div>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="space-y-3">
        <p>{desc}</p>
        {img && (
          <img
            className="h-[500px] w-full object-cover rounded-lg"
            src={img}
            alt={`${name} profile picture`}
          />
        )}
      </div>
      <div className="flex items-center gap-5">
        <div className="space-x-2 text-sm cursor-pointer">
          {like ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
          <span>17 likes</span>
        </div>
        <div
          onClick={() => setCommentOpen(!commentOpen)}
          className="space-x-2 text-sm cursor-pointer"
        >
          <TextsmsOutlinedIcon />
          <span>3 comments</span>
        </div>
        <div className="space-x-2 text-sm cursor-pointer">
          <ShareOutlinedIcon />
          <span>Share</span>
        </div>
      </div>
			{commentOpen && <Comments />}
    </div>
  );
};

Post.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		userId: PropTypes.number.isRequired,
		profilePic: PropTypes.string.isRequired,
		desc: PropTypes.string.isRequired,
		img: PropTypes.string,
	}),
};

export default Post;
