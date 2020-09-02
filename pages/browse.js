import {useAuth} from "../context/Auth"
import {withProtect,ProtectRoute} from "../hoc/ProtectRoute.js"

import {Navbar, Nav, Form, FormControl, Row,Col,CardGroup, Dropdown, Image, Button} from "react-bootstrap"
import Link from "next/link"

import Item from "../components/Item"
import Layout from "../components/Layout"

function Browse(props){
	
	return (
		<Layout>
			<Navbar bg="dark" variant="dark" className="justify-content-between">
				<Nav>
					<Link href="#home" passHref><Navbar.Brand>Syntrofos</Navbar.Brand></Link>
				</Nav>
				<Nav className="flex-row-reverse">
					<Nav.Item>
						<Link href="/browse" passHref>
							<Nav.Link>
								<Image src="/scintilla128.png" width="32" height="32" className="align-bottom" roundedCircle />
							</Nav.Link>
						</Link>
					</Nav.Item>
					<Nav.Item>
						<Link href="#notif" passHref><Nav.Link>Notifications</Nav.Link></Link>
					</Nav.Item>
				</Nav>
			</Navbar>
			<Navbar className="justify-content-center">
				<Nav className="text-center">
					<Nav.Item>
						<Link href="#a" passHref><Nav.Link>Top Search</Nav.Link></Link>
					</Nav.Item>
					<Nav.Item>
						<Link href="#b" passHref><Nav.Link>Services</Nav.Link></Link>
					</Nav.Item>
					<Nav.Item>
						<Link href="#c" passHref><Nav.Link>Buy/Sell</Nav.Link></Link>
					</Nav.Item>
					<Nav.Item>
						<Link href="#d" passHref><Nav.Link>Rent/Lease</Nav.Link></Link>
					</Nav.Item>
				</Nav>
			</Navbar>
			
			<CardGroup className="text-center">
				<Item/><Item/><Item/><Item/>
			</CardGroup>
			
		</Layout>
	)
}


export const getServerSideProps = withProtect(false)

export default ProtectRoute(Browse)