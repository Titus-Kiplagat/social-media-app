import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Stories = () => {
	const {user} = useContext(AuthContext);

  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];

  return (
    <div className="h-56 flex gap-2.5">
			<div className="relative flex-1 rounded-xl overflow-hidden">
				<img src={user.profilePicture} alt={`${user.username} profile picture`} className="h-full w-full" />
				<span className="absolute left-2.5 bottom-2.5 text-white font-medium">{user.username}</span>
				<button className="absolute left-2.5 bottom-10 text-white bg-blue-500 rounded-full w-8 h-8 cursor-pointer text-3xl flex justify-center items-center">+</button>
			</div>
      {stories.map(({ id, name, img }) => (
        <div key={id} className="relative flex-1 rounded-xl overflow-hidden">
          <img src={img} alt={`${name} profile image`} className="h-full w-full" />
          <span className="absolute left-2.5 bottom-2.5 text-white font-medium">{name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
