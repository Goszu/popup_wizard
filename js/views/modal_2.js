/* ---  PRODUCT MODAL-2 VIEW CLASS  --- */
WIZARD.Modal2 = Backbone.View.extend({
    initialize: function () {
        this.wrapperTmpl =  _.template(WIZARD.tpl.get('modal_wrapper'));
        this.contentTmpl =  _.template(WIZARD.tpl.get('modal_2_content'));
        this.controlsTmpl =  _.template(WIZARD.tpl.get('modal_2_controls'));

        this.attr = this.model.toJSON();
        this.attr.payment = WIZARD.payment.get('methods');
        this.attr.shipment = WIZARD.shipment.get('methods');
    },
    className: 'modal',
    render: function () {
        var finalTmpl = this.wrapperTmpl({
            model: this.attr,
            contentTmpl: this.contentTmpl,
            controlsTmpl: this.controlsTmpl
        });
        this.$el.html(finalTmpl);
        return this;
    },
    events: {
        'click .shoppingWindow-footer-close': 'closeView',
        'click .shoppingWindow-add': 'addToBasket',
        'focus .payment-select': 'viewAll'
    },
    closeView: function () {
        WIZARD.closePopup();
        WIZARD.modalBox.close();
    },
    viewAll: function () {
        $('.payment-select')
    },
    addToBasket: function () {
        WIZARD.order.set('userId', WIZARD.user.get('userId'));
        WIZARD.order.set('productId', this.model.get('id'));
        WIZARD.order.set('payment', $('.payment-select').val());
        WIZARD.order.set('shipment', $('.shipment-select').val());

        console.log('User Id: ' + WIZARD.order.get('userId'));
        console.log('User comment: ' + WIZARD.order.get('comment'));
        console.log('Product Id: ' + WIZARD.order.get('productId'));
        console.log('Product variant: ' + WIZARD.order.get('productVariant'));
        console.log('Product size: ' + WIZARD.order.get('productSize'));
        console.log('Payment: ' + WIZARD.order.get('payment'));
        console.log('Shipment: ' + WIZARD.order.get('shipment'));

        WIZARD.closePopup();
        WIZARD.modalBox.close();

        WIZARD.modalBox = new WIZARD.ModalExample({ model: this.model });
        $('body').append(WIZARD.modalBox.render().el);
        WIZARD.popup('.modal', false);
    }
});