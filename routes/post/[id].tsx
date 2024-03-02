import {Handlers, PageProps} from "$fresh/server.ts";
import {Posts} from "../../types.ts";
import PostModel from "../../db/Post.ts";
import {FreshContext} from "https://deno.land/x/fresh@1.6.3/src/server/mod.ts";
import PostExpanded from "../../components/PostExpanded.tsx";


export const handler:Handlers<Posts> = {
    GET: async (req:Request, context:FreshContext) =>{
        const {id}= context.params;
        const post= await PostModel.findById(id)
        return context.render(post);
    }
}

const Page = (props: PageProps<Posts>) => {
    return (
        <PostExpanded
            post={props.data}
        />
    );
}

export default Page;