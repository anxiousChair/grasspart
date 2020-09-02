import {Card} from "react-bootstrap"


export default function Item(props){
	return (
			<>
				<Card style={{width:'18rem'}}>
					<Card.Img variant="top" src="none" />
					<Card.Body>
						<Card.Title>Item</Card.Title>
					</Card.Body>
				</Card>
			</>
	)
}