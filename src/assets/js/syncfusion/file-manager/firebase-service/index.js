ej.base.enableRipple(window.ripple)
/**
 * File Manager sample with Firebase Realtime Database service
 */

    var hostUrl = 'https://realtime-firebase.azurewebsites.net/api/FirebaseProvider/';
    var fileObject = new ej.filemanager.FileManager({
        ajaxSettings: {
            url: hostUrl + 'FirebaseRealtimeFileOperations',
            getImageUrl: hostUrl + 'FirebaseRealtimeGetImage',
            uploadUrl: hostUrl + 'FirebaseRealtimeUpload',
            downloadUrl: hostUrl + 'FirebaseRealtimeDownload'
        }
    });
    fileObject.appendTo('#filemanager');
