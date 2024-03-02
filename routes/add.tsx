import {Handlers, FreshContext, PageProps} from "$fresh/server.ts";
import {Posts} from "../types.ts";
import PostModel from "../db/Post.ts";
import AddForm from "../components/Add.tsx";


export const handler:Handlers ={
    POST: async (req: Request, context:FreshContext) => {
        try{
            const forms= await req.formData();
            const data = {
                tittle: forms.get("tittle"),
                author: forms.get("author"),
                content: forms.get("content"),
            }
            await PostModel.create(data);
            return new Response("", {
                status: 303,
                headers: {
                    "Location": "/posts",
                },
            });

        }catch (e){
            return new Response(e.message, {
                status: 500,
            });
        }
    }
}

const Page = () => {
    return (
        <div>
            <AddForm/>
        </div>
    );
}

export default Page;