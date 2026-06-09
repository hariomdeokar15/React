
  import './App.css'
  import Profile from './components/Profile'
  import Developerprofile from './components/Developerprofile'
  import Student from './components/Student'
  import Employee from './components/Employee'
  import Card from './components/Card'

  function App() {

    return (
      <>
        <Profile />
        <p>===============================</p>
        <Developerprofile/>
        <p>===============================</p>
        
        <Student 
          name = "Hariom Deoakr"
          course = "BE"
          city = "Pune"
          college = "jspm"
        />

        <Student
          name ="Rahul"
          course = "BCA"
          city = "Mumbai"
          college = "xyz college"
        />

        <Student
            name ="Rohit"
            course = "MCA"
            city = "Sangli"
            college ="sm college" 
          /> 

        <p>===============================</p>   
        <Employee
            id='101'
            name="Hariom"
            designation="Intern"
            salary={0}
            company="WhiteCode"
          />
          <Employee
            id="102"
            name = "Rohit"
            designation="Seanior Salse Administrative"
            salary={50000}
            company="xyz"
          />
          <Employee
            id="103"
            name = "Aman"
            designation="Seanior Sales Administrative"
            salary={50000}
            company="xyz"
          />
          <Employee
            id="104"
            name = "Kalpesh"
            designation="Product Manager"
            salary={35000}
            company="xyz"
          />
          <p>==================================</p>

          <Card>
            <h2>Java</h2>
            <p>Backend development language</p>
          </Card>
          <Card>
            <h2>Python</h2>
            <p>Best language for machine learning</p>
          </Card>
          <Card>
            <h2>C++</h2>
            <p>Fastest language for big enterprice applications</p>
          </Card>


      </>
    )
  }

  export default App;
