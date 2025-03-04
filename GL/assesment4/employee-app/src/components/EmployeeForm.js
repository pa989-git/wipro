import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addEmployee } from "../services/employeeService";

const EmployeeForm = () => {
    const initialValues = { name: "", address: "", dept: "", manager: "" };
    
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        address: Yup.string().required("Address is required"),
        dept: Yup.string().required("Department is required"),
        manager: Yup.string().required("Manager is required"),
    });

    const onSubmit = (values, { resetForm }) => {
        addEmployee(values)
            .then(() => {
                alert("Employee added successfully");
                resetForm();
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="container mt-4">
            <h2>Add Employee</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form>
                    <div className="mb-3">
                        <label>Name</label>
                        <Field name="name" className="form-control" />
                        <ErrorMessage name="name" component="div" className="text-danger" />
                    </div>

                    <div className="mb-3">
                        <label>Address</label>
                        <Field name="address" className="form-control" />
                        <ErrorMessage name="address" component="div" className="text-danger" />
                    </div>

                    <div className="mb-3">
                        <label>Department</label>
                        <Field name="dept" className="form-control" />
                        <ErrorMessage name="dept" component="div" className="text-danger" />
                    </div>

                    <div className="mb-3">
                        <label>Manager</label>
                        <Field name="manager" className="form-control" />
                        <ErrorMessage name="manager" component="div" className="text-danger" />
                    </div>

                    <button type="submit" className="btn btn-primary">Add Employee</button>
                </Form>
            </Formik>
        </div>
    );
};

export default EmployeeForm;
