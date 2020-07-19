function Chips(coreEjs) {

    var tag = document.getElementById('group')
    var element = document.createElement('br')
    var count = 0;
    
    $.each(coreEjs, function (value, key) {

        try {

            if (count == 0 || count <= 4) {
                var checkBoxObj = new ej.buttons.CheckBox({ label: key, checked: true });
                checkBoxObj.appendTo('#first')
                ++count;
            }

            if (count == 5 || count <= 8) {
                var checkBoxObj = new ej.buttons.CheckBox({ label: key, checked: true });
                checkBoxObj.appendTo('#second')
                ++count;
            }

            if (count == 9 || count <= 11) {
                var checkBoxObj = new ej.buttons.CheckBox({ label: key, checked: true });
                checkBoxObj.appendTo('#third')
                ++count;
            }

            if (count == 12 || count <= 14) {
                var checkBoxObj = new ej.buttons.CheckBox({ label: key, checked: true });
                checkBoxObj.appendTo('#fourth')
                ++count;
            }


            if (count == 15 || count <= 17) {
                var checkBoxObj = new ej.buttons.CheckBox({ label: key, checked: true });
                checkBoxObj.appendTo('#fourth')
                ++count;
            }



        } catch (e) {
            alert(e)
        }

    });
}

function CreateListBox(coreEjs) {
    $("#listbox").jqxListBox({ width: 300, source: coreEjs, checkboxes: true, height: 200 });
}