import React from 'react';
import Layout from "../Layouts/Layouts";
import { useLocation } from 'react-router-dom';
import Completed from "../Completed.PNG";


export default function ThankYou() {
    const location = useLocation();
    const { firstName, lastName } = location.state;
    const reservationNumber = Math.floor(1000 + Math.random() * 9000); // Generate 4-digit random number

    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto text-center py-24">
                    <h1 className="text-3xl font-medium text-gray-900 mb-4">Thank You for Your Order!</h1>
                    <p className="text-xl text-gray-700">Thank you, {firstName} {lastName}, for your purchase!</p>
                    <p className="text-lg text-gray-600 mt-2">Reservation Number: #{reservationNumber}</p>
                    <div className="flex justify-center mt-4">
                    <img src={Completed} className="h-20 w-50" alt="" />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
