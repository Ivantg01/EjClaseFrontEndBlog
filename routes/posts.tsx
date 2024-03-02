import {Handlers, PageProps} from "$fresh/server.ts";
import {Posts} from "../types.ts";
import PostModel from "../db/Post.ts";
import {FreshContext} from "https://deno.land/x/fresh@1.6.3/src/server/mod.ts";
import PostsMenu from "../components/postsMenu.tsx";


type Data= {
    posts:Array<Posts>;
}

export const handler:Handlers<Data> ={
    GET: async (_req: Request, context:FreshContext<unknown,Data>) => {
        const posts = await PostModel.find();
        return context.render({ posts });
    }
}

const Page = (props: PageProps<Data>) => {
    return (
        <PostsMenu
            posts={props.data.posts}
        />
    );
}

export default Page;