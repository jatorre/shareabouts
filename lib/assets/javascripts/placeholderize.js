/*
 * Widget, when attached to a form, will placeholderize non-native placeholder fields.
 * Prevents submission of placeholder value. 
 */

$.widget("ui.placeholderize", (function() {
  return {
    options : {},

    /**
     * Constructor
     */
    _create : function() {
      if(!Modernizr.input.placeholder) {
        // placeholderize
        this.element.find("*[placeholder]").each(function() {
          var input       = $(this);
          var placeholder = input.attr("placeholder");

          input.val(placeholder).focus(function() {
            if( input.val() == placeholder) input.val("");
          }).blur(function() {
            if( input.val() == "" ) input.val(placeholder);
          });
        });
        
        // prevent submission of placeholders
        // NOT WORKING DUE TO BINDING OF HANDLER ON SUBMIT ALREADY
        this.element.submit(function(){
          alert("submiting")
          this.element.find("*[placeholder]").each(function() {
            var input       = $(this);
            var placeholder = input.attr("placeholder");
            alert(placeholder);
            
            if( input.val() == placeholder) input.val("");
          });
        });
      }
    }
  }
})());