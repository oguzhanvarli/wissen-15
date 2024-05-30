




import React, { useState } from 'react'
import { Button, TextField } from "@mui/material"
import axios from 'axios'
import SendIcon from '@mui/icons-material/Send';
import { Formik } from "formik"
import * as Yup from "yup"
import {useNavigate} from "react-router-dom"

const LoginSchema = Yup.object().shape({
  username : Yup.string().required("Username is required!")
  .min(3, "Username is too short!").max(20, "Username is too long!"),
  password: Yup.string().required("Password is required!").min(4, "Password is too short!")
})


function Login() {

  const navigate = useNavigate()

  const handleLogin = async (loginObject) => {
    try {
      let response = await axios.post("http://localhost:9000/user/login",loginObject)
      console.log(response.data)
      if(response.data.status){
        navigate("/")
      }
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div style={{ minWidth: "300px" }}>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(value) => handleLogin(value)}
          validationSchema={LoginSchema}
        >
          {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => (
            <>
              <div>
                <TextField
                  variant='standard'
                  label="Username"
                  fullWidth
                  value={values.username}
                  onChange={handleChange("username")}
                  onBlur={handleBlur("username")}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />
              </div>
              <div className='my-4'>
                <TextField variant='standard'
                  label="Password"
                  type='password'
                  fullWidth
                  value={values.password}
                  onChange={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </div>
              <div className='flex justify-center'>
                <Button variant='outlined' onClick={handleSubmit} endIcon={<SendIcon />}>Login</Button>
              </div>
            </>
          )}

        </Formik>
      </div>

    </div>
  )
}

export default Login