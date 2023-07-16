(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const {vttToPlainText} = require("vtt-to-text")

const form = document.forms.fileForm;

form.file.addEventListener( 'change', function(e) {
    const file = e.target.files[0];
    
    const reader = new FileReader()
    reader.readAsText(file)

    reader.addEventListener('load', function() {
        document.write(vttToPlainText(reader.result))
    })
})

},{"vtt-to-text":2}],2:[function(require,module,exports){
const vttToPlainText = (vttCaption) => {
  if (vttCaption.length === 0) {
    return;
  }

  vttCaption = vttCaption.replace(/.+ --> .+/g, '');
  vttCaption = vttCaption.replace(/<\/c>/g, '');
  vttCaption = vttCaption.replace(/<.+?>/g, '');
  vttCaption = vttCaption.replace(/^\s*$/g, '');
  vttCaption = vttCaption.replace(/&nbsp;/g, ' ');

  let lines = vttCaption.split('\n');
  lines.splice(0, 4);
  lines = lines.map(line => line.trim());
  lines = lines.filter(line => line.length > 0);
  lines = lines.filter((line, index, lines) => line !== lines[index + 1]);

  return lines.join(' ');
}

module.exports = {vttToPlainText};
},{}]},{},[1]);
