$(document).ready(function (){

    console.log("Ya")

$("#enviar").click(function(event){
    event.preventDefault();

    console.log("Ya")
    if($("input[location=fairfax]")){

        $.ajax({
            type: "POST",
            url: "https://fts-uat.cardconnect.com/cardconnect/rest/",
            data: JSON.stringify({
                "merchid": "496160873888",
                "account": $("input[location=account]"),
                "expiry": $("input[location=expiry]"),
                "amount": $("input[location=amount]"),
                "name": $("input[location=name]"),
                "capture": "y",

            }),
            xhrFields: {

                withCredentials: true
            },
            beforeSend: function (request) {
                request.setRequestHeader('Authorization', 'Basic ' + btoa('testing:testing123'));
                request.setRequestHeader("Access-Control-Allow-Origin", "*");
            },
            success: function (response){
                console.log(response);
            },
            dataType: "json",
            contentType: "application/json"
        });


    }


    if($("input[location=manassas]")){

        $.ajax({
            type: "PUT",
            url: "https://fts-uat.cardconnect.com/cardconnect/rest/",
            data: JSON.stringify({
                "merchid": "496160873888",
                "account": $("input[location=account]"),
                "expiry": $("input[location=expiry]"),
                "amount": $("input[location=amount]"),
                "name": $("input[location=name]"),
                "capture": "y",

            }),
            xhrFields: {
                withCredentials: true
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Basic ' + btoa('fairfax1:f@cz7#dqr$k6dFpjnwc9'));
            },
            success: function (response){
                console.log(response);
            },
            dataType: "json",
            contentType: "application/json"
        });

    }



    if($("input[location=woodbridge]")){

        $.ajax({
            type: "PUT",
            url: "https://fts-uat.cardconnect.com/cardconnect/rest/",
            data: JSON.stringify({
                "merchid": "496160873888",
                "account": $("input[location=account]"),
                "expiry": $("input[location=expiry]"),
                "amount": $("input[location=amount]"),
                "name": $("input[location=name]"),
                "capture": "y",

            }),
            xhrFields: {
                withCredentials: true
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Basic ' + btoa('fairfax1:f@cz7#dqr$k6dFpjnwc9'));
            },
            success: function (response){
                console.log(response);
            },
            dataType: "json",
            contentType: "application/json"
        });


    }
})

});