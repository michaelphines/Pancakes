# Pancakes

## Summary
This is a javascript bookmarklet that inserts a "faux-moji" into your currently focused text box/text area. Mostly used for github comments.

Compile it here: http://ted.mielczarek.org/code/mozilla/bookmarklet.html

## The bookmarklet:

```javascript
javascript:(function(){(function(){var insertAtCursor=function(myField,myValue){if(document.selection){myField.focus();sel=document.selection.createRange();sel.text=myValue;}else if(myField.selectionStart||myField.selectionStart=='0'){var startPos=myField.selectionStart;var endPos=myField.selectionEnd;myField.value=myField.value.substring(0,startPos)+myValue+myField.value.substring(endPos,myField.value.length);}else{myField.value+=myValue;}};var text='<img src=&quot;http://i.imgur.com/jSczQzR.png&quot; style=&quot;margin: 0 -10px&quot; width=&quot;35px&quot; title=&quot;pancakes&quot; valign=&quot;bottom&quot;>';insertAtCursor(document.activeElement,text);}())})();
```
