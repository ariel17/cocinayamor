function configureMultipleSelect(selectSelector, buttonSelector,minItems, maxItems) {
    var optionsSelector = selectSelector + ' option:selected';
    $(selectSelector).change(function() {
        var options = $(optionsSelector);
        if (options.length == maxItems + 1) {
            options[maxItems].selected = false;
        }
    });

    $(buttonSelector).click(function(event) {
        var options = $(optionsSelector);
        if (options.length < minItems) {
            event.preventDefault();
            var message;
            if (minItems != maxItems) {
                message = "Debe seleccionar entre " + minItems + " y " + maxItems + " opciones.";
            } else {
                message = "Debe seleccionar al menos " + minItems;
                if (minItems == 1) {
                    message += " opción.";
                } else {
                    message += " opciones.";
                }
            }
            alert(message);
        }
    });
}

$(function() {
    configureMultipleSelect('#cya-lunch-select', '#cya-lunch-ok', 4, 8);
    configureMultipleSelect('#cya-dessert-select', '#cya-dessert-ok', 1, 1);
    configureMultipleSelect('#cya-cazuelas-select', '#cya-cazuelas-ok', 1, 1);
    configureMultipleSelect('#cya-fingerfood-select', '#cya-fingerfood-ok', 1, 1);
    configureMultipleSelect('#cya-kids-select', '#cya-kids-ok', 1, 1);
    configureMultipleSelect('#cya-principal-1-select', '#cya-principal-1-ok', 1, 1);
    configureMultipleSelect('#cya-principal-2-select', '#cya-principal-2-ok', 1, 1);
});
