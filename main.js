const {vttToPlainText} = require("vtt-to-text")

const form = document.forms.fileForm;

form.file.addEventListener('change', function(e) {
    const file = e.target.files[0];
    
    const reader = new FileReader()
    reader.readAsText(file)

    // TODO F5せずに別のファイルを読み込みたい
    reader.addEventListener('load', function() {
        document.write(vttToPlainText(reader.result))
    })
})
