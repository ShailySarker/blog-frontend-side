import { Button } from "@/components/ui/button";

export default function ConfirmModal({ onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white lg:p-7 md:p-6 p-5 rounded-lg shadow-lg">
                <p className="md:text-xl text-lg font-semibold text-black">Are you sure to delete this post?</p>
                <div className="lg:mt-12 md:mt-11 mt-10 flex justify-center gap-3">
                    <Button className="w-24 font-semibold md:text-lg text-base" variant="destructive" onClick={onConfirm}>Yes</Button>
                    <Button className="w-24 font-semibold md:text-lg text-base" variant="secondary" onClick={onCancel}>No</Button>
                </div>
            </div>
        </div>
    );
}