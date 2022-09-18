
"use strict";
var app;
(function (app) {
    function doQR(str) {
        const errCorLvl = qrcodegen.QrCode.Ecc.LOW; // Error correction level
        var qr = qrcodegen.QrCode.encodeText("E" + str, errCorLvl); // Make the QR Code symbol
        qr.drawCanvas(25, 0, document.getElementById("ash2")); // Draw it on screen
    }
    
    doQR("7000001508180984");

   // takes the form field value and returns true on valid number
    function valid_credit_card(value) {
      // accept only digits, dashes or spaces
        if (/[^0-9-\s]+/.test(value)) return false;

        // The Luhn Algorithm. It's so pretty.
        var nCheck = 0, nDigit = 0, bEven = false;
        value = value.replace(/\D/g, "");

        for (var n = value.length - 1; n >= 0; n--) {
            var cDigit = value.charAt(n),
                  nDigit = parseInt(cDigit, 10);

            if (bEven) {
                if ((nDigit *= 2) > 9) nDigit -= 9;
            }

            nCheck += nDigit;
            bEven = !bEven;
        }

        return (nCheck % 10) == 0;
    }

    var array = [
            [7000001560521745, "ZHiR-cur"],
            [7000001560520028, "ZHiR-begin"],
            [7000001689590019, "Meta"],
            [7000001689630005, "Meta"],
            [7000001560500004, "Meta"],
            [7000001560510003, "Meta"],
            [7000001560570007, "Meta"],
            [7000001893790009, "Meta"],
            [7000001893810005, "Meta"],
            [7000001893820004, "Meta"],
            [7000001216510001, "Judy"],
            [7000001216520000, "Judy"],
            [7000001508180984, 1337],
            [7005000010704815, 73],
            [7000001033223291, 91],
            [7000001560552716, 154],
            [7000001560550082, 197],
            [7000001560552385, 176],
            [7000001560552591, 154],
            [7000001689602707, 150],
            [7000001689600073, 182],
            [7000001689601113, 158],
            [7000001560550314, 148],
            [7000001689622218, 133],
            [7000001633110211, 109],
            [7000001633110112, 102],
            [7000001560550330, 95],
            [7005000011125432, 57],
            [7005000010704393, 22],
            [7005000010553279, 14],
            [7000001893790017, "?"],
            [7000001211480002, "?"],
            [7000001211483832, "?"],
            [7000001508181891, "?"],
            [7000001560554944, "?"],
            [7000001021414027, "?"],
            [7000001893790015, "?"],
            [7000001560560990, "?"],
            [7000001689600172, "?"]
            ];
    
    var newHTML = $.map(array, function(value) {
        return('<li onclick="getElementById(\'bonus\').value=\'' + value[0] +'\'">' + value[0] + ' - <b>' + value[1] + '</b></li>');            
    });

    $("#dipy").html(newHTML.join(""));

    $("#dipy").hide();
    
    $("#btnUp").click(function(){
            var num = parseInt($("#bonus").val()) + 1;

            while (!valid_credit_card(String(num))) {
                num++;
            }
                        
            doQR(String(num)); // make another code
            $("#bonus").val(num);
        });

    $("#btnDown").click(function(){
            var num = parseInt($("#bonus").val()) - 1;

            while (!valid_credit_card(String(num))) {
                num--;
            }
                        
            doQR(String(num)); // make another code
            $("#bonus").val(num);
        });

    $("#btnChange").click(function(){
            var changed = parseInt($("#bonus").val());
            
            doQR(String(changed)); // make another code
            $("#bonus").val(changed);
        });

    $("#ash2").click(function(){
            $("#panel").toggle();
        });

    $("#toggleDipy").click(function(){
            $("#dipy").toggle();
        });

    $("#btnSav").click(function(){
            var a  = document.createElement('a');
            a.href = document.getElementById("ash2").toDataURL();
            a.download = $("#inpBal").val() + '_' + $("#bonus").val() + '.png';
            a.click();
        });
        /*
            var bal = prompt("БАЛАНС");
    
            if (bal == "" || !bal) {
                alert("EMPTY STRING!");
            }
            else {
                var a  = document.createElement('a');
                a.href = document.getElementById("ash2").toDataURL();
                a.download = bal + '_' + $("#bonus").val() + '.png';
                a.click();
            }*/

})(app || (app = {}));
