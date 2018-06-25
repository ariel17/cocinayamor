function configureMultipleSelect(selector, maxItems) {
    $(selector).change(function() {
        var options = $(selector + ' option:selected');
        if (options.length == maxItems + 1) {
            options[maxItems].selected = false;
        }
    });
}

$(function() {
    configureMultipleSelect('#cya-lunch-select', 8);
    configureMultipleSelect('#cya-dessert-select', 1);
    configureMultipleSelect('#cya-cazuelas-select', 1);
    configureMultipleSelect('#cya-fingerfood-select', 1);
    configureMultipleSelect('#cya-kids-select', 1);
    configureMultipleSelect('#cya-principal-1-select', 1);
    configureMultipleSelect('#cya-principal-2-select', 1);
});
