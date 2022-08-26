import React from "react";
import PostHelp from "./PostPHH";

const ListPHH = (props) => {
    return (
        <div>
            {props.posts.map(post => <PostHelp post={post} />)}
        </div>
    );
}
export default ListPHH