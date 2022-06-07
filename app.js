
setInterval(() => {
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();

    hour_hand_rotaion = 30*htime + mtime/2;
    mint_hand_rotaion = 6*mtime;
    sec_hand_rotaion = 6*stime;

    hour_hand.style.transform = `rotate(${hour_hand_rotaion}deg)`;
    min_hand.style.transform = `rotate(${mint_hand_rotaion}deg)`;
    sec_hand.style.transform = `rotate(${sec_hand_rotaion}deg)`;

}, 1000);