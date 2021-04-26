const express = require('express')
const https = require('https');
const {spawn} = require('child_process');
const cron = require('node-cron');

const notifyError = (message) => {
    const BOT_TOKEN = '1723101065:AAGsRxTnFo8jPZvlHR9IwHxhD44xb-Lkto8';
    const CHAT_ID = '-1001359009051';
    const telApi  = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}`

    https.get(telApi).on("error", (err) => {
        console.log(`${new Date().toISOString()}: 'notifyError' failed: ${err.message}`);
    });
}

const runParser = () => {
    try {
        console.log(`${new Date().toISOString()}: Start running olx_pars.py`);

        const python = spawn('python3', ['olx_pars.py']);

        python.on('close', (code) => {
            console.log(`${new Date().toISOString()}: End running olx_pars.py ${code}`);
        });
    } catch (e) {
        let message = `${new Date().toISOString()}: Error running olx_pars.py: ${e.message}`;
        console.log(message);
        notifyError(message);
    }
}

const app = express();
const port = 3030;

cron.schedule('* * * * *', () => runParser());

app.get('/', (req, res) => {
    runParser();
    res.send('it works!');
});

app.listen(port, () => console.log(`${new Date().toISOString()}: Start server at ${port}`));