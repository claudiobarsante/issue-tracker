import Link from 'next/link';
import { FaBug } from 'react-icons/fa';

const NavBar = () => {
	return (
		<nav className='text-gray-700 flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
			<Link href='/'>
				<FaBug />
			</Link>
			<ul className='flex space-x-6'>
				<li>
					<Link href='/' className='text-zinc-500 hover:text-zinc-800 transition-colors'>
						Dashboard
					</Link>
				</li>
				<li>
					<Link href='/issues' className='text-zinc-500 hover:text-zinc-800 transition-colors'>
						Issues
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
