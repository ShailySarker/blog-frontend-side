
"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import api from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function Form({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/posts', { title, content });
            alert("New post added successfully!");
            router.push('/');
        } catch (error) {
            console.error("Error creating post:", error);
            alert("Failed to add post. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col lg:gap-8 md:gap-6 gap-4 lg:mt-12 md:mt-9 mt-7 border-2 border-slate-400 lg:p-16 md:p-10 p-4 rounded-xl shadow-md'>
            <div className="grid w-full items-center lg:gap-2 md:gap-1.5 gap-1">
                <Label className="lg:text-xl md:text-lg text-base font-semibold" htmlFor="title">Title <span className='text-red-500 font-bold'>*</span></Label>
                <Input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e?.target?.value)}
                    className="bg-white"
                    placeholder="Write your post title.."
                    required
                />
            </div>
            <div className="grid w-full lg:gap-2 md:gap-1.5 gap-1">
                <Label className="lg:text-xl md:text-lg text-base font-semibold" htmlFor="content">Content <span className='text-red-500 font-bold'>*</span></Label>
                <Textarea
                    placeholder="Write your post content.."
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e?.target?.value)}
                    className="bg-white"
                    rows="6"
                    required />
            </div>
            <Button type="submit" className="mx-auto lg:w-44 md:w-40 w-36 md:text-lg text-base font-semibold lg:py-5 md:py-4 py-3 flex justify-center lg:mt-6 md:mt-5 mt-4">
                Submit
            </Button>
        </form>
    );
}