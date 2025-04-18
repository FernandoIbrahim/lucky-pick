const express = require('express');
const cors = require('cors');
const PORT = 8080;

const authRouter = require('./router/auth.router');
const matchRouter = require('./router/match.router');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter); 
app.use('/api/matches', matchRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});