ej.base.enableRipple(window.ripple)
/**
 * File Manager sample with Node.js service
 */

    var hostUrl = 'https://ej2-nodejs-service.azurewebsites.net/';
    var fileObject = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl,
                getImageUrl: hostUrl + 'GetImage',
                uploadUrl: hostUrl + 'Upload',
                downloadUrl: hostUrl + 'Download'
            }
    });
    fileObject.appendTo('#filemanager');
