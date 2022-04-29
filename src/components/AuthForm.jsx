import React from 'react';
import { Link } from 'react-router-dom';

const AuthForm = ({ children, authLabel, authType, welcomeMessage, disAbleWelcome }) => {
    const pTagLabel = authType==="login" ? "Don't have an Account?" : "Already have an Account?"
    const linkTagLabel = authType==="login" ? "Sign up" : "Login"
    const linkTo = authType==="login" ? "/signup" : "/login"

    return (
      <div className="form">
        {!disAbleWelcome && <h3 className="form_welcome">{welcomeMessage}</h3>}
        <div className="form-body">
          <h3 className="auth_header" style={disAbleWelcome && {fontSize: "2rem", marginBottom: "2rem", color: "#616161"}}>{authLabel}</h3>
          {children}
          <div className="login-signup">
            <p className="">{pTagLabel}</p>
            <Link to={linkTo}>{linkTagLabel}</Link>
          </div>
        </div>
      </div>
    );
};

export default AuthForm;