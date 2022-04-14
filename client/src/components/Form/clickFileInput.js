
export const clickFileUploadButton = () => { // clicks on the input file hidden under 'upload file'

    let uploadButton = document.getElementById('upload');
    let fileInputButton = document.getElementById('fileInputButton');
    fileInputButton.children[0].click();
};