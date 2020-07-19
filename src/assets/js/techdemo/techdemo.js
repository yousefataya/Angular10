var serveraddress_input = '192.168.225.10';
var username_input = document.getElementById('username');
var password_input = document.getElementById('password');
var destination_input = document.getElementById('destinationnr');

var webphoneframe = null;
function InitializeTextInputs()
{
    if (isNull(serveraddress_input))
    {
        serveraddress_input = '192.168.225.10';

        username_input = document.getElementById('username');
        password_input = document.getElementById('password');
        destination_input = document.getElementById('destinationnr');
    }
}

function Hangup() {
    webphone_api.hangup();
}

function Accept() {
   // document.getElementById('icoming_call_layout').style.display = 'none';
    webphone_api.accept();
}

function Reject() {
    //document.getElementById('icoming_call_layout').style.display = 'none';
    webphone_api.reject();
}

function Conference() {
    var destnum = prompt("Conference:\nEnter destination number", "");
    if (destnum !== null) {
        webphone_api.conference(destnum, true);
    }
}

function Transfer() {
    var destnum = prompt("Transfer:\nEnter destination number", "");
    if (destnum !== null) {
        webphone_api.transfer(destnum);
    }
}

var mutestate = true;

function Mute() {
    if (mutestate === true) {
        webphone_api.mute(true, 0);
        mutestate = false;
        document.getElementById('btn_mute').innerHTML = 'UnMute';
    } else {
        webphone_api.mute(false, 0);
        mutestate = true;
        document.getElementById('btn_mute').innerHTML = 'Mute';
    }

}

var holdstate = true;
function Hold() {
    if (holdstate === true) {
        webphone_api.hold(true);
        holdstate = false;
        document.getElementById('btn_hold').innerHTML = 'UnHold';
    } else {
        webphone_api.hold(false);
        holdstate = true;
        document.getElementById('btn_hold').innerHTML = 'Hold';
    }

}

function Chat() {
    var chatwindow = document.getElementById('chatwindow');
    if (chatwindow != null) {
        if (chatwindow.style.display === 'none') {
            chatwindow.style.display = 'block';
            document.getElementById('btn_chat').innerHTML = 'Close chat';
        } else {
            chatwindow.style.display = 'none';
            document.getElementById('btn_chat').innerHTML = 'Chat';
        }
    }
}

function AnswerModal(from) {
    try {
        
    } catch (e) {
        alert(e)
    }
    }

function SendChat() {
    var msgF = document.getElementById('message');

    var to = document.getElementById('destnumber').value;
    var msg = msgF.value;

    if (typeof (to) === 'undefined' || to === null || to.length < 1) {
        DisplayEvent('ERROR, Invalid destination number');
        document.getElementById('destnumber').focus();
        return;
    }

    if (typeof (msg) === 'undefined' || msg === null || msg.length < 1) {
        DisplayEvent('ERROR, Enter chat message to be sent');
        msgF.focus();
        return;
    }

    msgF.value = '';

    AddMessageToHistory('Me', msg);

    webphone_api.sendchat(to, msg);
}



function Refresh() {
    /*alert('Online');*/
    
   
}

function RefreshHome() {
    /*alert('Online');*/

    $("#dataTable").jqxDataTable("refresh")
}

function Start() 
{
    try {
        
        $(document).ready(function () {

            /*alert(window.sessionStorage.getItem('extNo') + " & " + window.sessionStorage.getItem('password'));*/

            webphone_api.setparameter('serveraddress', '192.168.225.10');
            webphone_api.setparameter('username', window.sessionStorage.getItem('extNo'));
            webphone_api.setparameter('password', window.sessionStorage.getItem('password'));
            webphone_api.start()

        });
    } catch (e) { alert(e)}
}

function ChomeInit(userName, passwordNAN, destinationNAN) 
{
    try {

        var username = new String(userName).trim();

        $(document).ready(function () {

            /*alert(window.sessionStorage.getItem('extNo') + " & " + window.sessionStorage.getItem('password') );*/

            webphone_api.setparameter('serveraddress', '192.168.225.10');
            webphone_api.setparameter('username', window.sessionStorage.getItem('extNo'));
            webphone_api.setparameter('password', window.sessionStorage.getItem('password'));
            webphone_api.start()

        });

    } catch (e) {
        alert(e)
    }
    }

function Call()
{
    webphone_api.setparameter('serveraddress', '192.168.225.10');
    webphone_api.setparameter('username', window.sessionStorage.getItem('extNo'));
    webphone_api.setparameter('password', window.sessionStorage.getItem('password'));
    

    InitializeTextInputs();
    var destnr = destination_input.value;

    if (isNull(destnr) || (Trim(destnr)).length < 1)
    {
        DisplayStatus('ERROR Invalid destination number');
        return;
    }
    webphone_api.setparameter('destination', '1234');
    webphone_api.call(Trim(destnr));
}


function Hangup()
{
    webphone_api.hangup();
}


function Accept()
{
    webphone_api.accept();
}


function Reject()
{
    webphone_api.reject();
}


function ShowHideChat()
{
    if ($('#chat_box').is(':visible')) { $('#chat_box').hide(); } else { $('#chat_box').show(); }
}

$(document).ready(function(){
webphone_api.onCallStateChange(function (event, direction, peername, peerdisplayname, line, callid) {
  
   
        CreateDatatbleHome()
        PersonProfileHome(peername)
        destenation(peername)
        JqGrid(peername)
        SetCallerId(peername)


    if (document.getElementById('gridvoilance') != undefined && !isNull(document.getElementById('gridvoilance'))) {
        JqGridVoilance(peername)
    }
    
});
})

function SendChat()
{
    InitializeTextInputs();
    var msgF = document.getElementById('message');
    
    var to = destination_input.value;
    var msg = msgF.value;
    
    if (isNull(to) || (Trim(to)).length < 1)
    {
        DisplayStatus('ERROR, Invalid chat destination number');
        destination_input.focus();
        return;
    }
    
    if (isNull(msg) || (Trim(msg)).length < 1)
    {
        DisplayStatus('ERROR, Enter chat message to be sent');
        msgF.focus();
        return;
    }
    
    msgF.value = '';
    
// Displays messages in chat form window
    AddMessageToHistory('Me', msg);
    
    webphone_api.sendchat(to, msg);
}

/** Receive incoming messages*/
webphone_api.onChat(function (from, msg, line)
{
    InitializeTextInputs();
    if (isNull(from) || isNull(msg)) { return; }
    
    var currdest = destination_input.value;
    
    if (isNull(currdest) || (Trim(currdest)).length < 1)
    {
        destination_input.value = from;
    }else
    {
        if (Trim(currdest) !== from)
        {
            AddMessageToHistory('', '<br />###############################<br />');
            destination_input.value = from;
        }
    }
    
// Displays messages in chat form window
    AddMessageToHistory(from, msg);
});

/** Displays sent/received messages in chat form window*/
function AddMessageToHistory(to, message)
{
    var sentmsgF = document.getElementById('msg_list');
    var msgconttent = sentmsgF.innerHTML;
    
    if (isNull(msgconttent)) { msgconttent = ''; }
    
    var item = '';
    
    if (!isNull(to) && to.length > 0)
    {
        item = '<b>' + to + ':</b><p>' + message + '</p><p class="date">' + GetDateForMessage() + '</p>';
    }else
    {
        item = '<p>' + message + '</p>';
    }
    
    msgconttent = msgconttent + item + '<br />';
    
    sentmsgF.innerHTML = msgconttent;
// scroll to bottom
    var d = $('#msg_list');
    d.scrollTop(d.prop("scrollHeight"));
}

/** helper function; returns the current date and time in string displayable format*/
function GetDateForMessage()
{
    var month = new Array();
    month[0] = 'Jan'; month[1] = 'Feb'; month[2] = 'Mar'; month[3] = 'Apr'; month[4] = 'May'; month[5] = 'Jun';
    month[6] = 'Jul'; month[7] = 'Aug'; month[8] = 'Sep'; month[9] = 'Oct'; month[10] = 'Nov'; month[11] = 'Dec';
    try{
    var date = new Date();

    var minutes = date.getMinutes();
    if (minutes < 10) { minutes = '0' + minutes; }

    var day = date.getDate(); // getDay returns the day of the week
    if (day < 10) { day = '0' + day; }

    var datestr = month[date.getMonth()] + ', ' + day + ' ' + date.getFullYear()+ ' '
            + date.getHours() + ':' + minutes;
    
    return datestr;

    } catch(err) { PutToDebugLogException(2, "_message: GetDateForMessage", err); }
    return '';
}

/** receive important events from webphone, which will be displayed for the user and parsed to perform other actions*/
webphone_api.onEvent(function (type, evt)
{
    if (type === 'event')
    {
        ProcessNotifications(evt);
    }
});

/** parse received notifications*/
var ringingNumber = '';
function ProcessNotifications(not)
{
    try{
    if (isNull(not) || not.length < 1) { return; }
    
    not = Trim(not);
    
    var type = '';
    var line = '';
    var notifyword = '';
    
    //STATUS,1,Ringing,8888,9999,2,8888
    var pos = not.indexOf(',');
    if (pos > 0)
    {
        type = Trim(not.substring(0, pos));
        not = Trim(not.substring(pos + 1));
    }
    
// get line
    pos = not.indexOf(',');
    if (pos > 0)
    {
        line = Trim(not.substring(0, pos));
        notifyword = Trim(not.substring(pos + 1));
    }else
    {
        notifyword = not;
    }

    var notifywordcontent = '';
    
// clear junk of notifyword's end
    pos = notifyword.indexOf(',');
    if (pos > 0)
    {
        notifywordcontent = Trim(notifyword.substring(pos + 1));
        notifyword = Trim(notifyword.substring(0, pos));
    }
    pos = notifyword.indexOf('[');
    if (pos > 0) { notifyword = Trim(notifyword.substring(0, pos)); }
    pos = notifywordcontent.indexOf('[');
    if (pos > 0) { notifywordcontent = Trim(notifywordcontent.substring(0, pos)); }
    
    
// handle incoming call
    if (type === 'STATUS')
    {
        // you can futher process/use the received status event messages
        // check the documentation for more details
    }
    
    DisplayStatus(type + ',' + notifyword);
    
    } catch(err) { PutToDebugLogException(2, 'live_demo: ProcessNotifications', err); }
}

/** Custom popup with Accept/Reject buttons displayed on incoming call
 * This is just an example, you can design/use your own custom popup*/
var armodal = null;
function AcceptRejectPopup(from)
{
    try {
        /*document.getElementById('sipclient').display;*/
      
    }
    catch(e) {
        alert(e)
    }
}

/** display events/status messages for the user*/
var status_e = null;
function DisplayStatus(msg_orig)
{
    try{
    var msg = msg_orig;
    if (isNull(status_e)) { status_e = document.getElementById('status'); }
    
    if (isNull(msg) || msg.length < 1) { msg = '&nbsp;'; }
    if (msg.toLowerCase().indexOf('subscribe') >= 0) { return; }
    
    if (msg.indexOf('ERROR') >= 0)
    {
        msg = msg.replace('ERROR', '');
        msg = Trim(msg);
        
        if (msg.indexOf(',') === 0)
        {
            msg = msg.replace(',', '');
            msg = Trim(msg);
        }
        
        msg = '<span style="color:red;">' + msg + '</span>';
    }
    else if (msg.indexOf('WARNING') >= 0)
    {
        msg = msg.replace('WARNING', '');
        msg = Trim(msg);
        
        if (msg.indexOf(',') === 0)
        {
            msg = msg.replace(',', '');
            msg = Trim(msg);
        }
        
        msg = '<span style="color: #ff6600;">' + msg + '</span>';
    }
    else if (msg.indexOf('STATUS') >= 0 || msg.indexOf('EVENT') >= 0)
    {
        msg = msg.replace('STATUS', '');
        msg = msg.replace('EVENT', '');
        msg = Trim(msg);
        
        if (msg.indexOf(',') === 0)
        {
            msg = msg.replace(',', '');
            msg = Trim(msg);
        }
    }
    
    status_e.innerHTML = msg;
    PutToDebugLog(2, 'NOT: ' + msg_orig);
    
    } catch(err) { PutToDebugLogException(2, 'live_demo: DisplayStatus', err); }
}


// ------------------ helper functions



/** this function is used to build the form for the Other settings
 * if you wish to display/present these setting to the user, you should build your own simple html*/
function PopulateSettings()
{
    try{
    if ( isNull(webphone_api.global.settmap2) || isNull( webphone_api.global.settmap2['magicnumber'] ))
    {
        PutToDebugLog(2, 'live_demo: PopulateSettings, webphone_api.global.settmap is NULL');
        return;
    }
// callerid, displayname, proxyaddress, webrtcserveraddress
    var callerid_description = 'This will not be used for authentication. Specify if not the same with the Username for authentication setting. Some VoIP servers will reject if not the same with the username!';
    var displayname_description = 'Specify display name. This is an optional setting and it should be your full name';
    var proxyaddress_description = 'Outbound SIP proxy address. Leave it empty if you don’t have a stateless/outbound proxy';
    var webrtcserveraddress_description = 'Optional setting to indicate the domain name or IP address of your websocket service used for WebRTC if any.';
    var content = '' +
        '<div class="sett_form">' +
            '<label for="username" title="' + callerid_description + '">Caller ID:</label>' +
            '<input type="text" placeholder="Caller ID" id="username" value="' + webphone_api.getparameter('username') + '" title="' + callerid_description + '" autocapitalize="off" />' +
        '</div>' +

        '<div class="sett_form">' +
            '<label for="displayname" title="' + displayname_description + '">Display name:</label>' +
            '<input type="text" placeholder="Display name" id="displayname" value="' + webphone_api.getparameter('displayname') + '" title="' + displayname_description + '" autocapitalize="off" />' +
        '</div>' +

        '<div class="sett_form">' +
            '<label for="proxyaddress" title="' + proxyaddress_description + '">Proxy address:</label>' +
            '<input type="text" placeholder="Proxy address" id="proxyaddress" value="' + webphone_api.getparameter('proxyaddress') + '" title="' + proxyaddress_description + '" autocapitalize="off" />' +
        '</div>' +

        '<div class="sett_form">' +
            '<label for="webrtcserveraddress" title="' + webrtcserveraddress_description + '">WebRTC Server:</label>' +
            '<input type="text" placeholder="WebRTC Server" id="webrtcserveraddress" value="' + webphone_api.getparameter('webrtcserveraddress') + '" title="' + webrtcserveraddress_description + '" autocapitalize="off" />' +
            //'<span>*WebRTC Server Address is optional. If not set, then the built in WebRTC gateway will be used.</span>' +
        '</div>';

    var settings_list = document.getElementById('settings_list');
    if (!isNull(settings_list))
    {
        settings_list.innerHTML = content;
    }else
    {
        PutToDebugLog(5,"EVENT, live_demo PopulateSettings list element is NULL");
    }
    } catch(err) { PutToDebugLogException(2, 'live_demo: PopulateSettings', err); }
}

/** called on "Save settings" button clicked
 * Save settings from Advanced Settings form*/
function SaveSettings()
{
    try{
    function SaveSett(id)
    {
        var input = document.getElementById(id);
        if (!isNull(input))
        {
            var val = input.value;
            if (isNull(val)) { val = ''; }
            val = Trim(val);
            
            webphone_api.setparameter(id, val);
        }
    }
    
    SaveSett('username');
    SaveSett('displayname');
    SaveSett('proxyaddress');
    SaveSett('webrtcserveraddress');
    
    DisplayStatus('EVENT,Saved');
    
    } catch(err) { PutToDebugLogException(2, 'live_demo: SaveSettings', err); }
}

/** Display/hide Advanced Settings form*/
function ShowHideAdvancedSettings()
{
    var rcolumn = document.getElementById('right_column');
    var btnadv = document.getElementById('btn_advanced_sett');
    if (isNull(rcolumn) || isNull(btnadv)) { return; }
    
    btnadv.style.display = 'none';
    
    if (rcolumn.style.display === 'none')
    {
        document.getElementById('left_column').style.marginLeft = '0';
        document.getElementById('right_column').style.display = 'block';
        btnadv.innerHTML = 'Hide Advanced Settings';
    }else
    {
        document.getElementById('right_column').style.display = 'none';
        btnadv.innerHTML = 'Show Advanced Settings';
    }
}

/** Helper function which returns "true" if the passed valiable is not NULL and it's not UNDEFINED*/
function isNull (variable)
{
    try{
    if (typeof (variable) === 'undefined' || variable === null)
    {
        return true;
    }else
    {
        return false;
    }
    } catch(err) { PutToDebugLogException(2, "common: isNull", err); }
    
    return true;
}

function Trim(str)
{
    try{
    if (isNull(str) || str.lenght < 1) { return ''; }
    
    str = str.toString();
    return str.replace(/^\s+|\s+$/g, ''); 
    
    } catch(err) { PutToDebugLogException(2, "common: Trim", err); }
    
    return str;
}

/** Helper function  which returns current browser name*/
var browserName = null; // browser family
var browserName2 = null; // browser name
function GetBrowser ()
{
    try{

    if (isNull(browserName) || isNull(browserName2))
    {
        var browser = navigator.userAgent.toLowerCase();
        
        PutToDebugLog(2, "EVENT, common: GetBrowser name: " + browser);

        // order is important here.  Safari userAgent contains mozilla,
        // IE 11 userAgent contains mozilla and netscape, 
        // and Chrome userAgent contains both mozilla and safari.
        if ((browser.indexOf('edge') !== -1))
        {
            browserName = 'Edge';
            browserName2 = 'Edge';
        }
        else if ((browser.indexOf('msie') !== -1) && (browser.indexOf('opera') === -1))
        {
            browserName = 'MSIE';
            browserName2 = 'MSIE';
        }
        else if (browser.indexOf('trident') !== -1 || browser.indexOf('Trident') !== -1)
        {
            browserName = 'MSIE';
            browserName2 = 'MSIE';
        }
        else if (browser.indexOf('iphone') !== -1)
        {
            // this included both iPhone and iPad
            if (browser.indexOf('fxios') !== -1 || browser.indexOf('firefox') !== -1)
            {
                browserName2 = 'Firefox';
            }
            else if (browser.indexOf('crios') !== -1 || browser.indexOf('chrome') !== -1)
            {
                browserName2 = 'Chrome';
            }else
            {
                browserName2 = 'iPhone';
            }
            browserName = 'Netscape Family';
        }
        else if ((browser.indexOf('firefox') !== -1) && (browser.indexOf('opera') === -1))
        {
            browserName = 'Netscape Family';
            browserName2 = 'Firefox';
        }
        else if (browser.indexOf('chrome') !== -1)
        {
            browserName = 'Netscape Family';
            browserName2 = 'Chrome';
        }
        else if (browser.indexOf('safari') !== -1)
        {
            browserName = 'Netscape Family';
            browserName2 = 'Safari';
        }
        else if ((browser.indexOf('mozilla') !== -1) && (browser.indexOf('opera') === -1))
        {
            browserName = 'Netscape Family';
            browserName2 = 'Other';
        }
        else if (browser.indexOf('opera') !== -1)
        {
            browserName = 'Netscape Family';
            browserName2 = 'Opera';
        }else
        {
            browserName = '?';
            browserName2 = 'unknown';
        }
        
        PutToDebugLog(2, "EVENT, common: GetBrowser Detected browser name: " + browserName + ";  " + browserName2);
    }
    } catch(err) { PutToDebugLogException(2, "common: GetBrowser", err); }
    
    return browserName2;
}

/** helper functions: write logs to browser console*/
function PutToDebugLogException(level, msg, err) { PutToDebugLog(level, 'ERROR,' + msg + ' ' + err); }
function PutToDebugLog(level, msg)
{
    if (msg.indexOf("ERROR") > -1)
    {
        try { console.error(msg); } catch (e1) {  }
    }else
    {
        try { console.log(msg); } catch (e2) {  }
    }
}