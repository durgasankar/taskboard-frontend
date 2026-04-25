import React from 'react'
import { Navigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('token');
    if (!isAuthenticated) {
        return <Navigate to='/signin' replace />
    }
    return (

        <div className="app-container">
            <Header />
            <main className="app-body">
                { children }
            </main>
            <Footer />
        </div>

    )
}

export default ProtectedRoute;
