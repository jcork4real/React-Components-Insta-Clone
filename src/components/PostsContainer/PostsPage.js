//Complete the necessary code in this file
// import useState
import React, {useState, useEffect} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

import dummyData from '../../dummy-data';

const PostsPage = (props) => {
  // set up state for your data
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    const filteredData = dummyData.filter((item) => {
      return item.username.includes(props.search);
    });

    setData(filteredData);
  }, [props.search]);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {data.map((post) => {
        return <Post key={post.username} post={post} />;
      })}
    </div>
  );
};

export default PostsPage;