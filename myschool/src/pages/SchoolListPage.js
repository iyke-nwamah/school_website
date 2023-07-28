import React, { useState, useEffect } from 'react'

const SchoolListPage = () => {
  let [school, setSchool] = useState([])

  useEffect(() => {
  }, []);

  let getSchool = async () => {
    let response = await fetch('http://192.168.43.223:5000/api/signup/') /*Using fetch api to connect both frontend and backend*/
    let data = response.json()
    setSchool(data)
  }

  return (
    <div className="school-signup">
      {school.map((school, index) => (
        <h3>{school.body}</h3>
      ))}
    </div>
  )
}

export default SchoolListPage