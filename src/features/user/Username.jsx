import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="text-sm font-semibold  md:block hidden ">{username}</div>
  );
}

export default Username;
