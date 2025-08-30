import './NotFound.css'
function NotFound() {

    return (<>
        <div className="bg-gradient-to-bl from-indigo-200 to-pink-50 min-h-screen flex items-center justify-center select-none">
            <div className="max-w-[500px] p-10 bg-white rounded-[15px] backdrop-blur-md shadow-2xl ">
                <div className="emoji text-6xl ">😕</div>
                <h1 className="text-6xl my-2.5 text-blue-900">404</h1>
                <p className="text-lg my-2.5 text-gray-600">Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
                <a href="/public">Quay về trang chủ</a>
            </div>
        </div>
    </>)
}

export default NotFound;