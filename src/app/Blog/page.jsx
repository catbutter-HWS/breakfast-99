import Link from 'next/link'

import { blogPost } from "@/app/data/blog/blogPosts"
import { avatar } from '@/app/data/blog/avatar';
import { users } from '@/app/data/blog/users';

const posts=blogPost;
const userlist=users;

export default function blog(){
    return(
        <div className="container mx-auto p-4">
            <h1 className="font-bold text-2xl mb-6">技術文章 
                <span className="text-slate-500">{posts.length}篇</span>
            </h1>
            <div className="grid gap-2">
                {posts.map((post)=>{
                    const user = userlist[post.userId -1]
                    return(
                        <div key={post.id} className="p-4 shadow-md rounded-xl">
                            <div className="flex items-center gap-3 mb-2">
                                <img src={user.avatar} 
                                     alt={`User ${user.id}'s Avatar`} 
                                     className="w-10 h-10 rounded-full"/>
                                <Link href={`/blog/posts/${post.id}`}>
                                    <span className="text-gray-800 hover:bg-yellow-400">
                                        使用者： #{user.id}
                                    </span>
                                </Link>
                                <Link href={`blog/posts/${post.id}`}>
                                   <span className="text-gray-500 hover:bg-yellow-400">{`${post.title}`}</span>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}