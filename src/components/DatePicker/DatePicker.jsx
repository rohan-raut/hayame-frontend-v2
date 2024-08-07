import React, { useEffect, useState } from 'react';
import "./datePicker.css";

const DatePicker = ( {FormInputs, setFormInputs}) => {
    const [date, setDate] = useState(new Date());
    const [currMonth, setCurrMonth] = useState(date.getMonth());
    const [currYear, setCurrYear] = useState(date.getFullYear());

    const[currentDate, setCurrentDate] = useState('');

    const[liDaysTag, setLiDaysTag] = useState('');

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
        setCurrentDate(`${months[currMonth]} ${currYear}`);

        renderCalendar();

    }, [currMonth])


    const selectedDate = async (e) => {
        if (e.target.classList.contains('inactive')) {
            return;
        }

        let userSelectedDate = currYear + "-" + (currMonth + 1) + "-" + e.target.textContent;
        setFormInputs((values) => ({ ...values, ['selectedDate']: userSelectedDate }));

        let liElements = e.target.parentNode.childNodes;

        for (let i = 0; i < liElements.length; i++) {
            liElements[i].classList.remove('active');
        }
        e.target.classList.add('active');
    }

    const renderCalendar = () => {
        let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(); // getting first day of month
        let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // getting last date of month
        let liTag = [];

        let liElements = document.querySelector(".days").childNodes;

        for (let i = 0; i < liElements.length; i++) {
            liElements[i].classList.remove('active');
        }

        for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
            liTag.push(<li className="inactive"></li>);
        }

        for (let i = 1; i <= lastDateofMonth; i++) {
            // adding active class to li if the current day, month, and year matched
            let classname = "";
            if (currYear < new Date().getFullYear() || currMonth < new Date().getMonth()) {
                classname = "inactive";
            }
            else if (i < date.getDate() && currMonth == new Date().getMonth()) {
                classname = "inactive";
            }

            // liTag += `<li className="${classname}" onClick="${selectedDate}">${i}</li>`;
            liTag.push(<li className={classname} onClick={selectedDate}>{i}</li>)
        }

        setLiDaysTag(liTag);
        setCurrentDate(`${months[currMonth]} ${currYear}`);
    }


    


    const changeMonth = async (e) => {
        let elementId = e.target.id;

        if (elementId === "prev") {
            if((currMonth - 1) < 0){
                setCurrMonth(11);
                setCurrYear(currYear - 1);
            }
            else{
                setCurrMonth(currMonth - 1);
                setDate(new Date());
            }
        }
        else {
            if((currMonth + 1) > 11){
                setCurrMonth(0);
                setCurrYear(currYear + 1);
            }
            else{
                setCurrMonth(currMonth + 1);
                setDate(new Date());
            }
        }

    }



    return (
        <div className="calendar-wrapper">
            <div className="calendar-header">
                <p className="current-date p-0 m-0">{currentDate}</p>
                <div className="icons">
                    <span id="prev" className="material-symbols-rounded" onClick={changeMonth}>chevron_left</span>
                    <span id="next" className="material-symbols-rounded" onClick={changeMonth}>chevron_right</span>
                </div>
            </div>
            <div className="calendar-section">
                <ul className="weeks">
                    <li>Sun</li>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                </ul>
                {/* <ul className="days" dangerouslySetInnerHTML={{__html: liDaysTag}}></ul> */}
                <ul className="days">{liDaysTag}</ul>
            </div>
        </div>
    )
}

export default DatePicker