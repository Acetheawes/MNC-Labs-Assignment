import { Button, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"

import type { RootState, AppDispatch } from "../store/store.ts"
import {
    setSelectedEmployee
} from "../store/employeeSlice.ts"
function EmpDetails() {
    const dispatch = useDispatch<AppDispatch>()
    const employee = useSelector(
        (state:RootState) => state.employees.selectedEmployee
    )

    if (!employee) { 
        return null
    }

    return(
        <div>
            <Typography variant="h4">
                {employee.fname} {employee.lname}
            </Typography>

            <Typography>
                Email: {employee.email}
            </Typography>

            <Typography>
                Phone: {employee.phone}
            </Typography>

            <Typography>
                Company: {employee.company}
            </Typography>

            <Button
                onClick={() => dispatch(setSelectedEmployee(null))}
            >
                Back
            </Button>
        </div>
    )
}
export default EmpDetails