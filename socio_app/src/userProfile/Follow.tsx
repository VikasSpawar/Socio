// import { useState } from "react";
// import { followUser } from "../api/firebase";
// import { User } from "../types/UserTypes";

// type Props = {
//   user: User;
// };

// const Follow = ({ user }: Props) => {
//   const [isFollowing, setIsFollowing] = useState<boolean>(false);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const handleFollow = async () => {
//     setIsLoading(true);
//     await followUser(user.id);
//     setIsFollowing(true);
//     setIsLoading(false);
//   };

//   if (isFollowing) {
//     return null;
//   }

//   return (
//     <button
//       onClick={handleFollow}
//       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//       disabled={isLoading}
//     >
//       {isLoading ? "Following..." : "Follow"}
//     </button>
//   );
// };

// export default Follow;
