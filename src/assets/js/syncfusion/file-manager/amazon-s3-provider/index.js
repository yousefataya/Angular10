ej.base.enableRipple(window.ripple)
/**
 * File Manager sample with Amazon S3 service
 */

    var hostUrl = 'https://amazons3.azurewebsites.net/api/AmazonS3Provider/';
    var fileObject = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl + 'AmazonS3FileOperations',
                getImageUrl: hostUrl + 'AmazonS3GetImage',
                uploadUrl: hostUrl + 'AmazonS3Upload',
                downloadUrl: hostUrl + 'AmazonS3Download'
            }
    });
    fileObject.appendTo('#filemanager');
