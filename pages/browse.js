import {useAuth} from "../context/Auth"
import {withProtect,ProtectRoute} from "../hoc/ProtectRoute.js"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import Dropdown from "react-bootstrap/Dropdown"

import Link from "next/link"

function Browse(props){
	
	return (
		<>
			<Navbar bg="dark" variant="dark" className="justify-content-between">
				<Nav>
					<Link href="/browse" passHref><Navbar.Brand>Syntrofos</Navbar.Brand></Link>
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
		</>
	)
}


export const getServerSideProps = withProtect(false)

export default ProtectRoute(Browse)