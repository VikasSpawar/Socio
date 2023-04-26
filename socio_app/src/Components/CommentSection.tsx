import { useState } from "react";

import { Comment } from "../types/FeedTypes";

interface Props {
  comments: Comment[];
}

const CommentSection: React.FC<Props> = ({ comments }) => {
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add newComment to the list of comments in your database
    setNewComment("");
  };

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <p>By {comment.author}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <textarea value={newComment} onChange={handleCommentChange} />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default CommentSection;
