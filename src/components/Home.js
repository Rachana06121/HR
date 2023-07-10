import React, { useState } from 'react';
import { AnimatePresence, motion, spring } from 'framer-motion';
import { PiListDashesFill } from 'react-icons/pi';
import {LuLayoutDashboard} from 'react-icons/lu';
import { BsCalendarCheck } from 'react-icons/bs';
import {BiTimer} from 'react-icons/bi';
import {FaPencilRuler} from 'react-icons/fa';
import {AiOutlineDeploymentUnit} from 'react-icons/ai';
import {FaUserFriends} from 'react-icons/fa';
import {ImProfile} from 'react-icons/im';
import {FaAddressBook} from 'react-icons/fa';
import {DiAtom} from 'react-icons/di';
import { NavLink } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';

const routes = [

	{
		path: "/",
		name: "Dashboard",
		icon: <LuLayoutDashboard/>,
	},
	{
		path: "/pages/Myleaves",
		name: "My Leaves",
		icon: < BsCalendarCheck />,
	},
	{
		path: "/pages/Timesheet",
		name: "Timesheet",
		icon: <BiTimer />,
	},
	{
		path: "/pages/Myrequest",
		name: "My Request",
		icon: <FaPencilRuler />,
	},
	{
		path: "/pages/Department",
		name: "Department",
		icon: <AiOutlineDeploymentUnit />,
	},
	{
		path: "/pages/Friends",
		name: "Bring Your Buddy",
		icon: <FaUserFriends />,
	},
	{
		path: "/pages/Myprofile",
		name: "My Profile",
		icon: <ImProfile />,
	},
	{
		path: "/pages/Phonebook",
		name: "Phone Book",
		icon: <FaAddressBook />,
	},
	{
		path: "/pages/Tours",
		name: "I am Torus",
		icon: <DiAtom />,
	},

];

const Home = ({ children }) => {

	const[isOpen , setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const inputAnimation = {
		hidden:{
			width:0,
			padding: 0,
			opacity: 0,
			Transition:{
				duration: 0.2,
			} 
		},
		show:{
			width:"200px",
			padding: "5px 15px",
			opacity: 1,
			Transition:{
				duration: 0.2,
			} 
		},
	};

	const ShowAnimation = {
		hidden:{
			width:0,
			opacity: 0,
			Transition:{
				duration: 0.2,
			} 
		},
		show:{
			width:"auto",
			opacity: 1,
			Transition:{
				duration: 0.2,
			} 
		},
	};

	return (
		<div className="main-container">
			<motion.div 
				animate={{ width: isOpen? "200px" : "35px" , Transition:{
					duration:0.5,
					type:spring,
					damping: 11,

					}}} 
					className="Home">
					<div className="top_section">
						{isOpen && <motion.h1 veriant={ShowAnimation}
							initial="hidden"
							animate="show"
							exit="hidden" className='logo'>Black Devlis</motion.h1>}

					<div className='bars'>
						<PiListDashesFill onClick={toggle}/>
					</div>
					</div>
					{/* <div className='Search'>
						<div className='search_icon'>
							<BiSearchAlt2/>
						</div>
						<AnimatePresence>
						{isOpen && <motion.input initial="hidden"
						animate="show"
						exit="hidden"
						variants={inputAnimation} 
						placeholder="Search..."/>}
						</AnimatePresence> */}

					{/* </div> */}
					<section className="routes">
						{routes.map((route) => (
							<NavLink activeClassName="active"
								to={route.path}
								key={route.name}
								className="link"
								>
									<div className="icon">{route.icon}</div>
									<AnimatePresence>
									{isOpen &&(
									<motion.div 
									veriant={ShowAnimation}
									initial="hidden"
									animate="show"
									exit="hidden"
									className='link_text'>
									{route.name}</motion.div>
									)}
									</AnimatePresence>
							</NavLink>
						))}
					</section>
			</motion.div>

			<main>
				{children}
			</main>
		</div>
	);
};

export default Home;
