// import React from "react";
// import { FormButton, FormInput } from "./Form";
// import "../../styles/form/form.css";

// const Signup1 = ({ onNext, onHandleChange, textInput, errors }) => {
  
//   return (
//     <div className="form">
//       <h3 className="form_welcome">Welcome to eShop</h3>
//       <div className="form-body col">
//         <h3 className="auth_header">Sign up</h3>
//         <div className="form-body_details">
//           <FormInput
//             type="text"
//             name="firstname"
//             w="100%"
//             ph={"firstname"}
//             textInput={textInput}
//             errors={errors}
//             onHandleChange={onHandleChange}
//           />
//           <FormInput
//             type="text"
//             name="lastname"
//             w="100%"
//             ph={"lastname"}
//             textInput={textInput}
//             errors={errors}
//             onHandleChange={onHandleChange}
//           />
//           <FormInput
//             type="text"
//             name="username"
//             w="100%"
//             ph={"username"}
//             textInput={textInput}
//             errors={errors}
//             onHandleChange={onHandleChange}
//           />
//         </div>
//         <div className="form_action-btn">
//            <FormButton label="Next" w="50%" onNext={onNext} disabled={false} type={'submit'}/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup1;






// import React from "react";
// import { FormButton, FormInput } from "./Form";
// import "../../styles/form/form.css";

// const Signup2 = ({ onNext, onPrev, onHandleChange, textInput, errors }) => {
//   return (
//     <div className="form">
//       <h3 className="form_welcome">Welcome to eShop</h3>
//       <div className="form-body">
//         <h3 className="auth_header">Sign up</h3>
//         <div className="form-body_details">
//           <FormInput 
//             type="text" 
//             name="city" 
//             w="100%" 
//             ph={"City"} 
//             textInput={textInput}
//             errors={errors}
//             onHandleChange={onHandleChange}
//           />
//           <FormInput 
//             type="number" 
//             name="number" 
//             w="30%" 
//             ph={"Street no"} 
//             textInput={textInput}
//             errors={errors}
//             onHandleChange={onHandleChange}
//           />
//           <FormInput 
//             type="text" 
//             name="street" 
//             w="68%" 
//             ph={"Street Address"} 
//             textInput={textInput}
//             errors={errors}
//             onHandleChange={onHandleChange}
//           />
//           <FormInput 
//             type="text" 
//             name="zipcode"
//             w="100%" 
//             ph={"Zip code"} 
//             textInput={textInput}
//             errors={errors}
//             onHandleChange={onHandleChange}
//             />
//         </div>
//         <div className="form_action-btn form_action-btns">
//           <FormButton label="Back" w="49%" onPrev={onPrev} />
//           <FormButton label="Next" w="49%" onNext={onNext} disabled={false} type={'submit'}/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup2;





// import React from 'react';
// import { FormButton, FormInput } from './Form';
// import "../../styles/form/form.css"


// const Signup3 = ({ onPrev, onHandleChange, textInput, errors, onHandleSubmit, validate }) => {

//     return (
//       <form className="form">
//         <h3 className="form_welcome">Welcome to eShop</h3>
//         <div className="form-body">
//           <h3 className="auth_header">Sign up</h3>
//           <div className="form-body_details">
//           <FormInput
//               type="text"
//               name="phone"
//               w="100%"
//               ph={"Phone (e.g: 08099999999)"}
//               textInput={textInput}
//               errors={errors}
//               onHandleChange={onHandleChange}
//             />
//             <FormInput
//               type="text"
//               name="email"
//               w="100%"
//               ph={"Email"}
//               textInput={textInput}
//               errors={errors}
//               onHandleChange={onHandleChange}
//             />
//             <FormInput
//               type="password"
//               name="password"
//               w="100%"
//               ph={"Password"}
//               textInput={textInput}
//               errors={errors}
//               onHandleChange={onHandleChange}
//             />
//             <FormInput
//               type="password"
//               name="confirmPassword"
//               w="100%"
//               ph={"Confirm Password"}
//               textInput={textInput}
//               errors={errors}
//               onHandleChange={onHandleChange}
//             />
//           </div>
//           <div className="form_action-btn form_action-btns">
//             <FormButton label="Back" w="49%" onPrev={onPrev}/>
//             <FormButton label="Done" w="49%" submit={onHandleSubmit} validate={validate}/>
//           </div>
//         </div>
//       </form>
//     );
// };

// export default Signup3;