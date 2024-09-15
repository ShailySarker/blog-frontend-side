"use client"
import EditForm from "@/app/components/editForm";
import { Button } from "@/components/ui/button";
import api from "@/lib/api";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ViewPost() {
    const [post, setPost] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const router = useRouter();
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            async function fetchPost() {
                const response = await api.get(`/posts/${id}`);
                setPost(response?.data);
            }
            fetchPost();
        }
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        await api.put(`/posts/${id}`, { title: post?.title, content: post?.content });
        setIsEditing(false);
    };
    const handleBack = () => {
        setIsEditing(false);
    };
    const handleBackNow = () => {
        router.push("/");
    };

    if (!post) return <div>Loading...</div>;

    return (
        <>
            <div className="">
                {isEditing ? (
                    <>
                        <div className="lg:pt-6 md:pt-4 pt-3 lg:pb-28 md:pb-24 pb-14">
                            <h2 className="lg:text-3xl md:text-xl text-lg text-center font-bold lg:mb-4 md:mb-3 mb-2 text-black">Edit Post Information</h2>
                            <EditForm
                                title={post?.title}
                                content={post?.content}
                                setTitle={(title) => setPost({ ...post, title })}
                                setContent={(content) => setPost({ ...post, content })}
                                onSubmit={handleUpdate}
                                onClick={handleBack}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="lg:pt-6 md:pt-4 pt-3 lg:pb-28 md:pb-24 pb-14">
                            <h2 className="lg:text-3xl md:text-xl text-lg text-center font-bold lg:mb-10 md:mb-8 mb-6 text-black">{post?.title}</h2>
                            <p className="lg:text-xl/loose md:text-lg/loose text-base/loose text-justify text-slate-800">{post?.content}</p>
                            <div className=' flex justify-center lg:gap-5 md:gap-4 gap-3 lg:mt-28 md:mt-20 mt-14'>
                                <Button onClick={handleBackNow} variant="secondary" className="lg:w-44 md:w-40 w-36 md:text-lg text-base font-semibold lg:py-5 md:py-4 py-3">
                                    Back
                                </Button>
                                <Button className="lg:w-44 md:w-40 w-36 md:text-lg text-base font-semibold lg:py-5 md:py-4 py-3" onClick={() => setIsEditing(true)}>
                                    Edit
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}