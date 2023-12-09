import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Comments = () => {
  const { user } = useContext(AuthContext);

  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-5">
        <img
          className="h-10 w-10 rounded-full"
          src={user.profilePicture}
          alt={`${user.username} profile picture`}
        />
        <form
          onClick={(event) => event.preventDefault()}
          className="flex justify-between gap-5 flex-grow"
        >
          <input
            className="p-2 text-primary border border-borderColor rounded-md bg-transparent flex-1"
            type="text"
            placeholder="write a comment"
          />
          <button
            className="bg-[#5271ff] cursor-pointer px-5 text-primary rounded-md"
            type="submit"
          >
            send
          </button>
        </form>
      </div>
      {comments.map(({ id, name, profilePicture, desc }) => (
        <div key={id} className="flex items-center gap-5">
          <img
            className="h-10 w-10 rounded-full object-cover self-start"
            src={profilePicture}
            alt={`${name} profile picture`}
          />
          <div className="flex flex-col flex-start gap-1 flex-[5]">
            <p className="font-medium">{name}</p>
            <p className="text-secondary">{desc}</p>
          </div>
          <p className="text-xs text-gray-500 flex-1 self-center">a few seconds ago</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
