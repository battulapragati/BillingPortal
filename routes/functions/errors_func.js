function errors_func(name, email, password, password2) {

let errors = [];
  
  
  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }
  if(adminpassword != "Admin@123"){
    errors.push({ msg: 'Admin Password is Incorrect' });
  }

  return errors;

}

module.export = errors_func;