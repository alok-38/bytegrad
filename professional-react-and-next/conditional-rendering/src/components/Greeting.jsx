export default function Greeting(props) {

    return (
        props.isLoggedIn ? <h2>Welcome {props.username}</h2> :
                            <h2>Please log in to continue</h2>
        
    );
    
}