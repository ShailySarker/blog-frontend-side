import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function EditForm({ title, content, setTitle, setContent, onSubmit, onClick }) {
    return (
        <form onSubmit={onSubmit} className='flex flex-col lg:gap-8 md:gap-6 gap-4 lg:mt-12 md:mt-9 mt-7 border-2 border-slate-400 lg:p-16 md:p-10 p-4 rounded-xl shadow-md'>
            <div className="grid w-full items-center lg:gap-2 md:gap-1.5 gap-1">
                <Label className="lg:text-xl md:text-lg text-base font-semibold text-black" htmlFor="title">Title <span className='text-red-500 font-bold'>*</span></Label>
                <Input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e?.target?.value)}
                    className="bg-white text-black"
                    placeholder="Write your post title.."
                    required
                />
            </div>
            <div className="grid w-full lg:gap-2 md:gap-1.5 gap-1">
                <Label className="lg:text-xl md:text-lg text-base font-semibold text-black" htmlFor="content">Content <span className='text-red-500 font-bold'>*</span></Label>
                <Textarea
                    placeholder="Write your post content.."
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e?.target?.value)}
                    className="bg-white text-black"
                    rows="6"
                    required />
            </div>
            <div className='flex justify-center lg:gap-5 md:gap-4 gap-3 lg:mt-6 md:mt-5 mt-4'>
                <Button onClick={onClick} variant="secondary" className="lg:w-44 md:w-40 w-36 md:text-lg text-base font-semibold lg:py-5 md:py-4 py-3">
                    Back
                </Button>
                <Button type="submit" className="lg:w-44 md:w-40 w-36 md:text-lg text-base font-semibold lg:py-5 md:py-4 py-3">
                    Edit Now
                </Button>
            </div>
        </form>
    );
}