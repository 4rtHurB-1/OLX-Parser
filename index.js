const cron = require('node-cron');
const express = require('express')
const {spawn} = require('child_process');

const app = express();
const port = 3000;

// cron.schedule('* * * * *', () => {
//     console.log('Run olx_pars.py');

//     const python = spawn('python', ['olx_pars.py']);

//     python.on('close', (code) => {
//         console.log(`End running olx_pars.py ${code}`);
//     });
// });

app.get('/', (req, res) => {
    const python = spawn('python', ['olx_pars.py']);

    python.on('close', (code) => {
        console.log(`End running olx_pars.py ${code}`);
    });

    res.send('it works!');
});

app.listen(port, () => console.log(`Start server at ${port}`));