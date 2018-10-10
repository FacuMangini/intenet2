$("#sumbit").on("click",function(event){
    event.preventDefault();
    var title = $("#title").val();
    var description = $("#description").val();
    var cast = $("#cast").val();
    var gender = $("#gender").val();
    var poster = $("#poster").val();
    var score = $("#score").val();    
    sendData({
        title: title,
        description: description,
        cast: cast,
        poster: poster,
        score: score,  
        gender: gender,  
    }).then(success,onError)
        function success(response){
            $(".msg").html("<p>" + response.msg + "</p>")
                    $(".msg").show()  ;              
        }
        function onError(errorr){

        };
    
})
function sendData(params){
    console.log(params)
    return $.ajax({
        method:"POST",
        url:"http://192.168.1.132:3000/peliculas",
        data:params
    })
}

function getAllFilms(){
    $.ajax({
        url:"http://192.168.1.132:3000/peliculas",
        method:"GET",
    }).then(getSuc, getErr)
}
function getSuc(response){
    listFilms.setMovies(response);
    listFilms.listAll();
};
function getErr(errorr){
    

};
var listFilms={
    data:[],
    setMovies: function(Data){
        this.data= Data;
    },
    listAll: function(){
        for(var i = 0; i < this.data.length; i++){
            $("#table-body").append(listFilms.assamble(this.data[i]));
        }
    },
    assamble:function(Data){
        return  '<li>' +
        '<img src="' + Data.poster +'">'+
        '<p>'+ Data.title +'</p>' +
        '<p>'+ Data.gender +'</p>'+
        '<p>'+ Data.score +'</p>'+
        '</li>';
    },

    
};

getAllFilms();