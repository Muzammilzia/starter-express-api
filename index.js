const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000; // Replace with your desired port

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// POST endpoint to receive data and send an email
app.post("/send-email", (req, res) => {
  try {
    // Stringify the request body
    const requestBodyString = JSON.stringify(req.body, null, 2);

    // Configure Nodemailer with your email credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "muzzammilzia20@gmail.com",
        pass: "kmnz dita mbtj oygc",
      },
    });

    // Define the email options
    const mailOptions = {
      from: "muzzammilzia20@gmail.com",
      to: "muzzammilzia20@gmail.com",
      subject: "stringified body",
      text: `Received data:\n${requestBodyString}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Internal Server Error");
      } else {
        console.log("Email sent:", info.response);
        res
          .status(200)
          .json({
            message: `Email processed successfully ${req.body.ticket_id}`,
          });
      }
    });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/", (req, res) => {
  console.log("Just got a request!");
  res.send("CHECKED!!!!!!!!!!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
