/* ---  PRODUCT MODAL-1 VIEW CLASS  --- */
WIZARD.Modal1 = Backbone.View.extend({
    initialize: function () {
        this.wrapperTmpl =  _.template(WIZARD.tpl.get('modal_wrapper'));
        this.contentTmpl =  _.template(WIZARD.tpl.get('modal_1_content'));
        this.controlsTmpl =  _.template(WIZARD.tpl.get('modal_1_controls'));

        this.variantSelected = 0;
        this.attr = this.model.toJSON();
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
        'click .shoppingWindow-prev': 'prevVariant',
        'click .shoppingWindow-next': 'nextVariant',
        'click .shoppingWindow-footer-close': 'closeView',
        'click .shoppingWindow-add': 'nextView',
        'focus .shoppingWindow-Caption': 'captionFocus',
        'blur .shoppingWindow-Caption': 'captionBlur'
    },
    prevVariant: function () {
        if (this.variantSelected !== 0 ) {
            this.variantSelected -= 1;
            this.changeVariant();
        }
    },
    nextVariant: function () {
        if (this.variantSelected < (this.attr.variants.length -1) ) {
            this.variantSelected += 1;
            this.changeVariant();
        }
    },
    changeVariant: function () {
        var currentVariant = this.attr.variants[this.variantSelected];
        $('ul.shoppingWindow-imageAreaSizes li.active').removeClass('active');
        $('ul.shoppingWindow-imageAreaSizes li:nth-child(' + currentVariant.size + ')').addClass('active');
        $('.shoppingWindow-currentImage').attr('src', 'img/products/' + currentVariant.filename);
        $('.shoppingWindow-description').html(currentVariant.description);
        $('#num1').text(this.variantSelected + 1);
    },
    captionFocus: function () {
        if ($('.shoppingWindow-Caption').val() === 'write something...') {
            $('.shoppingWindow-Caption').val("");
        }
    },
    captionBlur: function () {
        if ($('.shoppingWindow-Caption').val() === "") {
            $('.shoppingWindow-Caption').val('write something...');
        }
    },
    closeView: function () {
        WIZARD.closePopup();
        WIZARD.modalBox.close();
    },
    nextView: function () {
        WIZARD.order.set('productVariant', (this.variantSelected +1));
        WIZARD.order.set('productSize', this.attr.variants[this.variantSelected].size);
        WIZARD.order.set('comment', $('.shoppingWindow-Caption').val());

        WIZARD.modalBox.close();
        WIZARD.modalBox = new WIZARD.Modal2({ model: this.model });
        $('body').append(WIZARD.modalBox.render().el);
        WIZARD.popup('.modal', false);
        $('.payment-select').selectBox();
        $('.shipment-select').selectBox();
    }
});


TasksList = Backbone.View.extend({
    template: _.template([
        "<ul class='task_list'>",
        "<% items.each(function(item) { %>",
        "<%= itemTemplate(item) %>",
        "<% }); %>",
        "</ul>"
    ].join('')),

    itemTemplate: _.template(
        "<li><%= name %></li>"
    ),

    render: function() {
        var html = this.template({
            items: tasks /* a collection */,
            itemTemplate: this.itemTemplate
        });

        $(this.el).append(html);
    }
});