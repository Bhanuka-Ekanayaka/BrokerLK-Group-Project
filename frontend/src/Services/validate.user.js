const validateUser = (formData) => {
  const errors = {
    username: '',
    email: '',
    jobrole: '',
  };


  if (!formData.username ) {
    errors.username = 'Username is required *';
}


  if (!formData.email) {
      errors.email = 'Email is required *';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
  }

  if (!formData.jobrole) {
      errors.jobrole = 'jobrole is required *';
  }


  return errors;
};

export default validateUser;