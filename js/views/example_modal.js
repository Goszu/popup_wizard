/* ---  EXAMPLE VIEW CLASS  --- */
WIZARD.ModalExample = Backbone.View.extend({
    initialize: function () {
        this.wrapperTmpl =  _.template(WIZARD.tpl.get('modal_wrapper'));
        this.contentTmpl =  _.template(WIZARD.tpl.get('example_modal_content'));
        this.controlsTmpl =  _.template(WIZARD.tpl.get('modal_1_controls'));

        this.attr = this.model.toJSON();
        this.attr.baseUrl = WIZARD.config.get('baseUrl');
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
        'click .shoppingWindow-footer-close': 'closeView'
    },
    closeView: function () {
        WIZARD.closePopup();
        WIZARD.modalBox.close();
    }
});