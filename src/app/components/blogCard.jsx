import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BlogCard({ post, onDelete }) {
  return (
    <div className="lg:p-6 p-4 shadow-lg bg-white border-2 border-slate-400 rounded-xl">
      <h3 className="md:text-xl font-bold">{post?.title}</h3>
      <p className="text-gray-700 lg:mt-5 md:mt-4 mt-3">{post?.content.slice(0, 130)}...</p>
      <div className="lg:mt-8 md:mt-7 mt-6 flex justify-center">
        <Link href={`/post/${post?.id}`}>
          <Button className="mr-2 w-28 font-semibold md:text-lg">View</Button>
        </Link>
        <Button className="w-28 font-semibold md:text-lg " variant="destructive" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}
