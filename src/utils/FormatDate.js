export default function formatDate(date) {
    // input date format is yyyy-mm-dd

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let dateSplit = date.split('-');
    let month = parseInt(dateSplit[1]);
    let monthName = months[month-1];
    let year = parseInt(dateSplit[0]);
    let day = parseInt(dateSplit[2]);

    date = day + ' ' + monthName + ' ' + year;
    return date;
}