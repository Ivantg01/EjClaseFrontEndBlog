import {FunctionComponent} from "preact";

type addProps = {
    tittle:string,
    author:string,
    date:string,
    content:string;
}

const AddForm: FunctionComponent<addProps>= (props) => {
    return(
        <div class="mainContent">
            <form class="formAdd" action="/add" method="post">
                <h1>ADD POST</h1>
                <label for="tittle">Title:</label>
                <input class="input" type="text" id="tittle" name="tittle" placeholder="Title"/>

                <label for="author">Author:</label>
                <input class="input" type="text" id="author" name="author" placeholder="Author"/>

                <label for="content">Content:</label>
                <textarea class="input" id="content" name="content" placeholder="Content"></textarea>

                <button class="button" type="submit">Add</button>
            </form>

        </div>
    )
}

export default AddForm;
