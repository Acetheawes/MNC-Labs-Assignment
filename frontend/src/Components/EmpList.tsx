import {
    Alert,
    Box,
    Button,
    CircularProgress,
    TextField,
    Typography
} from '@mui/material'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import {
    getUsersAPI,
    searchUsersAPI
} from '../service.ts'

import DataTable from 'react-data-table-component'

import type { RootState, AppDispatch } from '../store/store.ts'

import {
    setEmployees,
    setSearchTerm,
    setPage,
    setLoading,
    setError,
    setTotal,
    setSelectedEmployee
} from '../store/employeeSlice.ts'

import type { Employee } from '../store/employeeSlice.ts'


function EmpList() {

    const dispatch = useDispatch<AppDispatch>()

    const {
        employees,
        total,
        searchTerm,
        page,
        loading,
        error
    } = useSelector(
        (state: RootState) => state.employees
    )


    const columns = [
        {
            name: <Typography className='fw-bold'>Name</Typography>,
            selector: (row: Employee) =>
                `${row.fname} ${row.lname}`,
        },

        {
            name: <Typography className='fw-bold'>Contact</Typography>,

            cell: (row: Employee) => (
                <Box>
                    <Typography>
                        <strong>Email:</strong> {row.email}
                    </Typography>

                    <Typography>
                        <strong>Phone:</strong> {row.phone}
                    </Typography>
                </Box>
            ),
        },

        {
            name: <Typography className='fw-bold'>Company</Typography>,
            selector: (row: Employee) =>
                row.company,
        },
        {
            name: <Typography className='fw-bold'>Action</Typography>,
            selector: (row: Employee) =>
                <Button
                    variant="contained"
                    onClick={()=> dispatch(setSelectedEmployee(row))}
                >
                    View Details</Button>
        },
    ]


    useEffect(() => {
        loadEmployees()
    }, [searchTerm, page])


    const loadEmployees = async () => {

        dispatch(setLoading(true))
        dispatch(setError(null))

        try {

            const limit = 30
            const skip = (page - 1) * limit

            let result

                result = await searchUsersAPI(
                    searchTerm,
                    limit,
                    skip
                )
                console.log("API RESULT:", total)
            dispatch(setEmployees(result.data))
            dispatch(setTotal(result.total))

            // if (searchTerm === "") {

            //     result = await getUsersAPI(limit, skip)
            //     console.log("NORMAL USERS:", result)

            // } else {

            //     result = await searchUsersAPI(
            //         searchTerm,
            //         limit,
            //         skip
            //     )
            //     console.log("API RESULT:", total)
            // dispatch(setEmployees(result.data))
            // dispatch(setTotal(result.total))
            // }


        } catch (error) {
            console.error("failed to load employees: ",error)

            dispatch(
                setError("Failed to load employees")
            )

        } finally {

            dispatch(setLoading(false))
        }
    }


    const handlePageChange = (newPage: number) => {
        dispatch(setPage(newPage))
    }

    console.log(employees)
    console.log(total)

    return (
        <div className='ml-5 mr-5 border-2 border-gray-800'>

            <div className='flex mt-2 ml-2'>

                <TextField
                    label="Search"
                    value={searchTerm}
                    onChange={(e) => {
                        dispatch(setSearchTerm(e.target.value))
                        dispatch(setPage(1))
                    }}
                />

            </div>


            {error && (
                <Alert severity="error">
                    {error}
                </Alert>
            )}


            {loading ? (

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        p: 5
                    }}
                >
                    <CircularProgress />
                </Box>

            ) : employees.length === 0 ? (

                <Typography sx={{ p: 3 }}>
                    No employees found.
                </Typography>

            ) : (

                <DataTable
                    columns={columns}
                    data={employees}
                    pagination
                    paginationPerPage={30}
                    paginationServer
                    paginationTotalRows={total}
                    onChangePage={handlePageChange}
                    highlightOnHover
                />

            )}

        </div>
    )
}

export default EmpList