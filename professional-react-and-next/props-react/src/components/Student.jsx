import PropTypes from 'prop-types';
import '../App.css';

export default function Student(props) {
    return (
        <div className="cards w-80 text-center mb-10 leading-10">
            <div className='border-solid border-2 border-indigo-600 p-10'>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Student: {props.isStudent ? "Yes" : "No"}</p>
            </div>
        </div>
    );
}

Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}