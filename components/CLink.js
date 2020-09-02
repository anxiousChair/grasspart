import Link from "next/link"
import Nav from "react-bootstrap/Nav"

export default function CLink(props){
	return (
		<>
			<Nav.Item>
				<Link href={props.href} >
					<Nav.Link>{props.children}</Nav.Link>
				</Link>
			</Nav.Item>
		</>
	)
}