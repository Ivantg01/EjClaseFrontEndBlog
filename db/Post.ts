import mongoose from "npm:mongoose";
import {Posts} from "../types.ts";
import {load} from "https://deno.land/std@0.202.0/dotenv/mod.ts";

if (mongoose.connection.readyState === 0) {
    const env = await load();
    const MONGO_URL = env.MONGO_URL
    await mongoose.connect(MONGO_URL);
}

const schema = new mongoose.Schema<Posts>({
    tittle:String,
    author:String,
    date:{type:Date, default:Date.now },
    content:String,
    },
);

export default mongoose.model<Posts>("Posts", schema);