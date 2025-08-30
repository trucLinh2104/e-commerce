function Dashboard() {

    return (<>

        <div class="bg-gradient-to-br from-blue-600 to-purple-700 min-h-screen flex items-center justify-center">

            <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
                <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>

                <div class="space-y-4">
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        onclick="handleLogin()"
                        class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Sign In
                    </button>
                </div>

                <div id="message" class="text-center text-sm mt-4 text-red-500"></div>
            </div>
        </div>
    </>)
}

export default Dashboard;