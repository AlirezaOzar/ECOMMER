import { Box, Button, Typography, IconButton, TextField, colors } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router-dom";
import { signupUser } from "../services/SignUpService";
import { useState } from "react";

const initialValues = {
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
}



const Signup = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { name, email, phoneNumber, password } = values;
        const userData = {
            name,
            email,
            phoneNumber,
            password,
        };
        console.log(userData)
        try {
            const { data } = await signupUser(userData)
            console.log(data)
        } catch (error) {
            console.log(error.response.data.message)
            if (error.response && error.response.data.message)
                setError(error.response.data.message)
        }
    }
    const validationSchema = Yup.object({
        name: Yup.string().required("name is requierd"),
        email: Yup.string().email("email is not correct").required("email is requierd").matches(/^(?!.*@[^,]*,)/),
        phoneNumber: Yup.string().required("phoneNumber is requierd").matches(/^[0-9]{11}$/, "phoneNumber is not correct"),
        password: Yup.string().required("password is not correct"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'password is not match')
    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    })


    return (
      <div className="background">
          <Box m="30px auto" display="flex" justifyContent="center" pt="200px">
            {/* Contact info */}
            <form onSubmit={formik.handleSubmit} className="form">
                <Box margin="0 auto"
                    display="grid"
                    gridTemplateColumns="repeat(auto-fill, 300px)"
                    justifyContent="space-around"
                    rowGap="20px"
                    columnGap="1.33%">
                    <Box display="flex" alignItems="center" gap="10px" pb="20px">
                        <Typography fontSize="20px" fontWeight="bold">Contact info</Typography>
                        <IconButton fontSize="20px">
                            <LoginIcon />
                        </IconButton>
                    </Box>
                    <TextField
                        fullWidth
                        type="text"
                        label="name"
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        name="name"
                        sx={{ gridColumn: "span 4" ,bgcolor:"#fafafa"}}
                    />
                    {formik.errors.name && formik.touched.name && <Typography color="red">{formik.errors.name}</Typography>}
                    <TextField
                        fullWidth
                        type="lastName"
                        label="lastName"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        name="lastName"
                        sx={{ gridColumn: "span 4",bgcolor:"#fafafa" }}
                    />
                    <TextField
                        fullWidth
                        type="email"
                        label="email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        name="email"
                        sx={{ gridColumn: "span 4",bgcolor:"#fafafa" }}
                    />
                    {formik.errors.email && formik.touched.email && <Typography color="red">{formik.errors.email}</Typography>}
                    <TextField
                        fullWidth
                        type="number"
                        label="phoneNumber"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                        name="phoneNumber"
                        sx={{ gridColumn: "span 4",bgcolor:"#fafafa" }}
                    />
                    {formik.errors.phoneNumber && formik.touched.phoneNumber && <Typography color="red">{formik.errors.phoneNumber}</Typography>}
                    <TextField
                        fullWidth
                        type="password"
                        label="password"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        name="password"
                        sx={{ gridColumn: "span 4",bgcolor:"#fafafa" }}
                    />
                    {formik.errors.password && formik.touched.password && <Typography color="red">{formik.errors.password}</Typography>}
                    <TextField
                        fullWidth
                        type="password"
                        label="confirmPassword"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        name="confirmPassword"
                        sx={{ gridColumn: "span 4",bgcolor:"#fafafa" }}
                    />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword && <Typography color="red">{formik.errors.confirmPassword}</Typography>}
                    <Box display="flex" alignItems="center" fontWeight="bold" mt="10px" justifyContent="space-around">
                        <Button onClick={onSubmit} sx={{fontSize:"15px"}}>Sign in</Button>
                        {error && <Typography color="red">{error}</Typography>}
                        <Button  onClick={() => navigate("/login")}  sx={{fontSize:"15px", fontWeight:"bold"}}>Login in?</Button>
                    </Box>
                </Box>
            </form>
        </Box>
      </div>
    )

}

export default Signup;