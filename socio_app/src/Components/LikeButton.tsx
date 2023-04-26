import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

interface Props {
  postId: string;
  likes: number;
  handleLike: (postId: string) => void;
  isLiked: boolean;
}

const LikeButton: React.FC<Props> = ({
  postId,
  likes,
  handleLike,
  isLiked,
}) => {
  const [count, setCount] = useState(likes);

  const handleClick = () => {
    handleLike(postId);
    isLiked ? setCount(count - 1) : setCount(count + 1);
  };

  return (
    <button className="flex items-center text-gray-500 hover:text-red-500 focus:outline-none" onClick={handleClick}>
      <FaHeart className={`h-5 w-5 ${isLiked ? 'text-red-500' : ''}`} />
      <span className="ml-2">{count}</span>
    </button>
  );
};

export default LikeButton;
