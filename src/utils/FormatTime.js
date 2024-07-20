export default function formatTime(time) {
    // input time format is HH:MM:SS

    let hr = time[0] + time[1];
    let mn = time[3] + time[4];
    let new_time = "" + (parseInt(hr) % 12) + ":" + mn;
    if (parseInt(hr) % 12 === 0) {
      new_time = "12" + ":" + mn;
    }
    if (parseInt(hr) >= 12) {
      new_time += " PM";
    }
    else {
      new_time += " AM";
    }

    return new_time;
}