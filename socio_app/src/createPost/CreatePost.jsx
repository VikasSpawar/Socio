import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import firebase from "../api/firebase";

const CreatePost = () => {
  const history = useLocation();
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`images/${file.name}`);
    await storageRef.put(file);
    const downloadURL = await storageRef.getDownloadURL();
    setPost({ ...post, image: downloadURL });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postRef = firebase.firestore().collection("posts");
    const newPost = {
      ...post,
      createdAt: new Date().toISOString(),
      userId: firebase.auth().currentUser.uid,
    };
    await postRef.add(newPost);
    setPost({
      title: "",
      description: "",
      image: "",
      tags: "",
    });
    history.push("/feed");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={post.description}
          onChange={handleChange}
        />

        <label htmlFor="image">Image:</label>
        <input type="file" name="image" onChange={handleImageUpload} />

        <label htmlFor="tags">Tags:</label>
        <input
          type="text"
          name="tags"
          value={post.tags}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
