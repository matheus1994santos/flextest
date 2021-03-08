// var print = document.getElementById('a1');
// var Ut = document.querySelector('#tensao').value;
// var Rt = document.querySelector('#resit').value;
// var It = document.querySelector('#corrente').value;

/* --------------------------------            calculo de tensão                ------------------------------ */
  function tensao() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("nav").innerHTML = this.responseText;
          }
        };
        xhttp.open("GET", "formulas/Volt.html", true);
        xhttp.send();
  }

  function calcV() {    
  var Rt = document.querySelector('#resit').value;
  var It = document.querySelector('#corrente').value;
  var print = document.getElementById('a1');
    if ( Rt != undefined && Rt != undefined ) {  
    var res = parseInt(Rt) * parseInt(It);
    print.innerHTML =  res + "V.";
    console.log(" Tensão nesse circuito sera o produto de " + Rt + " ohm " + " x " + It + "A" + " = " + res + "V.")   
    }     
  };
/* --------------------------------            calculo de tensao                ------------------------------ */

/* --------------------------------          calculo da Lei de Ohn              ------------------------------ */

  function resistencia() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("nav").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "formulas/ohm.html", true);
    xhttp.send();
  }

  function calcR() {
    var Ut = document.querySelector('#tensao').value; 
    var It = document.querySelector('#corrente').value;
    var print = document.getElementById('a1');
                    
      if ( Ut != undefined && It != undefined ) {                  
        var res = parseInt(Ut) / parseInt(It);
          print.innerHTML =  res + " ohm.";
          console.log(" Tensão nesse circuito sera o produto de " + Ut + "V" + " x " + It + "A" + " = " + res + "ohm.") 
      }      
  };

/* --------------------------------          calculo da Lei de Ohn              ------------------------------ */

/* --------------------------------          calculo da Lei de Ampere           ------------------------------ */
  function ampere() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("nav").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "formulas/Ampere.html", true);
    xhttp.send();
          
  }

  function calcA() {
    var Ut = document.querySelector('#tensao').value;
    var Rt = document.querySelector('#resit').value;
    var print = document.getElementById('a1');
      
      if ( Ut != undefined && Rt != undefined ) {       
        var res = parseInt(Ut) / parseInt(Rt);
          print.innerHTML =  res + "A.";   
          console.log(" Tensão nesse circuito sera o produto de " + Ut + "V" + " x " + Rt + "ohm" + " = " + res + "A.")  
        }
    };
/* --------------------------------          calculo da Lei de Ampere           ------------------------------ */