import './App.css'
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import Loading from "./Components/Loading";
import moment from 'moment';
import Header from "./Components/Header.jsx";
import UserContext from "./Pages/UserContext.jsx";
import Button from './Components/Button';
import LinkButton from "./Components/LinkButton.jsx";
import Card from "./Components/Card.jsx";

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
    const location = useLocation();
    const currentPath = location.pathname;

    const [loading, setLoading] = useState(false);
    const [appointment, setAppointment] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

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
    const handleDeleteAppointmentClick = () => {
        setAppointment(null);
        return deleteAppointment(appointment.id);
    };

    return (
        <div className="outerContainer">
            <div className="headerContainer">
                <Header
                    isAdmin={isAdmin}
                    appointment={appointment}
                    id={id}
                />

                {appointment && user &&
                    <div className="message">
                        {`You have a reserved appointment at: ${moment(appointment.appointment).format('YYYY.MM.DD HH:mm')}`}
                    </div>
                }

                {user && !appointment &&
                    <div className="buttonContainer">
                        <LinkButton to={`/calendar/${id}`} text="Reserve an appointment"/>
                    </div>
                }

                {appointment && user &&
                    <div className="buttonContainer">
                        <Button text="Delete Appointment" onClick={handleDeleteAppointmentClick}/>
                    </div>
                }
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        { <Card
                            imgurl={"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFib3JhdG9yeXxlbnwwfHwwfHx8MA%3D%3D"}
                            text={"Over 300 tests"}
                        />}
                    </div>
                    <div className="col-md-4">
                        { <Card
                            imgurl={"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFib3JhdG9yeXxlbnwwfHwwfHx8MA%3D%3D"}
                            text={"Over 300 tests"}
                        />}
                    </div>
                    <div className="col-md-4">
                        { <Card
                            imgurl={"https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFib3JhdG9yeXxlbnwwfHwwfHx8MA%3D%3D"}
                            text={"Over 300 tests"}
                        />}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App
