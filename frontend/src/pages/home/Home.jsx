import GenerateChat from "../../components/messages/GenerateChat";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import useConversation from "../../zustand/useConversation";

const Home = () => {
	const { bot } = useConversation();
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />	
			{bot ? (<GenerateChat />) : (<MessageContainer />)}
		</div>
	);
};
export default Home;
