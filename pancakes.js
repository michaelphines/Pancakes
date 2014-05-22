(function() {
    var insertAtCursor = function(myField, myValue) {
        //IE support
        if (document.selection) {
            myField.focus();
            sel = document.selection.createRange();
            sel.text = myValue;
        }
        //MOZILLA and others
        else if (myField.selectionStart || myField.selectionStart == '0') {
            var startPos = myField.selectionStart;
            var endPos = myField.selectionEnd;
            myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
        } else {
            myField.value += myValue;
        }
    };

    var text = '<img src="http://i.imgur.com/jSczQzR.png" style="margin: 0 -10px" width="35px" title="pancakes" valign="bottom">';
    insertAtCursor(document.activeElement, text);
}())
