import { useParams } from "react-router-dom";

const Login = () => {
    const {language} = useParams();

    return(
        <>
            <div className="main-page">
                <div className="login-form">
                    <div>
                        <input className="custom-input" type="text" />
                    </div>
                    <div>
                        <input className="custom-input" type="password" />
                    </div>
                    <div>
                        <button className="custom-button">{language == "en" ? "Login" : "Teken in"}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;