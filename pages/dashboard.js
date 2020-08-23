import {useAuth} from "../context/Auth"
import ProtectRoute from "../hoc/ProtectRoute"

function Dashboard(){
	return (
		<div>
			<h1>Protected page</h1>
		</div>
	)
}


export default ProtectRoute(Dashboard)