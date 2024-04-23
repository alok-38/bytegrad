import Logo from '../logo.svg'

function Main() {
	return (
		<div className='Main-content'>
			<img className='App-logo' src={Logo} alt="React logo"></img>
			<h1>Hello from React!</h1>
			<p>Learn more <a className='App-link' href='https://react.dev/'>here</a></p>
		</div>
	)
}

export default Main