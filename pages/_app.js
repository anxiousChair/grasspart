import "../styles/tailwind.css"
import "../custom.css"
import {AuthProvider} from "../context/Auth.js"

function MyApp({ Component, pageProps }) {
  return (
  	<AuthProvider>
			<Component {...pageProps} />
  	</AuthProvider>
  )
}

export default MyApp
