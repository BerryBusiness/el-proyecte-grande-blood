import './App.css'
import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import Loading from "./Components/Loading";
import moment from 'moment';
import Header from "./Components/Header.jsx";
import UserContext from "./Pages/UserContext.jsx";
import Button from './Components/Button';
import LinkButton from "./Components/LinkButton.jsx";

const fetchUserById = (id) => {
    const token = localStorage.getItem('jwtToken');
    return fetch(`/api/users/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json());
};

function deleteAppointment(id) {
    const token = localStorage.getItem('jwtToken');
    return fetch(`/api/appointments/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json());
}

const deleteUser = (id) => {
    const token = localStorage.getItem('jwtToken');
    return fetch(`/api/users/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }).then((res) =>
        res.json()
    );
}

function App() {
    const {user, setUser} = useContext(UserContext);
    const {id} = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [appointment, setAppointment] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    if (id && !isLoggedIn) {
        setIsLoggedIn(true);
    }

    useEffect(() => {
        setLoading(true);
        if (id !== undefined) {
            fetchUserById(id)
                .then(({id, name, email, password, role, appointmentDTO}) => {
                    setUser({id, name, email, password, role, appointmentDTO});
                    if (role === "ADMIN") {
                        setIsAdmin(true);
                    }
                    setAppointment(appointmentDTO);
                    setLoading(false);
                });
        }
        setLoading(false);
    }, [id, setUser]);

    if (loading) {
        return <Loading/>;
    }
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div className="outerContainer">
            <div className="headerContainer">
                <Header

                />

                {isLoggedIn && isAdmin &&
                    <div>
                        <LinkButton to="/admin" text="List all users" onClick={handleAdminClick}/>
                        <Link to="/admin" state={{from: `${id}`}}>
                            <button className='adminButton' type="button">List all users</button>
                        </Link>
                    </div>
                }

                {appointment && isLoggedIn &&
                    <div className="message">
                        {`You have a reserved appointment at: ${moment(appointment.appointment).format('YYYY.MM.DD HH:mm')}`}
                    </div>
                }

                {!isLoggedIn &&
                    <div className="buttonContainer">
                        <Link to="/login">
                            <button className='loginButton' type="button">Login</button>
                        </Link>
                        <Link to="/register">
                            <button className='registerButton' type="button">Register</button>
                        </Link>
                    </div>
                }

                {isLoggedIn &&
                    <div className="buttonContainer">
                        <Link to={`/update/${id}`}>
                            <button className='updateButton' type="button">Update Account</button>
                        </Link>
                        <button className='removeButton' type='button' onClick={() => {
                            if (window.confirm("Are you sure you want to delete your account?")) {
                                deleteUser(id)
                                    .then(() => {
                                        setIsLoggedIn(false);
                                        setUser(null);
                                        navigate("/");
                                    })
                            }
                        }}>Remove Account
                        </button>
                    </div>
                }

                {isLoggedIn && !appointment &&
                    <div className="buttonContainer">
                        <Link to={`/calendar/${id}`}>
                            <button className='reservationButton' type="button">Reserve an appointment</button>
                        </Link>
                        <Link to="/">
                            <button className='logoutButton' type="button" onClick={() => {
                                localStorage.removeItem('jwtToken');
                                setUser(null);
                                setAppointment(null);
                                setIsLoggedIn(false);
                            }}>
                                Log Out
                            </button>
                        </Link>
                    </div>
                }

                {appointment && isLoggedIn &&
                    <div className="buttonContainer">
                        <button className='deleteButton' type="button" onClick={() => {
                            setAppointment(null);
                            return deleteAppointment(appointment.id);
                        }}>
                            Delete Appointment
                        </button>
                        <Link to="/">
                            <button className='logoutButton' type="button" onClick={() => {
                                localStorage.removeItem('jwtToken');
                                setUser(null);
                                setAppointment(null);
                                setIsLoggedIn(false);
                            }}>
                                Log Out
                            </button>
                        </Link>
                    </div>
                }
            </div>

            <div className="imageContainer">
                <img src="/NurseTom.png" alt="Nurse 1" className="nurseImage"/>
                <img src="/NurseTom3.png" alt="Nurse 2" className="nurseImage"/>
            </div>
        </div>
    );
}

export default App
