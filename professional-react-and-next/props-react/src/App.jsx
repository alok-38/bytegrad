import Student from './components/Student'

export default function App() {
  return (
    <div>
      <Student name="alok" age={39} isStudent={false}/>
      <Student name="SpongeBob" age={30} isStudent={true}/>
      <Student name="Ikbal" age={42} isStudent={false}/>
    </div>
  )  
}