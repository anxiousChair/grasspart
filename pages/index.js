import {Navbar,Button,Jumbotron} from "react-bootstrap"
import Layout from "../components/Layout"
import Link from "next/link"

function Index(){
	return (
		<Layout>
			<Navbar bg="light "variant="light">
				<Navbar.Brand>Text</Navbar.Brand>
			</Navbar>
			<Jumbotron className="text-center">
				<h1>Welcome!</h1>
				<p>your descrption here</p>
				<Link href="/browse"><Button variant="primary">Continue</Button></Link>
			</Jumbotron>
		</Layout>
	)	
}

export default Index