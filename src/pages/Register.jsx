const Register = () => {
	return (
		<div className="h-screen bg-[#c1beff] flex justify-center items-center">
			<div className="w-6/12 flex flex-row-reverse bg-white border rounded-xl overflow-hidden min-h-[37.5rem]">
				<div className="flex-1 bg-login bg-cover p-12 flex flex-col gap-11 text-white">
					<h1 className="text-7xl font-bold">XCitizen.</h1>
					<p>Create your XCitizen account to unlock exciting features and personalized content. Join us for a seamless experience.</p>
					<span className="text-sm">Already have an account?</span>
					<button className="bg-white text-purple-700 font-bold p-2.5 w-6/12 rounded-lg">Login</button>
				</div>
				<div className="flex-1 p-12 flex flex-col justify-center space-y-7">
					<h1 className="text-gray-600 font-bold text-4xl">Create an Account</h1>
					<form className="flex flex-col gap-8">
						<input className="py-5 px-2.5 border-b-2 outline-none" type="text" placeholder="Username" />
						<input className="py-5 px-2.5 border-b-2 outline-none" type="email" placeholder="Email" />
						<input className="py-5 px-2.5 border-b-2 outline-none" type="password" placeholder="Password" />
						<input className="py-5 px-2.5 border-b-2 outline-none" type="text" placeholder="Name" />
						<button className="w-6/12 bg-purple-600 text-white font-bold rounded-lg p-2.5" type="submit">Register</button>
					</form>
				</div>
			</div>
		</div>
	);
}
 
export default Register;