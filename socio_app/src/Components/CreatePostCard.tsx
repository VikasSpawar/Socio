import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreatePostCard = () => {
  const history = useHistory();
  const [postContent, setPostContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [taggedUsers, setTaggedUsers] = useState<string[]>([]);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleTaggedUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (value && !taggedUsers.includes(value)) {
      setTaggedUsers([...taggedUsers, value]);
      e.target.value = '';
    }
  };

  const handleTaggedUserRemove = (user: string) => {
    setTaggedUsers(taggedUsers.filter((u) => u !== user));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Code to upload post content, image, and tagged users to database
    // After successful upload, redirect to the user's profile page
    history.push('/profile');
  };

  return (
    <div className="border border-gray-200 p-4">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full resize-none mb-4"
          placeholder="What's on your mind?"
          value={postContent}
          onChange={handleContentChange}
        />

        <div className="mb-4">
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Tag users"
            onChange={handleTaggedUserChange}
          />
          <div>
            {taggedUsers.map((user) => (
              <span key={user} className="mr-2">
                {user}{' '}
                <button
                  type="button"
                  onClick={() => handleTaggedUserRemove(user)}
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          type="submit"
          disabled={!postContent && !image}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostCard;
