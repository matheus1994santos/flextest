// var print = document.getElementById('a1');
// var Ut = document.querySelector('#tensao').value;
// var Rt = document.querySelector('#resit').value;
// var It = document.querySelector('#corrente').value;
var btn1 = document.getElementById('btn1');

/* -------------------------------------------------------------- */



btn1.addEventListener("click", function () {
        var print = document.getElementById('a1');
        var Rt = document.querySelector('#resit').value;
        var It = document.querySelector('#corrente').value;

        if ( Rt != undefined && Rt != undefined ) {
            
        var res = parseInt(Rt) * parseInt(It);
        print.innerHTML =  res + "V.";
            
        }     
});

// btn1.addEventListener("click", function () {
//         var print = document.getElementById('a1');
//         var Ut = document.querySelector('#tensao').value;
//         var It = document.querySelector('#corrente').value;
        
//         if ( Ut != undefined && It != undefined ) {
            
//            var res = parseInt(Ut) / parseInt(It);
//             print.innerHTML =  res + "Ohm.";

//         } 
// });

// btn1.addEventListener("click", function () {
//         var print = document.getElementById('a1');
//         var Ut = document.querySelector('#tensao').value;
//         var Rt = document.querySelector('#resit').value;

//         if ( Ut != undefined && Rt != undefined ) {
             
//         var res = parseInt(Ut) / parseInt(Rt);
//         print.innerHTML =  res + "A.";

//         }
// });
