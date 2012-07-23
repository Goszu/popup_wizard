/* ---  PRODUCT MODAL-2 VIEW CLASS  --- */
WIZARD.Modal2 = Backbone.View.extend({
    initialize: function () {
        this.wrapperTmpl =  _.template(WIZARD.tpl.get('modal_wrapper'));
        this.contentTmpl =  _.template(WIZARD.tpl.get('modal_2_content'));
        this.controlsTmpl =  _.template(WIZARD.tpl.get('modal_2_controls'));

        this.attr = this.model.toJSON();
        this.attr.payment = WIZARD.payment.get('methods');
        this.attr.shipment = WIZARD.shipment.get('methods');
        this.listExpanded = 0;
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
        'click .payment-select': 'expandPayment',
        'click .shipment-select': 'expandShipment',
        'click': 'hideExpandedList',
        'click #seeAllPayments': 'seeAllPayments',
        'click #seeAllShipments': 'seeAllShipments',
        'click #newlist': 'dateInputShow',
        'click #date-input': 'dateInputClick',
        'keypress #date-input': 'dateInputKeyPress',
        'click .popup-content.payment ul.selectListPopup-lists li': 'updatePayment',
        'click .popup-content.shipment ul.selectListPopup-lists li': 'updateShipment'
    },
    closeView: function () {
        WIZARD.closePopup();
        WIZARD.modalBox.close();
    },
    hideExpandedList: function () {
        if (this.listExpanded > 0) {
            $('.expanded').css('display', 'none');
            this.listExpanded = 0;
        }
    },
    expandPayment: function (e) {
        if (this.listExpanded === 1) {
            this.listExpanded === 0;
            this.hideExpandedList();
            return false;
        } else {
            this.hideExpandedList();
            this.listExpanded = 1;
            $('.selectListPopup-list-container.payment').css('display', 'block').addClass('expanded');
            return false;
        }
    },
    expandShipment: function (e) {
        if (this.listExpanded === 2) {
            this.listExpanded === 0;
            this.hideExpandedList();
            return false;
        } else {
            this.hideExpandedList();
            this.listExpanded = 2;
            $('.selectListPopup-list-container.shipment').css('display', 'block').addClass('expanded');
            return false;
        }
    },
    seeAllPayments: function () {
        $('.popup-content.payment .additional').each(function () {
            $(this).css('display', 'block');
        });
        $('#seeAllPayments').remove();
        return false;
    },
    seeAllShipments: function () {
        $('.popup-content.shipment .additional').each(function () {
            $(this).css('display', 'block');
            $('#newlist').css('display', 'block');
        });
        $('#seeAllShipments').remove();
        return false;
    },
    dateInputShow: function () {
        $('#newlist').css('display','none');
        $('#date-input').css('display', 'block').focus();
        return false;
    },
    dateInputClick: function () {
        $('#date-input').focus();
        return false;
    },
    dateInputKeyPress: function (e) {
        if (e.keyCode === 13) {
            $('#dlabel').val($('#date-input').val());
            this.hideExpandedList();
        }
    },
    updatePayment: function (e) {
        $('#dlabel2').val($(e.target).data('value'));
    },
    updateShipment: function (e) {
        $('#dlabel').val($(e.target).data('value'));
    },
    addToBasket: function () {
        WIZARD.order.set('userId', WIZARD.user.get('userId'));
        WIZARD.order.set('productId', this.model.get('id'));
        WIZARD.order.set('payment', $('#dlabel2').val());
        WIZARD.order.set('shipment', $('#dlabel').val());

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