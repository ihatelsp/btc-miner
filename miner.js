const express = require('express');
const BitcoinMiner = require('bitcoin-mining');
const app = express();
const port = 3000;

const miner = new BitcoinMiner({
    pool: 'stratum+tcp://stratum.braiins.com:3333',
    username: 'kiyasha.workerName',
    password: 'anything123'
});

app.get('/', (req, res) => {
    res.send('Bitcoin Miner is running!');
});

app.get('/start', (req, res) => {
    miner.start();
    res.send('Mining started!');
});

app.get('/stop', (req, res) => {
    miner.stop();
    res.send('Mining stopped!');
});

app.listen(port, () => {
    console.log(`Miner listening at http://localhost:${port}`);
});
