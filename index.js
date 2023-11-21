const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const sdk = require("api")("@gorgias-developers/v1.0#eqij32lm98inij");

const app = express();
const port = 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// POST endpoint to receive data and send an email
// app.post("/send-email", (req, res) => {
//   try {
//     // Stringify the request body
//     // const requestBodyString = JSON.stringify(req.body, null, 2);

//     // Configure Nodemailer with your email credentials
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "muzzammilzia20@gmail.com",
//         pass: "kmnz dita mbtj oygc",
//       },
//     });

//     // Define the email options
//     const mailOptions = {
//       from: "muzzammilzia20@gmail.com",
//       to: "muzzammilzia20@gmail.com",
//       subject: "stringified body",
//       text: `Received data:\n${req.body}`,
//     };

//     // Send the email
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error("Error sending email:", error);
//         res.status(500).send("Internal Server Error");
//       } else {
//         console.log("Email sent:", info.response);
//         res.status(200).json({
//           message: `Email processed successfully ${req.body.ticket_id}`,
//         });
//       }
//     });
//   } catch (error) {
//     console.error("Error processing request:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

app.post("/send-email", (req, res) => {
  try {
    let resData;
    sdk.auth(
      "p3v1tml8@duck.com",
      "e4fdf9a8ce47d91eac0902a2cc079d04001214bc01f120d67914306ffaa75af1"
    );
    sdk
      .getApiTicketsId({ id: req.body.ticket_id })
      .then(({ data }) => (resData = data))
      .catch((err) => console.error(err));

    // const formatedText = req.body.messages.map((item, index) => {
    //   return {
    //     role: item.from_agent ? "agent" : "customer",
    //     content: item.body_text,
    //   };
    // });
    // Stringify the request body
    // const requestBodyString = JSON.stringify(req.body, null, 2);

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
      text: `Received data:\n${resData}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Internal Server Error");
      } else {
        console.log("Email sent:", info.response);
        res.status(200).json({
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
