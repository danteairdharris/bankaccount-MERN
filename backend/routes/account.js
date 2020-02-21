const router = require('express').Router();
let Account = require('../models/account.model');

router.route('/').get((req,res) => {
    Account.find()
    .then( (accounts) => res.json(accounts))
    .catch( (err) => res.status(400).json('Error: ' + err));
})

router.route('/new').post((req,res) => {
    const accountname = req.body.accountname;
    const balance = req.body.balance;
    const newAccount = new Account({accountname,balance});
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
        account.balance = (Number(account.balance) + Number(req.body.deposit));
        account.save()
        .then( () => res.json('Deposit saved!'))
        .catch( (err) => res.status(400).json('Error: ' + err));
    })
    .catch( (err) => res.status(400).json('Error: ' + err));
})

router.route('/withdraw/:id').post((req,res) => {
    Account.findById(req.params.id)
    .then( (account) => {
        account.balance = (Number(account.balance) - Number(req.body.withdraw));
        account.save()
        .then( () => res.json('Withdrawal Saved!'))
        .catch( (err) => res.status(400).json('Error: ' + err));
    })
    .catch( (err) => res.status(400).json('Error: ' + err));
})

module.exports = router;        