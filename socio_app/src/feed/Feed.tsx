
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { getPosts } from "../api/firebase";
// import FeedCard from "../components/FeedCard";
// import NavigationBar from "../components/NavigationBar";
// import { Post } from "../types/PostTypes";

// const Feed = () => {
//   const [posts, setPosts] = useState<Post[]>([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const posts = await getPosts();
//       setPosts(posts);
//     };
//     fetchPosts();
//   }, []);

//   return (
//     <>
//       <NavigationBar />
//       <div className="container mx-auto px-4 pt-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {posts.map((post) => (
//             <Link to={`/post/${post.id}`} key={post.id}>
//               <FeedCard post={post} />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Feed;
