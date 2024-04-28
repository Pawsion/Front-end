export default function HeroLoadingPage() {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );
}
