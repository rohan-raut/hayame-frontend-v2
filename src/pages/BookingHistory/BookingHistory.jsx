import React, { useEffect, useState, useContext } from 'react'
import { Space, Table, Tag } from 'antd';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import AuthContext from '../../context/AuthContext';
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import formatDate from "../../utils/FormatDate";
import formatTime from "../../utils/FormatTime";
import { Helmet } from 'react-helmet';


const BookingHistory = () => {
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
            grow: 3,
        },
        {
            name: 'Service',
            selector: row => row.skill,
        },
        {
            name: 'Frequency',
            selector: row => row.frequency,
        },
        {
            name: 'Start Date',
            selector: row => formatDate(row.start_date),
        },
        {
            name: 'Start Time',
            selector: row => formatTime(row.start_time),
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
            cell: (row) => <button onClick={() => navigate('/booking-details', { state: { skill: row.skill, bookingId: row.id } })}>Details</button>
        }
    ];


    const getTableData = async() => {
        let response = await fetch('https://django.hayame.my/api/booking-history/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authTokens, 
            },
        })
        let data = await response.json()

        console.log(data)
        setTableData(data);
    }

    useEffect(() => {
        getTableData();
    }, []);


    return (
        <div>
            <Helmet>
                <title>Booking History - Hayame</title>
                <link rel="canonical" href="/booking-history" />
                <meta name="robots" content="noindex" />
            </Helmet>

            <Navbar />
            <div className="row mx-0 my-5 justify-content-center">
                <div className="col-11 col-sm-11 col-md-11 col-lg-10">
                    <DataTable columns={columns} data={tableData} pagination />
                </div>
            </div>

            <SocialMediaIcons />
        </div>
    )
}

export default BookingHistory