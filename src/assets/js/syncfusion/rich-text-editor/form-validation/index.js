ej.base.enableRipple(window.ripple)
/**
 * RichTextEditor form-validation sample
 */
 



    var defaultRTE = new ej.richtexteditor.RichTextEditor({ showCharCount: true, maxLength: 100, placeholder: 'Type something' });
    defaultRTE.appendTo('#defaultRTE');

    new ej.inputs.FormValidator('#form-element');

