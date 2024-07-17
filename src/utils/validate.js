// // export const checkValidData=(email, password) =>{
// //     const isValidEmail = ^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$.test(email);
// //     // return regex.test(email);
// //     const isValidPassword = ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$.text(password);
// //     if(!isValidEmail) return "This email  id is not valid";
// //     if(!isValidPassword) return "your password is not valid";
// //     return null;

// // }
// export const checkValidData = (email, password) => {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  
//     const isValidEmail = emailRegex.test(email);
//     const isValidPassword = passwordRegex.test(password);
  
//     if (!isValidEmail) {
//       return "This email is not valid";
//     }
//     if (!isValidPassword) {
//       return "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one digit.";
//     }
  
//     return null;
//   };
  
//   export const validateName = (name) => {
//     // Ensure name is not empty
//     if (!name || name.trim() === '') {
//       return "Name is required";
//     }
  
//     // Allow letters, spaces, and hyphens
//     const regex = /^[A-Za-z\s-]+$/;
//     if (!regex.test(name)) {
//       return "Name can only contain letters, spaces, and hyphens";
//     }
  
//     // Return null if name is valid
//     return null;
//   };
export const checkValidData = (name, email, password) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    // const regex = /^[A-Za-z\s-]+$/;
    // if (!regex.test(name)) {
    //   return "Name can only contain letters, spaces, and hyphens";
    // }
  
    // const isValidName = regex.test(name);
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = passwordRegex.test(password);
  
   
    if (!isValidEmail) {
      return "This email is not valid";
    }
    if (!isValidPassword) {
      return "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one digit.";
    }
  
    return null;
  };
  
//   const validateName = (name) => {
//     // Ensure name is not empty
//     if (!name || name.trim() === '') {
//       return "Name is required";
//     }
    // if ( !name) {
    //   return "Name is required";
    // }
  
    // Allow letters, spaces, and hyphens
   
  
    // Return null if name is valid
//     return null;
//   };
  