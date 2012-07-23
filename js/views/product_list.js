/* ---  PRODUCT LINK VIEW CLASS  --- */
WIZARD.ProductLinkView = Backbone.View.extend({
    initialize: function () {
        this.template = _.template(WIZARD.tpl.get('product_link'));
    },
    tagName: 'li',
    render: function () {
        var attributes = this.model.toJSON();
        this.$el.html(this.template(attributes));
        return this;
    },
    events: {
        'click': 'openPopup'
    },
    openPopup: function () {
        WIZARD.modalBox = new WIZARD.Modal1({ model: this.model });
        $('body').append(WIZARD.modalBox.render().el);
        WIZARD.popup('.modal', true);
        return false;
    }
});

/* ---  PRODUCT COLLECTION VIEW CLASS  --- */
WIZARD.ProductCollectionView = Backbone.View.extend({
    tagName: 'ul',
    render: function () {
        this.collection.forEach(this.addOne, this);
        return this;
    },
    addOne: function (product) {
        var productLinkView = new WIZARD.ProductLinkView({model: product});
        productLinkView.render();
        this.$el.append(productLinkView.el);
    }
});

/*------------- PRODUCT COLLECTION -------------*/
WIZARD.productCollectionView = new WIZARD.ProductCollectionView({
    collection: WIZARD.productlist
});
