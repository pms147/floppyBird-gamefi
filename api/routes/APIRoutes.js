'use strict';
module.exports = function (app) {

    var api = require('../controllers/APIController');
    app.get('/api/getTicketBalance', api.getTitketBalance);
    // balance in ticket
    // localhost:3000/api/getTicketBalance?address=0xF57110268a0b7a689F6E91c5C379fe2532D21a15
    app.get('/api/getBalance', api.getBalance);
    // balance in FLP
    // localhost:3000/api/getBalance?address=0xF57110268a0b7a689F6E91c5C379fe2532D21a15
    app.get('/api/startMatch', api.startMatch);
    // deduct ticket and start match
    // localhost:3000/api/startMatch?address=0xF57110268a0b7a689F6E91c5C379fe2532D21a15
    app.post('/api/endMatch', api.endMatch);
    // end the match
    // localhost:3000/api/endMatch
    /*pass vô raw
    {
        "address": "0xF57110268a0b7a689F6E91c5C379fe2532D21a15",
        "id": 2,
        "point": 100,
        "matchData": []
    }
    */
    app.get('/api/getTop', api.getTop);
    // get leaderboard
    // localhost:3000/api/getTop
    app.post('/api/deposit', api.deposit);
    // deposit into the vault
    // localhost:3000/api/deposit
    /*pass vô raw
    {
        "address": "0xF57110268a0b7a689F6E91c5C379fe2532D21a15",
        "amount": 200,
        "transaction_id": "123"
    }
    */
    app.post('/api/withdraw', api.withdraw);

    // withdraw ticket to FLP token
    // localhost:3000/api/withdraw
    /*pass vô raw
    {
        "address": "0xF57110268a0b7a689F6E91c5C379fe2532D21a15",
        "amount": 50
    }
    */
};