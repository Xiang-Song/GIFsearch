const Akey = "odBYLKqVyDIUumIT4qC1USPdko451Pzk";
var criteria = "giphy";
var maxNumber = "20";
var rating = "G";


let displayResults = () => {

};

let fetchDate = () => {
    fetch('')
};

let userRequest = () => {
    $("#submit").on('click', ()=> {
        var criteria = $("#criteria").val();
        var maxNumber = $("#max-number").val();
        var rating = $("rating").val();
    });
    $("#entertainment").on('click', ()=> {
        var criteria = "entertainment"
    });
    $("#Sports").on('click', ()=> {
        var criteria = "sports"
    });
    $("#Animals").on('click', ()=> {
        var criteria = "animal"
    });
    $("#Emotions").on('click', ()=> {
        var criteria = "emotion"
    });
};