import { Box,Button,TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";


const initialValues = {
    firstName:"",
    lastName:"",
    email:"",
    //password:"1234abcd",
    contact:"",
    address1:"",
    address2:"",
}
//more validation for contacts
const phoneRegExp  = /^\+94?[-. ]?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;



//yup provide premade validation
const userSchema=yup.object().shape({
    firstName:yup.string(),
    lastName:yup.string(),
    email:yup
    .string()
    .email("invalid email")
    ,
   // password: yup.string()
   // .required('No password provided.') 
    // .min(8, 'Password is too short - should be 8 chars minimum.')
    // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    contact:yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid"),
    address1:yup.string(),
    address2:yup.string(),
    

});



const Form = () =>{
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleFormSubmit = (values) => {
        console.log(values);
    }


    return(
        <Box m="20px">
        <Header 
        title="CREATE USER"
        subtitle="Create a New User Profile"
    />

    <Formik
    onSubmit={handleFormSubmit}
    initialValues={initialValues}
    validationSchema={userSchema}
    >{({
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit
    }) => (
        <form onSubmit={handleSubmit}>
            <Box 
            display="grid" 
            gap="30px" 
            gridTemplateColumns="repeat(4,minmax(0,1fr))"/*Fractional units for girds:1fr says each of column can have 1 fraction*/
            sx={{
                "& > div": {gridColumn: isNonMobile ? undefined : "span 4"}
            }}>

                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{
                    gridColumn: "span 2"
                }}/>

                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{
                    gridColumn: "span 2"
                }}/>

                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{
                    gridColumn: "span 4"
                }}/>


{
    /*
                    <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{
                    gridColumn: "span 4"
                }}/>



    */
}

                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{
                    gridColumn: "span 4"
                }}/>

                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{
                    gridColumn: "span 4"
                }}/>

                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{
                    gridColumn: "span 4"
                }}/>



            </Box>







            <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                    Update Profile
                </Button>
            </Box>
        </form>




    )}

    </Formik>
        



    </Box>
    );

};

export default Form;