import {FreshContext} from "https://deno.land/x/fresh@1.6.3/src/server/mod.ts";
import Menu from "../components/Menu.tsx";
import PostsMenu from "../components/postsMenu.tsx";

const Layout = async (req: Request, context: FreshContext) => {
    const Component = context.Component;
    const route= context.route;

    const page = route.split("/").pop();
    const selected = page === "add" ? "add" : "posts";

    return (
        <div class="container">
            <Menu selected={selected}/>
            <Component/>
        </div>
    )
}

export default Layout;