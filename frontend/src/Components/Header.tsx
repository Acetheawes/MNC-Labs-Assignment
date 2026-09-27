import { Typography, Button } from "@mui/material"

interface HeaderProps {
    setPage: (page: "employees" | "add") => void
}

function Header({setPage}: HeaderProps) {
    return(
        <div className="p-5 justify-center flex">
            <Typography>Employee Management Dashboard</Typography>
            <Button onClick={() => setPage("employees")}>EmployeeList</Button>
            <Button
                onClick={()=> setPage("add")}
            >Add Employee</Button>


        </div>
    )
}

export default Header