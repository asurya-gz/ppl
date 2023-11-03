export default function Login() {
  return (
    <div className="container h-screen w-full bg-[url('/img/login.png')] bg-no-repeat bg-cover">
      <div className="h-screen flex items-center justify-center">
        <div className="w-[400px] border-2 bg-opacity-25 backdrop-blur-md bg-white p-8 rounded-3xl shadow-md">
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-white mb-8">Login</h2>
            <form>
              <div className="mb-8">
                <label className="block text-white text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md"
                  placeholder="Email"
                />
              </div>
              <div className="mb-8">
                <label className="block text-white text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full p-2 border rounded-md"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#BD0C47] text-white p-2 rounded-md hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
