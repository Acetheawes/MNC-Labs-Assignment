import Header from './Components/Header.tsx'
import EmpList from './Components/EmpList.tsx'
import { useState } from 'react'
import AddEmployee from './Components/AddEmployee.tsx'
import { useSelector } from "react-redux"
import type { RootState } from "./store/store.ts"
import EmpDetails from "./Components/EmpDetails.tsx"

function App() {
  const selectedEmployee = useSelector(
    (state: RootState) => state.employees.selectedEmployee
  )

  const [page, setPage] = useState<"employees" | "add">("employees")

  return(
    <div>
      <Header setPage={setPage}/>

      {selectedEmployee? (
        <EmpDetails/>
      ) : page === "employees" ? (
      <EmpList/>
      ) : (
      <AddEmployee/>
      )}
    </div>
  )
}

export default App
