

export default function Developerprofile() {

  const name = "Hariom Deokar";
  const profession = "Frontend Developer";
  const city = "Pune";
  const experiance = "Fresher";
  const skills = "HTML, CSS, Javascript";
  const isAvailableforjob = true;
  const age = 25;

  function message() {
    return "Welcome to react journy"
  }

  return (
    <>
      <h2>{message()}</h2>
      <p>name: {name}</p>
      <p>proffesion: {profession}</p>
      <p>city: {city}</p>
      <p>Experiance: {experiance}</p>
      <p>Skills: {skills}</p>

      <p>Age after 5 year {age + 5}</p>

      <p>Available for job: {isAvailableforjob ? "Yes" : "NO"}</p>

    </>
  )
}