import {withProtect, ProtectRoute} from "../../hoc/ProtectRoute"
import Navbar from "react-bootstrap/Navbar"

function Product(props){
	return (
		<><p>ose</p></>
	)
}

export const getServerSideProps = withProtect(false)
export default ProtectRoute(Product)