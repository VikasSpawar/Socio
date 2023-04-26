// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getUserById } from "../api/firebase";
// import FollowButton from "../components/FollowButton";
// import { User } from "../types/UserTypes";

// const UserProfile: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const getUser = async () => {
//       const user = await getUserById(id);
//       setUser(user);
//     };

//     getUser();
//   }, [id]);

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>User Profile</h2>
//       <p>Name: {user.displayName}</p>
//       <p>Email: {user.email}</p>
//       <FollowButton userId={user.id} />
//     </div>
//   );
// };

// export default UserProfile;
