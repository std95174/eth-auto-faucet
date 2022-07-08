const axios = require('axios');

const address = '0x0ad4629c3d5f708a426d28848b4cee395f7d1f71';
axios.post('https://faucet.metamask.io/v0/request', address)
    .then(r => {
        if (r.status === 200) {
            console.log('get 1 ether from https://faucet.metamask.io/v0/request');
        }
    })
    .catch(e => {
        console.log(`Fail to get ether: ${e.response.data.error}`);
    })
