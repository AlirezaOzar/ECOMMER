import { Box, Typography, TextField, IconButton, Button } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router-dom";
import  {useFormik}  from "formik";
import * as Yup from "yup";

const initialValues = {
    name:"",
    lastName:"",
    email: "",
    phoneNumber: "",
    password:"",
    confirmPassword:"",
}

const Login = () => {
    const navigate = useNavigate();
    
    const onSubmit = (values) => {
        console.log(values)
    }
    const validationSchema = Yup.object({
        email: Yup.string().email("email is not correct").required("email is requierd").matches(/^(?!.*@[^,]*,)/),
        password: Yup.string().required("password is not correct")
    })
    const formik = useFormik({
     initialValues,
     onSubmit,
     validationSchema,
     validateOnMount:true,
    })
  
    return (
       <div className="background">
         <Box m="30px auto" width="100%" height="538px" pt="200px">
            {/* Contact info */}
          <form className="form">
          <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                <Box display="flex" alignItems="center" gap="10px" pb="20px">
                    <Typography fontSize="20px" fontWeight="bold">Contact info</Typography>
                    <IconButton fontSize="20px">
                      <LoginIcon/>
                    </IconButton>
                </Box>
                <TextField
                    fullWidth
                    type="text"
                    label="Email"
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                    sx={{ gridColumn: "span 4", marginBottom: "15px", maxWidth: "400px",bgcolor:"#fafafa"  }}
                />
                {formik.errors.email && formik.touched.email && <Typography color="red">{formik.errors.email}</Typography>}
                <TextField
                    fullWidth
                    type="password"
                    label="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    name="password"
                    sx={{ gridColumn: "span 4", marginBottom: "15px", maxWidth: "400px",bgcolor:"#fafafa" , borderRadius:"10px" }}
                />
                 {formik.errors.password && formik.touched.password && <Typography color="red">{formik.errors.password}</Typography>}
                  <Button sx={{fontWeight:"bold", fontSize:"15px", mt:"10px"}} onClick={() => navigate("/signup")}>Sign in?</Button>
            </Box>
          </form>
        </Box>
       </div>
    );
}

export default Login;