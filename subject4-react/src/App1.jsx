import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//ex1
// function App() {
//     let companies = [
//     { name: "Tesla", revenue: 140 },
//     { name: "Microsoft", revenue: 300 },
//     { name: "Google", revenue: 600 }
//   ]

//   const showCompany = (name, revenue) => { 
//     return <div id={name}>  {name} makes  {revenue} every year</div>;
//   }

//   return (
//     <div className="ex-space">
//       <h4 className='ex-title'>Exercise 1</h4>
//       <div className="exercise" id="ex-1">
//         {companies.map((company) => (
//           showCompany(company.name, company.revenue)
//         ))}
//       </div>
//     </div>
//   )
// }

//ex2
function App() {
  const getClassName = (temperature) => {
    if (temperature < 15) {
      return "freezing";
    } else if (temperature < 30) {
      return "fair";
    } else {
      return "hell-scape";
    }
  }

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        <div id = "weatherBox" className={getClassName(30)}>
          The weather is {getClassName(30)}
        </div>
      </div>
    </div>
  )
}

export default App
