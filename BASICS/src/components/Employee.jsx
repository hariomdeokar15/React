
export default function Employee({id, name, designation, salary, company}){
  return(
    <>
     <p>Employee ID: {id}</p>
     <p>Name: {name}</p>
     <p>Designation: {designation}</p>
     <p>Salary: {salary}</p>
     <p>Company: {company}</p>
     <p>Salary Status: {salary > 30000? "Good Salary": "Need Growth"}</p>
     <p>---------------------------------------</p>
    </>
  )
}