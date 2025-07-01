console.log("Enter functions");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  console.log("Enter functions");
  const { name, email } = JSON.parse(event.body);

  const msg = {
    to: email,
    from: 'infantraj3211@gmail.com',
    subject: 'Thanks for contacting us!',
    text: `Event Title: Cybersecurity Awareness for SMEs – Path to Cyber Essentials
\nDate: Friday, August 01, 2025
\nTime: 14:00 – 17:00
\nVenue: #01-05/06, Lobby 1, Alexandra Technopark Tower A, 119967.
\nOrganized by: Evvo Labs & Singapore Manufacturing Federations
\nEndorsed by: Cyber Security Agency of Singapore
\nFee: Complimentary (Pre-registration Required)`
  };
console.log("Enter",msg);
  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Acknowledgment email sent!" })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email", error: error.message })
    };
  }
};
