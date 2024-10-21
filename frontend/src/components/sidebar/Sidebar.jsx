import useConversation from "../../zustand/useConversation";
import Chatbot from "../messages/Chatbot";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {

	const { bot,setBot, setSelectedConversation } = useConversation();
	const callBot = () => {
		setBot(!bot)
		setSelectedConversation(null)
		console.log(bot)
  };
	return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div onClick={callBot} className="pt-5">
        <Chatbot />
      </div>
      <div className="divider px-3"></div>

      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;

// STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;
