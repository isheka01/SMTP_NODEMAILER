const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ishekaagarwal14@gmail.com",
    pass: "ytnq flsr fxfl gvls",
  },
});

const sendMail = async (req, res) => {
  try {
    const { to, subject, description } = req.body;

    const info = await transporter.sendMail({
      from: "ishekaagarwal14@gmail.com",
      to,
      subject,
      text: description,
      html: `<b>${description}</b>`,
    });

    console.log("Message sent: %s", info.messageId);
    res.json({ message: info.messageId });
  } catch (error) {
    console.error("Error occurred while sending email:", error);
    res
      .status(500)
      .json({ error: "An error occurred while sending the email" });
  }
};

module.exports = sendMail;
