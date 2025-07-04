
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-6xl font-bold text-[#EF498F] mb-4">404</h1>
    <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
    <p className="text-gray-600 mb-6">
      Sorry, the page you are looking for does not exist.
    </p>
    <a href="/" className="text-[#5932EA] underline">
      Go Home
    </a>
  </div>
);

export default NotFound;
