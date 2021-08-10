const CHAT_ID = -589830502;
const TELEGRAM_API_TOKEN = "1888977560:AAEKNAKWBdF0b-JPxhUlhcatFb6lLPedaww";

function sendNotification(message) {
  return fetch(
    `https://api.telegram.org/bot${TELEGRAM_API_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}`
  );
}

export default sendNotification;
