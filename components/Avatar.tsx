import { useAppSelector } from "@/redux/hooks";

const Avatar = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-[#1d4946]">
      {user.charAt(0)}
    </div>
  );
};

export default Avatar;
