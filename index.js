var arrayNote = [];
var arrayWeighing = [];
// var arrayNoteWeighing = [];
var i = 0;
var j = 0;

var documentData = document.getElementById("button__send");

documentData.addEventListener("click", function(){
    if(document.getElementById("note").value.length < 1){
        alert("Debe ingresar la nota que desea enviar, junto a la ponderación.")
    }
    else if(document.getElementById("pond").value.length < 1){
        alert("Debe ingresar la ponderación de la nota.")
    }
    arrayNote[i] = parseInt(document.getElementById("note").value);
    i++;
});

documentData.addEventListener("click", function(){
    arrayWeighing[j] = parseInt(document.getElementById("pond").value);
    j++;

});


function calcularPonderacion(){
    // let i = 0;
    let finalArray = [];
    let finalAdd;
    // arrayNote.map(function(iter){
    //     arrayNoteWeighing[i] = [iter, arrayWeighing[i]];
    //     i++;
    // });
    for(i = 0; i < arrayNote.length; i++){
        finalArray[i] = arrayNote[i] * (arrayWeighing[i]/100);
    }

    finalAdd = finalArray.reduce(function(a,b){
        return a + b;
    });

    document.getElementById("result__program").innerText = "El promedio de las notas indicadas es: " + finalAdd;
}