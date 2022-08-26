import React from "react";
import PostNH from "./PostNH";

const ListNH = (props) => {
  return (
      <div>
          {props.posts.map(post => <PostNH post={post} />)}
      </div>
  );
}
export default ListNH