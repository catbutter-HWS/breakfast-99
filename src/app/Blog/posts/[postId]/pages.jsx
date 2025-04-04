import {useRouter} from 'next/router';
import {blogPost} from "@/app/data/blog/blogPosts";
import {users} from "@/app/data/blog/users";
import { notFound } from "next/navigation";
import Link from "next/link";


const posts= blogPost;

export default async function PostPage({params}){
    const {postId} = await params;
    const post = posts.find((post)=> post.id===Number(postId));

    console.log("is anyone there?")

    if(!post){
        console.log("no posts")
        notFound();
    }
    const user = users[post.userId-1];
    return(
        <div>
            <div>
                <img src={user.avatar} 
                     alt={"User ${post.userId}'s avatar"} 
                    className="w-12 h-12 roudned-full"
                />

                <div >
                    <h1>{post.title}</h1>
                    <Link 
                        herf={`/blog/users/${user.id}`}
                        className="text-gray-600 hover:bg-yellow-300"
                        >
                            author:#{user.id}:{user.name}
                        </Link>
                </div>
                <article className="border bg-slate-300 rounded-lg shadow-sm">
            
                </article>
            </div>
        </div>
        
    )
}