const router = require('express').Router();
let Account = require('../models/account.model');

router.route('/').get((req,res) => {
    res.send('<p>You are on /account/</p>');
})

router.route('/new').post((req,res) => {
    const username = req.body.username;
    const balance = req.body.balance;
    const newAccount = new Account({username,balance});
    newAccount.save()
        .then( () => res.json('Account Added!'))
        .catch( (err) => res.status(400).json('Error :' + err)); 
})


router.route('/:id').get((req,res) => {
    Account.findById(req.params.id)
    .then( (account) => res.json(account))
    .catch ( (err) => res.status(400).json('Error: ' + err));
})

router.route('/deposit/:id').post((req,res) => {
    Account.findById(req.params.id)
    .then( (account) => { 
        account.balance += req.body.deposit;
        account.save()
        .then( () => res.json('Deposit saved!'))
        .catch( (err) => res.status(400).json('Error: ' + err));
    })
    .catch( (err) => res.status(400).json('Error: ' + err));
})

router.route('/withdraw/:id').post((req,res) => {
    Account.findById(req.params.id)
    .then( (account) => {
        account.balance -= req.body.withdraw;
        account.save()
        .then( () => res.json('Withdrawal Saved!'))
        .catch( (err) => res.status(400).json('Error: ' + err));
    })
    .catch( (err) => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req,res) => {
    Account.findByIdAndDelete(req.params.id)
    .then( () => res.json('Account deleted!'))
    .catch( (err) => res.status(400).json('Error: ' + err));
})

module.exports = router;        