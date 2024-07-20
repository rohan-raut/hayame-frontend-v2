import React, { useEffect, useState, useContext } from 'react'
import { Space, Table, Tag } from 'antd';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import AuthContext from '../../context/AuthContext';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

const CheckBookings = () => {
    const [tableData, setTableData] = useState();

    let { authTokens } = useContext(AuthContext);

    const navigate = useNavigate();

    const columns = [
        {
            name: 'Booking ID',
            selector: row => row.booking_id,
        },
        {
            name: 'Address',
            selector: row => row.address,
        },
        {
            name: 'Customer Name',
            selector: row => row.customer_name,
        },
        {
            name: 'Customer Phone',
            selector: row => row.customer_phone,
        },
        {
            name: 'Start Date',
            selector: row => row.start_date,
        },
        {
            name: 'Start Time',
            selector: row => row.start_time,
        },
        {
            name: 'Hours',
            selector: row => row.no_of_hours,
        },
        {
            name: 'Total Cost',
            selector: row => row.total_cost,
        },
        {
            name: 'Actions',
            button: true,
            cell: (row) => <button onClick={() => navigate('/allocate-workers', { state: { skill: row.skill, bookingId: row.id } })}>Details</button>
        }
    ];


    const getTableData = async () => {
        let response = await fetch('https://djangotest.hayame.my/api/check-bookings/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authTokens,
            },
        })
        let data = await response.json()
        console.log(data);

        setTableData(data);
    }

    useEffect(() => {
        getTableData();
    }, []);


    return (
        <div>
            <Navbar />
            <div className="row mx-0 my-5 justify-content-center">
                <div className="col-11 col-sm-11 col-md-11 col-lg-10">
                    <DataTable columns={columns} data={tableData} />
                </div>
            </div>

        </div>
    )
}

export default CheckBookings