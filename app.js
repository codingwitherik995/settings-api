const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let generalSettings = {
  username: "",
  email: "",
  subscriptionPlan: "",
  darkMode: false,
};
let billingSettings = {
  accountId: "",
  autoBilling: false,
};

// general settings
app.get("/api/settings/general-settings", (req, res) => {
  console.log(req.body);
  res.json({ message: "OK", generalSettings });
});

app.put("/api/settings/general-settings", (req, res) => {
  console.log(req.body);
  generalSettings = {
    ...generalSettings,
    [req.body.field]: req.body.value,
  };
  res.json({ message: "Data updated successfully", generalSettings });
});

// billing settings
app.get("/api/settings/billing-settings", (req, res) => {
  res.json({ message: "OK", billingSettings });
});

app.put("/api/settings/billing-settings", (req, res) => {
  console.log(req.body);
  billingSettings = {
    ...billingSettings,
    [req.body.field]: req.body.value,
  };
  res.json({ message: "Data updated successfully", billingSettings });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
