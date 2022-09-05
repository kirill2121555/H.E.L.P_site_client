import React from "react";
import BlogPost from "./BlogPost";

const ListBP = (props) => {
    return (
        <div>
            {props.posts.map(post => <BlogPost post={post} />)}
        </div>
    );
}
export default ListBP