// import React, { useState } from "react";
// import { IComment } from "../types/FeedTypes";

// interface Props {
//   comment: IComment;
// }

// const Comment: React.FC<Props> = ({ comment }) => {
//   const [isEditing, setIsEditing] = useState<boolean>(false);
//   const [updatedComment, setUpdatedComment] = useState<string>(comment.text);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     // Save updated comment to the database
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setUpdatedComment(comment.text);
//     setIsEditing(false);
//   };

//   const handleDelete = () => {
//     // Delete comment from the database
//   };

//   return (
//     <div>
//       {isEditing ? (
//         <div>
//           <textarea
//             value={updatedComment}
//             onChange={(e) => setUpdatedComment(e.target.value)}
//           />
//           <button onClick={handleSave}>Save</button>
//           <button onClick={handleCancel}>Cancel</button>
//         </div>
//       ) : (
//         <div>
//           <p>{comment.text}</p>
//           <button onClick={handleEdit}>Edit</button>
//           <button onClick={handleDelete}>Delete</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Comment;
