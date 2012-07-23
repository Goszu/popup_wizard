WIZARD.addoverlay  = function () {
    $('<div id="overlay"></div>')
        .css('top', '0')
        .appendTo('body');
    $('#overlay').live('click', function () {
        WIZARD.closePopup();
    });
    $(document).bind('keyup', function (e) {
        if (e.keyCode === 27 ) {
            WIZARD.closePopup();
        }
    });
};

WIZARD.centerPopup = function (popupBoxSelector, fadein) {
    $(popupBoxSelector).css("position","absolute");
    $(popupBoxSelector).css("z-index","1002");
    $(popupBoxSelector).css("top", Math.round(($(window).height() - $(popupBoxSelector).outerHeight() ) / 2+$(window).scrollTop()) + "px");
    $(popupBoxSelector).css("left", Math.round(( $(window).width() - $(popupBoxSelector).outerWidth() ) / 2+$(window).scrollLeft()) + "px");
    $(popupBoxSelector).css('display','block');
};

WIZARD.popup = function (popupBoxSelector, addOverlay) {
    if (addOverlay) {
        WIZARD.addoverlay();
    }
    WIZARD.centerPopup(popupBoxSelector);
};

WIZARD.closePopup = function () {
        $('#overlay, .modal').remove();
        $(document).unbind('keyup');
};

WIZARD.tpl = {
    // Hash of preloaded templates for the app
    templates: {},

    // Recursively pre-load all the templates for the app.
    loadTemplates: function(names, callback) {

        var that = this;

        var loadTemplate = function(index) {
            var name = names[index];
            $.get('templates/' + name + '.html', function(data) {
                that.templates[name] = data;
                index++;
                if (index < names.length) {
                    loadTemplate(index);
                } else {
                    callback();
                }
            });
        };

        loadTemplate(0);
    },

    // Get template by name from hash of preloaded templates
    get: function(name) {
        return this.templates[name];
    }
};
