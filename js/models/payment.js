/* ---  PAYMENT MODEL CLASS  --- */
WIZARD.Payment = Backbone.Model.extend({});

/*---------------  PAYMENT MODEL ----------------*/
WIZARD.payment = new WIZARD.Payment({
    methods: [ 'Paypal', 'Google Checkout', 'third payment method', 'fourth payment method' ]
});
