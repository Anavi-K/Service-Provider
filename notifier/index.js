const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/notify", (req, res) => {
  const { city, temp } = req.body;
  if (temp > 35) {
    console.log(`🔥 Heat alert for ${city}! Temperature is ${temp}°C`);
  } else {
    console.log(`Weather normal in ${city}: ${temp}°C`);
  }
  res.status(200).send("Notification received");
});

app.listen(6000, () => {
  console.log("Notifier service running on port 6000");
});
