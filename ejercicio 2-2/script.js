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
        url:"http://192.168.1.170:3000/peliculas",
        data:params
    })
}

function getAllFilms(){
    $.ajax({
        url:"http://192.168.1.170:3000/peliculas",
        method:"GET",
    }).then(getSuc, getErr)
};
function getByID(ID){
    return $.ajax({
        method:"GET",
        url:"http://192.168.1.170:3000/peliculas"+ID
    })
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
    
     $("action").ON("click",function(){
        var ID=$(this).attr("data-ID")
        console.log(ID)
        getByID(ID).then(function(res){
            console.log(res);
            $(".wrapper").html(oneassamble(res))
      
    $(".back").on("click",function(){
        clear();
        getAllFilms();
    });
      })
    });
    },    
    
    
    assamble:function(Data){
        return  '<li class="action" data-id="'+Data._id+'">' +
        '<img src="' + Data.poster +'">'+
        '<p>'+ Data.title +'</p>' +
        '<p>'+ Data.gender +'</p>'+
        '<p>'+ Data.score +'</p>'+
        '</li>';
    },

    
};

getAllFilms();


function sendData(params) {
    return $.ajax({
        method: "POST",
        url: "http://192.168.1.115:3000/peliculas",
        data: params,
    })

}

function clear() {

    $(".wrapper").html(" ")

}

function oneassamble(data) {
    return '<article>' +
    ' <button>Back</button>'
        +'<img class="carteleras" src="' + data.poster + '" />'
        + '<h5>' + data.title + '</h5>'
        + '<br>'
        + '<p class="info">' + data.gender + '</p>'
        + '<p class="info">' + data.score + '</p>'
        + '</article>'
        + '<article>'
        + '<br>'
        + '<p class="info">' + data.description + '</p>'
        + '<p class="info">' + data.cast + '</p>'
        + '</article>'


};