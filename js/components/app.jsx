class App extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div id="appsBody">
				<HeadProfile />
				<Divider /> 
				<FirstProject /> 
				<SecondProject /> 
				<Divider /> 
				<ThirdProject /> 
				<DividerRotated />

			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));