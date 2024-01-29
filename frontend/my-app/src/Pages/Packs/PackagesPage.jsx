import { Link } from "react-router-dom";
import "./PackagesPage.css";
import React, {useEffect, useState} from "react";
import Loading from "../../Components/Loading/index.js";
import Header from "../../Components/Header.jsx";


const fetchPackagesAll = () => {
    return fetch("/api/packages").then((res) => res.json());
};


const PackagesPage = () => {
    const [packages, setPackages] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchPackagesAll()
            .then(response => {
                setPackages(response);
                setLoading(false);
                console.log(packages[0].elem);
            })
            .catch(error => {
                console.error('Error fetching packages:', error);
                setLoading(false);
            });
    }, []);


    if (loading) {
    return <Loading/>;
}
    return (
        <>
        <Header/>
    <div className="PanelTable">
        <table  className="table table-striped table-hover table-responsive">
            <thead>
            <tr>
                <th>Vizsgálati Elemek</th>
                <th>Vizsgálati Csoport</th>
                <th>Egységár</th>
                <th>Elkészülési idő</th>
                <th />
            </tr>
            </thead>
            <tbody>
            {packages && packages.map((pkg) => (
                <tr key={pkg.id}>
                    <td>{pkg.elem}</td>
                    <td>{pkg.area}</td>
                    <td>{pkg.price}</td>
                    <td>{pkg.result}</td>
                    {/* <td>
              <Link to={`/update/${pkg._id}`}>
                <button type="button">Update</button>
              </Link>
              <button type="button" onClick={() => onDelete(pkg._id)}>
                Delete
              </button>
            </td> */}
                </tr>
            ))}
            </tbody>
        </table>
    </div>
        </>
)
};

export default PackagesPage;
