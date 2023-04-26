import React from 'react';
import { Post } from '../types/PostTypes';
import LikeButton from './LikeButton';
import CommentSection from './CommentSection';

interface Props {
  post: Post;
}

const FeedCard: React.FC<Props> = ({ post }) => {
  return (
    <div className="p-4">
      <div>
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src={post.authorProfilePic}
          alt="Author profile"
        />
        <span className="font-bold ml-2">{post.authorName}</span>
      </div>
      <div className="my-2">
        <img src={post.image} alt="Post" />
      </div>
      <div className="mb-2">
        <LikeButton post={post} />
      </div>
      <div>
        <CommentSection post={post} />
      </div>
    </div>
  );
};

export default FeedCard;
