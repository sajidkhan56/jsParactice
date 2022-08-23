for(var i = 2014; i <= 2050; i++) {
    let firstDay = (new Date(i,0,1)).getDay();
    if(firstDay == 0) {
        document.write('The '+i+' Year first day is sunday</br>');
    }
}