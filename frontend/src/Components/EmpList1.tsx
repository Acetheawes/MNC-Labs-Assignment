import { Alert,Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { useEffect, useState } from "react"
import {getUsersAPI, searchUsersAPI, addUserAPI} from '../service.ts'
import DataTable from 'react-data-table-component'
import {useDispatch, useSelector} from "react-redux"

type Employee = {
    id: number
    fname: string
    lname: string
    email: string
    phone: string
    company: string
}
function EmpList() {
    const [employeeData, setEmployeeData] = useState<Employee[]>([])
    const [searchTerm, setSearchTerm] = useState("")
    const columns = [
        {
            name: <Typography className='fw-bold'>Name</Typography>,
            selector: (row: Employee) => `${row.fname} ${row.lname}`, 
        },
        {
            name: <Typography className='fw-bold'>Email</Typography>,
            selector: (row: Employee) => row.email, 
        },
        {
            name: <Typography className='fw-bold'>Phone</Typography>,
            selector: (row: Employee) => row.phone, 
        },
        {
            name: <Typography className='fw-bold'>Company</Typography>,
            selector: (row: Employee) => row.company, 
        },
    ]

    useEffect(() => {
        getUsers()
        handleSearch()
    }, [searchTerm])

    const getUsers = async () => {
        const data = await getUsersAPI()
        setEmployeeData(data)

    }

    const handleSearch = async () => {
        const data = await searchUsersAPI(searchTerm)
        setEmployeeData(data)
    }

    return(
        <div className=' ml-5 mr-5 border-2 border-gray-800'>
            <div className='flex right mt-2 ml-2'>
                <TextField
                label = "Search"
                value = {searchTerm}
                onChange= {(e)=> setSearchTerm(e.target.value)}/>
                

            </div>


            <div>
                <DataTable columns={columns} data={employeeData} pagination>

                </DataTable>
            </div>
        </div>
    )

}

export default EmpList