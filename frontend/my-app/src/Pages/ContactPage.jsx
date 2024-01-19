import React from 'react';
import Header from "../Components/Header.jsx";

const ContactPage = () => {
    return (
        <>
        <Header/>

        <div className="container my-5">
            <h1 className="text-center mb-4">IMF REDLABS LAB SERVICES</h1>
            <div className="row">
                <div className="col-md-6">
                    <h3>Contact Information</h3>
                    <p className="my-5"><strong>Address:</strong> 1234 Lab Street, Science City, 98765</p>
                    <p><strong>Opening Hours:</strong> Mon-Fri 9:00 AM - 5:00 PM</p>
                    <p><strong>Phone:</strong> +1 234-567-8900</p>
                    <p><strong>Mail:</strong> <a href="mailto:dummy@imf.com">dummy@imf.com</a></p>
                </div>
                <div className="col-md-6">
                    <h3>Location</h3>
                    {/* Replace with actual map embed or iframe */}
                    <div className="border" style={{height: '300px'}}>
                        Map Placeholder
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ContactPage;
