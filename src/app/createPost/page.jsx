import Form from "../components/form";
export default function CreatePost() {
    return (
        <div className="lg:pt-6 md:pt-4 pt-3 lg:pb-28 md:pb-24 pb-14">
            <h2 className="lg:text-3xl md:text-xl text-lg text-center font-bold lg:mb-4 md:mb-3 mb-2 text-black">Create New Post</h2>
            <Form />
        </div>
    );
}

