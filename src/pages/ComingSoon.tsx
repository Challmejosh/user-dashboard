const ComingSoon = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-transparent ">
    <img
      src="/vite.svg"
      alt="Coming Soon"
      className="w-24 h-24 mb-6 animate-bounce"
    />
    <h1 className="text-4xl font-bold text-[#5932EA] mb-4">Coming Soon</h1>
    <p className="text-gray-600 mb-2">This feature is under development.</p>
    <a href="/" className="text-[#EF498F] underline">
      Back to Home
    </a>
  </div>
);

export default ComingSoon;
