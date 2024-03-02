import {FunctionComponent} from "https://esm.sh/v128/preact@10.19.2/src/index.d.ts";

type LayoutProps = {
    selected: "add" | "posts"
}

const Menu: FunctionComponent<LayoutProps> = ({selected}) => {
    return (
        <div className="header">
            <h2>
                <a href="/posts" class={selected==="posts" ? "selected" : ""}>Posts</a>
            </h2>
            <h2>
                <a href="/add" class={selected==="add" ? "selected" : ""}>Add</a>
            </h2>
        </div>
    )
}

export default Menu