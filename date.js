module.exports = getDate;

function getDate(){
    let today = new Date();
    let currentDay = today.getDay();
    let day = "";
    let dateFormat = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    day = today.toLocaleDateString("en-US", dateFormat);
    return day;
}