import {
    Alert,
    Box,
    Button,
    TextField,
    Typography
} from '@mui/material'

import { useState } from "react"
import { useForm } from "react-hook-form"

import { addUserAPI } from "../service.ts"


interface EmployeeForm {
    fname: string
    lname: string
    email: string
    phone: string
    company: string
}


function AddEmployee() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<EmployeeForm>()


    const onSubmit = async (data: EmployeeForm) => {

        setLoading(true)
        setError(null)
        setSuccess(false)

        try {

            await addUserAPI(data)

            setSuccess(true)

            reset()

        } catch (error) {

            console.error(error)

            setError("Failed to add employee")

        } finally {

            setLoading(false)
        }
    }


    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                maxWidth: 600,
                margin: "30px auto",
                padding: 3
            }}
        >

            <Typography variant="h5" sx={{ mb: 3 }}>
                Add Employee
            </Typography>


            {error && (
                <Alert
                    severity="error"
                    sx={{ mb: 2 }}
                >
                    {error}
                </Alert>
            )}


            {success && (
                <Alert
                    severity="success"
                    sx={{ mb: 2 }}
                >
                    Employee added successfully.
                </Alert>
            )}


            <TextField
                fullWidth
                label="First Name"
                margin="normal"

                {...register("fname", {
                    required: "First name is required"
                })}

                error={!!errors.fname}

                helperText={errors.fname?.message}
            />


            <TextField
                fullWidth
                label="Last Name"
                margin="normal"

                {...register("lname", {
                    required: "Last name is required"
                })}

                error={!!errors.lname}

                helperText={errors.lname?.message}
            />


            <TextField
                fullWidth
                label="Email"
                margin="normal"

                {...register("email", {
                    required: "Email is required",

                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address"
                    }
                })}

                error={!!errors.email}

                helperText={errors.email?.message}
            />


            <TextField
                fullWidth
                label="Phone"
                margin="normal"

                {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Phone number should be 10 digits"
                    }
                })}

                error={!!errors.phone}

                helperText={errors.phone?.message}
            />


            <TextField
                fullWidth
                label="Company"
                margin="normal"

                {...register("company", {
                    required: "Company is required"
                })}

                error={!!errors.company}

                helperText={errors.company?.message}
            />


            <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{ mt: 3 }}
            >
                {loading ? "Adding..." : "Add Employee"}
            </Button>

        </Box>
    )
}

export default AddEmployee
