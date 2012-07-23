/* ---  EXAMPLE VIEW CLASS  --- */
WIZARD.ModalExample = Backbone.View.extend({
    initialize: function () {
        this.template =  _.template(WIZARD.tpl.get('example_modal'));
        this.attr = this.model.toJSON();
    },
    className: 'modal',
    render: function () {
        this.$el.html(this.template(this.attr));
        return this;
    },
    events: {
        'click .shoppingWindow-footer-close': 'closeView'
    },
    closeView: function () {
        WIZARD.closePopup();
        WIZARD.modalBox.close();
    }
});