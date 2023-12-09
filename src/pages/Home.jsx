import Posts from "../components/Posts";
import Stories from "../components/Stories";

const Home = () => {
	return (
		<div className="flex-[6] overflow-y-scroll scroll-bar bg-secondary py-5 px-[4.375rem]">
			<div className="flex flex-col gap-5">
				<Stories />
				<Posts />
			</div>
		</div>
	);
}
 
export default Home;