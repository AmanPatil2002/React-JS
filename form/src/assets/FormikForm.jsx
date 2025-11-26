import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
function Formikform() {
    const initialValues={
        name:"",
        email:"",
        phone:""
    }
    const onSubmit=(values)=>{
        console.log(values)
    }
    // const validate=(values)=>{
    //     let errors={}
    //     if(!values.name)
    //     {
    //         errors.name="Name is required"
    //     }
    //     else if(values.name.length<4 || values.name.length>6)
    //     {
    //         errors.name="Name must contain 4 to 6 characters"
    //     }
    //     if(!values.email)
    //         {
    //             errors.email="Email is required"
    //         }
    //         if(!values.phone)
    //             {
    //                 errors.phone="Phone is required"
    //             }
    //             else if(values.phone.length!=10)
    //             {
    //                 errors.phone="Phone number must have 10 digits"
    //             }
    //     return errors
    // }
    const validationSchema=Yup.object({
        name:Yup.string().required("Name is required").min(4).max(6),
        email:Yup.string().required("Email is required"),
        phone:Yup.string().required("Phone number is required").min(10).max(10)
    })
    const formik=useFormik({initialValues,onSubmit,validationSchema})
  return (
    <div>
        <h3>Form validation using useFormik Hook</h3>
        <form onSubmit={formik.handleSubmit}>
            <input type='text' placeholder='Enter Name'
            name='name' onChange={formik.handleChange} value={formik.values.name}
            onBlur={formik.handleBlur}/>
            {formik.errors.name && formik.touched.name?<span>{formik.errors.name}</span>:null}<br/><br/>
            <input type='email' placeholder='Enter Email Address'
            name='email' onChange={formik.handleChange} value={formik.values.email}
            onBlur={formik.handleBlur}/>
            {formik.errors.email && formik.touched.email?<span>{formik.errors.email}</span>:null}<br/><br/>
            <input type='text' placeholder='Enter Phone Number'
            name='phone' onChange={formik.handleChange} value={formik.values.phone}
            onBlur={formik.handleBlur}/>
            {formik.errors.phone && formik.touched.phone?<span>{formik.errors.phone}</span>:null}<br/><br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Formikform
