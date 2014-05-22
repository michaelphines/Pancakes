# Pancakes

## Summary
This is a javascript bookmarklet that inserts a "faux-moji" into your currently focused text box/text area. Mostly used for github comments.

Compile it here: http://ted.mielczarek.org/code/mozilla/bookmarklet.html


## The result

<img src="http://i.imgur.com/jSczQzR.png" style="margin: 0 -10px" width="35px" title="pancakes" valign="bottom">

## The bookmarklet

```javascript
javascript:(function()%7B(function()%7Bvar insertAtCursor%3Dfunction(myField,myValue)%7Bif(document.selection)%7BmyField.focus()%3Bsel%3Ddocument.selection.createRange()%3Bsel.text%3DmyValue%3B%7Delse if(myField.selectionStart%7C%7CmyField.selectionStart%3D%3D%270%27)%7Bvar startPos%3DmyField.selectionStart%3Bvar endPos%3DmyField.selectionEnd%3BmyField.value%3DmyField.value.substring(0,startPos)%2BmyValue%2BmyField.value.substring(endPos,myField.value.length)%3B%7Delse%7BmyField.value%2B%3DmyValue%3B%7D%7D%3Bvar text%3D%27<img src%3D"http://i.imgur.com/jSczQzR.png" style%3D"margin: 0 -10px" width%3D"35px" title%3D"pancakes" valign%3D"bottom">%27%3BinsertAtCursor(document.activeElement,text)%3B%7D())%7D)()%3B
```
