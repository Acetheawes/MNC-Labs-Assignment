import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Employee {
    id: number;
    fname: string;
    lname: string;
    email: string;
    phone: string;
    company: string;
}

interface EmployeeState {
    employees: Employee[];
    total: number;
    searchTerm: string;
    page: number;
    selectedEmployee: Employee | null;
    loading: boolean;
    error: string | null;
}

const initialState: EmployeeState = {
    employees: [],
    total: 0,
    searchTerm: "",
    page: 1,
    selectedEmployee: null,
    loading: false,
    error: null
};

const employeeSlice = createSlice({
    name: "employees",

    initialState,

    reducers: {

        setEmployees: (
            state,
            action: PayloadAction<Employee[]>
        ) => {
            state.employees = action.payload;
        },

        // 👇 PUT IT HERE
        setTotal: (
            state,
            action: PayloadAction<number>
        ) => {
            state.total = action.payload;
        },

        setSearchTerm: (
            state,
            action: PayloadAction<string>
        ) => {
            state.searchTerm = action.payload;
        },

        setPage: (
            state,
            action: PayloadAction<number>
        ) => {
            state.page = action.payload;
        },

        setSelectedEmployee: (
            state,
            action: PayloadAction<Employee | null>
        ) => {
            state.selectedEmployee = action.payload;
        },

        setLoading: (
            state,
            action: PayloadAction<boolean>
        ) => {
            state.loading = action.payload;
        },

        setError: (
            state,
            action: PayloadAction<string | null>
        ) => {
            state.error = action.payload;
        }
    }
});

export const {
    setEmployees,
    setTotal,
    setSearchTerm,
    setPage,
    setSelectedEmployee,
    setLoading,
    setError
} = employeeSlice.actions;

export default employeeSlice.reducer;