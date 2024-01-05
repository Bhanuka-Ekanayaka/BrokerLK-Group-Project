function Validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(a-zA-Z0-9){8,}$/
    const mobile_pattern = /^\d{10}$/

    if(values.email === "") {
        error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email didn't match"
    }else{
        error.email =""
    }

    if(values.name === "") {
        error.name = "Name should not be empty"
    }else{
        error.name =""
    }

    if(values.mobile === "") {
        error.mobile = "Mobile number should not be empty"
    }
    else if(!mobile_pattern.test(values.mobile)) {
        error.mobile = "Mobile number didn't match"
    }else{
        error.mobile =""
    }

    if(values.password === ""){
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password didn't match"
    }else{
        error.password = ""
    }
    return error;
}

export default Validation