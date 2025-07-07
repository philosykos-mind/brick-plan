import { Button } from "@/components/ui/button"

export const Pages = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Page</h1>
            <p className="text-lg text-gray-700">This is a simple page built with React and Tailwind CSS.</p>
            <div className="flex min-h-svh flex-col items-center justify-center">
                <Button>Click me</Button>
            </div>
        </div>
    )
} 