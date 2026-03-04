import React from 'react';
import Header from '../components/Header';
import DepartureBoard from '../components/DepartureBoard';

interface DashboardProps {
    title?: string;
}

const Dashboard: React.FC<DashboardProps> = () => {
    return (
        <div className="h-full w-full">
            <Header />
            <DepartureBoard />
        </div>
    );
};

export default Dashboard;