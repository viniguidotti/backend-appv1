const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./app/controllers')(app);

const PORT = process.env.PORT;
if (PORT) {
    app.listen(PORT, () => {
        console.log(`The app is running on port ${ PORT }`);
    });
} else {
    app.listen(3000);
    console.log("The app is running on port 3000")
}