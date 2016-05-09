var checkExpiration = function(year, month) {

    var today = new Date();
    var date = new Date();

    if (today.getTime() >= date.setFullYear(year, month)) {

        alert('Expired')
    } else {
        alert('Valid')

    }

}


checkExpiration(2015, 07)
