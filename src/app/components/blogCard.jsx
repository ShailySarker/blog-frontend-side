import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BlogCard({ post, onDelete }) {
  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h3 className="text-xl font-bold">{post?.title}</h3>
      <p className="text-gray-700">{post?.content.slice(0, 100)}...</p>
      <div className="mt-4">
        <Link href={`/post/${post?.id}`}>
          <Button className="mr-2">View</Button>
        </Link>
        <Button variant="destructive" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}
