"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="text-center lg:pt-72 md:pt-64 pt-60 font-bold lg:text-xl md:text-lg text-base text-black h-screen">
            <h2 className="text-black">Something went wrong fetching posts segment!</h2>
            <Button
                onClick={
                    () => reset()
                }
            >
                Try again
            </Button>
        </div>
    );
}