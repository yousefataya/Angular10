/**
 * File Manager full functionalities sample
 */
 this.default = function() {
     var hostUrl = 'http://localhost:62728/';
    var fileObject = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl + 'api/FileManager/FileOperations',
                getImageUrl: hostUrl + 'api/FileManager/GetImage',
                uploadUrl: hostUrl + 'api/FileManager/Upload',
                downloadUrl: hostUrl + 'api/FileManager/Download'    
            },
			view: 'Details'
    });
    fileObject.appendTo('#filemanager');
};