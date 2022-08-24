import React from "react";
import PostNeedHelp from "./PostNeedHelp";

const PostsNeedHelp = (props) => {
  return (
      <div>
          {props.posts.map(post => <PostNeedHelp post={post} />)}
      </div>
  );
}
export default PostsNeedHelp