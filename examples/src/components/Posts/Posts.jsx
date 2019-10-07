import React from "react";
import withPosts from "./withPosts";

const Posts = ({ posts }) =>
  posts ? posts.map(post => <div>{JSON.stringify(post)}</div>) : "Loading...";

export default withPosts(Posts);
