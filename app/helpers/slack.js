const axios = require('axios');
const config = require('config');
const logger = require('./logger');

/**
 * Send slack message
 *
 * @param {*} text
 */
const sendMessage = text => {
  logger.info({ tag: 'slack-send-message', text }, 'Send slack message');

  axios
  .post('https://discord.com/api/webhooks/917288516172525639/KnnIDYeiVskgcB6qL1PbMfHEscdmiLEmDzSgnSau28-0ZUYpwfXSeV-EoQkm943wxv_h', {
  "username": "트레이딩봇",
  "avatar_url": "https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png",
  "content": "",
  "embeds": [
    {
      "title": "트레이딩내역",
      "url": "http://hyeon.xyz:8000",
      "description": text,
      "color": 15258703,
    }
  ]
})
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
}

module.exports = { sendMessage };
