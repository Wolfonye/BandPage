/*Das Dollarzeichen ist eine Kurzschriebweise für die Funktion "jquery"*/
function validiereEingaben (name, text) {
    if (name==null || name=="" || text==null || text=="") {
        alert("Hm, da ist wohl was schiefgelaufen. Bitte überprüfen sie nochmal, ob sie einen Namen und einen Text eingegeben haben.");
        return false;
    }else {
        return true;
    }
}
/*offensichtlich geht das nicht so einfach...man muss auf Serverseite  Veränderungen am
Dokumemnt machen lassen, was ich noch nciht kann. Das Skript wird nur lokal ausgeführt
dementsprechend sind Änderungen nicht permanent*/
function gaestebucheintragHinzufuegen () {
    var name = document.getElementById('namensfeld').value;
    var text = document.getElementById('textfeld').value;
    if (validiereEingaben(name, text)==true) {
        var eintrag = document.createElement("div");
        eintrag.innerHTML = '<span class="gastname">'+name+'</span>schrieb:<p class="gasttext">'+text+'</p><span class="gastdatum">27.2.1987, 16.43Uhr</span>;';
        $(eintrag).insertAfter($('#gaestebuchform'));
    }
}
