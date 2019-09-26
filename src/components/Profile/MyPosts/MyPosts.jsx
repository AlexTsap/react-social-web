import React from 'react';
import MyPost from "./Post/MyPost";

const MyPosts = (props) => {

    const posts = props.myPosts.map((post) => <MyPost name={post.name} age={post.age} message={post.message}
                                                likes={post.likes}/>);

    return (
        <div>
            {posts}
        </div>
    );
};

export default MyPosts;
