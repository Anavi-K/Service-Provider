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

const PORT = process.env.PORT || 6000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Notifier service running on port ${PORT}`);
});

