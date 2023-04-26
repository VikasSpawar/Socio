import React from 'react';

type FollowButtonProps = {
  isFollowing: boolean;
  onClick: () => void;
};

const FollowButton: React.FC<FollowButtonProps> = ({ isFollowing, onClick }) => {
  return (
    <button onClick={onClick}>
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
};

export default FollowButton;
