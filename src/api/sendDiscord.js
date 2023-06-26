const axios = require('axios');
const discordWebhook = process.env.WEBHOOK_URL


module.exports = async (req, res) => {
  const { from, subject, body } = req.body;

  const webhookURL = discordWebhook;

  try {
    const messageContent = `From: ${from}\nSubject: ${subject}\n\nBody:${body}`;

    await axios.post(webhookURL, {
      content: messageContent
    });

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending message to Discord:', error);
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
  }
};
