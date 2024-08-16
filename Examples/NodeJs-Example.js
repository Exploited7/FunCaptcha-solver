const axios = require('axios')

async function solveCaptcha(publickey, website) {
  const data = {
    host: website,
    publickey: publickey
  };

  try {
    const response = await axios.post('http://23.137.104.216:5000/api/funcaptcha', data)
    console.log(response.data.token)
  } catch (error) {
    console.error('Error :', error)
  }
}

solveCaptcha('73BEC076-3E53-30F5-B1EB-84F494D43DBA', 'ea-api.arkoselabs.com')