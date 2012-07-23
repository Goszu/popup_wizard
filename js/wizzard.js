//TODO bind views to models (not required here - model shouldn't change in runtime) but good practise
//TODO set defaults in models
//TODO change all objects into backbone models
//TODO provide easy way of passing in one object and getting order object at the end of the process
Backbone.View.prototype.close = function () {
    if (this.beforeClose) {
        this.beforeClose();
    }
    this.remove();
    this.unbind();
};

WIZARD.tpl.loadTemplates(['product_link', 'modal_wrapper', 'modal_1_content', 'modal_1_controls',
    'modal_2_content', 'modal_2_controls', 'example_modal_content'], function() {
    $('body').append(WIZARD.productCollectionView.render().el);
});



