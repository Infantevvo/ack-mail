console.log("Enter functions");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  console.log("Enter functions");
  const { name, email, message } = JSON.parse(event.body);

  const msg = {
    to: email,
    from: 'infantraj3211@gmail.com',
    subject: 'Thanks for contacting us!',
    text: `Hi ${name},\n\nWe'll get back to you soon.\n\nBest,\nYour Team`
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
