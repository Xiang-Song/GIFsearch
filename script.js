
const Akey = "odBYLKqVyDIUumIT4qC1USPdko451Pzk";
let criteria = "giphy";
let maxNumber = 20;
let rating = "g";


            
        
let displayResults = (d) => {
    let content = "";
    $('#results').empty();
    for (let arr of d) {
        content = `<div class="col-sm-3"><img src=${arr.images.original.url}></div>`;
        $('#results').append(content);
    }; 
};

let fetchDate = (criteria, maxNumber, rating) => {
    let URL = `https://api.giphy.com/v1/gifs/search?api_key=${Akey}&q=${criteria}&limit=${maxNumber}&rating=${rating}`
    fetch(URL)
        .then(function(response){
            return response.json();
        })
        .then(function (result) {
            displayResults(result.data)
        })
};

let userRequest = () => {
    $("#submit").on('click', () => {
        let criteria = $("#criteria").val()?$("#criteria").val():'gifhy';
        $("#criteria").val('');
        let maxNumber = $("#max-number").val()?$("#max-number").val():20;
        $("#max-number").val('');
        let rating = $("#rating").find(":selected").val();
        fetchDate(criteria, maxNumber, rating);
    });
    $("#entertainment").on('click', function () {
        let criteria = "entertainment";
        fetchDate(criteria, maxNumber, rating);
    });
    $("#Sports").on('click', () => {
        let criteria = "sports";
        fetchDate(criteria, maxNumber, rating);
    });
    $("#Animals").on('click', () => {
        let criteria = "animal";
        fetchDate(criteria, maxNumber, rating);
    });
    $("#Emotions").on('click', () => {
        let criteria = "emotion";
        fetchDate(criteria, maxNumber, rating);
    });
    fetchDate(criteria, maxNumber, rating);
};


$(userRequest);

