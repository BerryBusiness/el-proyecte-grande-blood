import LoginForm from "../Components/LoginForm.jsx";
import Loading from "../Components/Loading";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const fetchUser = (user) => {
    return fetch("/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    }).then((res) => {
            console.log("RES: ", res);
            if (res.ok) {
                return res.json();
            } else {
                console.error("Invalid username or password");
                return false;
            }
        }
    );
};

const LoginPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [appointment, setAppointment] = useState(null);

    const handleLoginUser = (user) => {
        setLoading(true);

        fetchUser(user)
            .then((data) => {
                console.log(data);
                if (!data) {
                    navigate("/")
                    setLoading(false);
                } else {
                    const token = data.token
                    setAppointment(data.id)
                    localStorage.setItem('jwtToken', token);
                    setLoading(false);
                    navigate(`/user/${data.id}`);
                }
            });
    };

    if (loading) {
        return <Loading/>;
    }

    return (
        <LoginForm
            onCancel={() => navigate("/")}
            disabled={loading}
            onSave={handleLoginUser}
        />
    );
};

export default LoginPage;
