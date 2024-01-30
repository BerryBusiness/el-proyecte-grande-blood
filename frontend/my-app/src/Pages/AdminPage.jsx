import {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Loading from "../Components/Loading/index.js";

const fetchUsers = () => {
    const token = localStorage.getItem('jwtToken');
    return fetch("/api/admin", {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json());
}

const AdminPage = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetchUsers()
            .then((users) => {
                setLoading(false);
                setUsers(users);
                console.log(users)
            })
    }, []);

    if (loading) {
        return <Loading/>;
    }

    return (
        <div className="UserTable">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>E-Mail</th>
                    <th>Role</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button className='backButton' type="button" onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
    )
}

export default AdminPage;
