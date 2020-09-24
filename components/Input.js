
function Input(props){

	return (
	<div className="mb-8">
		<label className="tracking-wide font-bold text-xs text-color-2 block mb-1 uppercase">Username</label>
		<input type="text" id="username" name="username" ref={register({required:true,maxLength:40,minLength:5})} onBlur={isExist} className="tracking-wide text-gray-600 w-full border-b border-color-2 px-4 py-2" placeholder="Username" autocomplete="off"/>
		{props.errors.username && props.errors.username.type == "userexist" && printError(props.errors.username.message) || props.errors.username && printError("Username must contain at least 5 characters") || props.loading || props.available}
	</div>
	)
}