import React, { useEffect, useState, useContext } from 'react'
import { Space, Table, Tag } from 'antd';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import AuthContext from '../../context/AuthContext';


const BookingHistory = () => {
    const [tableData, setTableData] = useState();

    let { authTokens } = useContext(AuthContext);

    const columns = [
        {
            title: 'Booking ID',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>,
            width: '10%'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            width: '20%'
        },
        {
            title: 'Property Type',
            dataIndex: 'property_type',
            key: 'property_type',
            width: '10%'
        },
        {
            title: 'Frequency',
            dataIndex: 'frequency',
            key: 'frequency',
            width: '10%'
        },
        {
            title: 'Start Date',
            dataIndex: 'start_date',
            key: 'start_date',
            width: '10%'
        },
        {
            title: 'Start Time',
            dataIndex: 'start_time',
            key: 'start_time',
            width: '10%'
        },
        {
            title: 'Hours',
            dataIndex: 'no_of_hours',
            key: 'no_of_hours',
            width: '10%'
        },
        {
            title: 'Total Cost',
            dataIndex: 'total_cost',
            key: 'total_cost',
            width: '10%'
        }
    ];

    const getTableData = async() => {
        let response = await fetch('https://djangotest.hayame.my/api/booking-history/', {
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
            <Navbar />
            <div className="row mx-0 my-5 justify-content-center">
                <div className="col-11 col-sm-11 col-md-11 col-lg-10">
                    <Table columns={columns} dataSource={tableData} scroll={{x: 1000,}} />
                </div>
            </div>

        </div>
    )
}

export default BookingHistory