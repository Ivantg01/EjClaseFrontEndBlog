import {FunctionComponent} from "preact";

type PostProps = {
    tittle:string,
    author:string,
    date:Date,
    content:string;
}


const PostExpanded: FunctionComponent<PostProps> = (props) =>{
    const dataPost:PostProps= props.post;
    return(
        <div className="mainContent">
            <form className="formAdd">
                <h1>POST</h1>
                <label for="tittle">Title:</label>
                <input className="input" type="text" id="tittle" name="tittle" value={`${dataPost.tittle}`} readonly/>

                <label for="author">Author:</label>
                <input className="input" type="text" id="author" name="author" value={`${dataPost.author}`} readonly/>

                <label for="date">Date:</label>
                <input className="input" type="text" id="date" name="date" value={`${dataPost.date.toLocaleDateString()}`} readonly/>

                <label for="content">Content:</label>
                <textarea className="input" id="content" name="content" value={`${dataPost.content}`} readonly></textarea>

            </form>

        </div>
        )
}

export default PostExpanded;
