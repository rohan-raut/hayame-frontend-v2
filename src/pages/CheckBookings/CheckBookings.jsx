import React, { useEffect, useState, useContext } from 'react'
import { Space, Table, Tag } from 'antd';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import AuthContext from '../../context/AuthContext';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import formatDate from "./../../utils/FormatDate";
import formatTime from "./../../utils/FormatTime";
import { Helmet } from 'react-helmet';

const CheckBookings = () => {
    const [tableData, setTableData] = useState();

    let { authTokens } = useContext(AuthContext);

    const navigate = useNavigate();

    const sortByDate = (rowA, rowB) => {
        const a = rowA.start_date;
        const b = rowB.start_date;

        if(a > b){
            return 1;
        }
        if(b > a){
            return -1;
        }
        return 0;
    }

    const columns = [
        {
            name: 'Booking ID',
            selector: row => row.booking_id,
        },
        {
            name: 'Address',
            selector: row => <a href={"https://www.google.com/maps/search/" + (row.address).replaceAll(" ", "+")} target='_blank'>{row.address}</a>,
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
            selector: row => formatDate(row.start_date),
            sortable: true,
            sortFunction: sortByDate,
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
            cell: (row) => <button onClick={() => navigate('/allocate-workers', { state: { skill: row.skill, bookingId: row.id } })}>Details</button>
        }
    ];


    const getTableData = async () => {
        let response = await fetch('https://django.hayame.my/api/check-bookings/', {
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
            <Helmet>
                <title>Check Bookings - Hayame</title>
                <link rel="canonical" href="/check-bookings" />
                <meta name="robots" content="noindex" />
            </Helmet>

            <Navbar />
            <div className="row mx-0 my-5 justify-content-center">
                <div className="col-11 col-sm-11 col-md-11 col-lg-10">
                    <DataTable columns={columns} data={tableData} defaultSortFieldId={5} pagination />
                </div>
            </div>

        </div>
    )
}

export default CheckBookings