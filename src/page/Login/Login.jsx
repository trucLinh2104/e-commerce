function Login() {

    return (<>
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 min-h-screen flex items-center justify-center select-none">

        <div className="bg-white p-8 rounded-xl shadow-md md:w-[500px] w-[80%]">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>

            <div className="space-y-4">
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    // onclick="handleLogin()"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Sign In
                </button>
            </div>

            <div id="message" className="text-center text-sm mt-4 text-red-500 flex items-center justify-end gap-4 select-none">
                <a href="#">Đăng kí</a>
                <a href="#">Quên mật khẩu?</a>
            </div>
        </div>
        </div>
    </>)
}

export default Login;