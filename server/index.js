const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());

const PORT = 3000;
app.use(cors());
const smtpRoute = require("./routes/smtp");
app.use("/send-email", smtpRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
