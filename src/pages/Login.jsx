const Login = () => {
	return (
		<div className="h-screen bg-[#c1beff] flex justify-center items-center">
			<div className="w-6/12 flex bg-white border rounded-xl overflow-hidden min-h-[37.5rem]">
				<div className="flex-1 bg-login bg-cover p-12 flex flex-col gap-11 text-white">
					<h1 className="text-7xl font-bold text-center">Welcome to XCitizen.</h1>
					<p>Log in to your account to access exciting features and personalized content. Enjoy a seamless experience with XCitizen.</p>
					<span className="text-sm">Don&apos;t you have an account?</span>
					<button className="bg-white text-purple-700 p-2.5 w-6/12 rounded-lg">Register</button>
				</div>
				<div className="flex-1 p-12 flex flex-col justify-center space-y-7">
					<h1 className="text-gray-600 font-bold text-6xl">Login</h1>
					<form className="flex flex-col gap-8">
						<input className="py-5 px-2.5 border-b-2 outline-none" type="text" placeholder="Username" /><input className="py-5 px-2.5 border-b-2 outline-none" type="password" placeholder="Password" />
						<button className="w-6/12 bg-purple-600 text-white rounded-lg p-2.5" type="submit">login</button>
					</form>
				</div>
			</div>
		</div>
	);
}
 
export default Login;