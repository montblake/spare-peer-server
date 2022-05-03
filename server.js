require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.get('/', (req,res)=>{
    res.send('this is the peer server');
});

const expressServer = app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});

const { ExpressPeerServer } = require('peer');
const peerServer = new ExpressPeerServer(expressServer, {
    path: '/'
});

app.use('/peerjs', peerServer);
