import {FunctionComponent} from "preact";

type PostProps = {
    id:string,
    tittle:string,
    author:string,
    date:Date,
    content:string;
}

const PostsMenu: FunctionComponent<PostProps[]> = (props) =>{
    const dataPost:PostProps[]=props;
    if (props.posts.lenght === 0 || props.posts[0]===undefined) {
        return (
            <div class="mainContent">
                <h1>No posts</h1>
            </div>
        );
    }
    else{
        return(
            <div class="postContent">
                <h1>POSTS</h1>
                    {dataPost.posts.map((post) => (
                        <a href={`/post/${post.id}`}><p>{post.tittle} {post.tittle} {post.date.toLocaleDateString()}</p></a>
                    ))}
            </div>
        )
    }
}

export default PostsMenu;