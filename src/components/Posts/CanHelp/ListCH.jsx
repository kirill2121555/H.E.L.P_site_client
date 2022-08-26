import React from "react";
import PostCanHelp from "./PostCH";

const CanHelpPost = (props) => {
  return (
      <div>
          {props.posts.map(post => <PostCanHelp post={post} />)}
      </div>
  );
}
export default CanHelpPost