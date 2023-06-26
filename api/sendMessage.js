const discordWebhook = process.env.WEBHOOK_URL

const requestIp = require('request-ip');
const axios = require('axios');


module.exports = async (req, res) => {
  const { from, subject, body } = req.body;
  let ipAddr = (requestIp.getClientIp(req))
  console.log( req.body )

  try {
    await axios.post(discordWebhook, {
      embeds: [{
        "type": "rich",
        "title": `New Message Sent!`,
        "description": "",
        "color": 0x00FFFF,
        "fields": [
          {
            "name": `From:`,
            "value": `${from}`
          },
          {
            "name": `Subject`,
            "value": `${subject}`
          },
          {
            "name": `Body`,
            "value": `${body}`
          },
          {
            "name": `IP Address`,
            "value": `${ipAddr}`
          }
        ],
        "footer": {
          "text": `NOEL.DOG MESSAGE SENDER`,
          "icon_url": `https://pbs.twimg.com/profile_images/1596936122109771780/u8lvWamH_400x400.jpg`
        }
      }]
    })

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending message to Discord:', error);
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
  }
};
