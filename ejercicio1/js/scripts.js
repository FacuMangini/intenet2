var listElements= {
    data:[],

    setData:function(Data){
        this.data = Data;
    },
    listAll:function(){
        for(var i = 0; i <listElements.data.length; i++){
            $("#table-body").append(Table.assamble(listElements.data[i]));
        }
    },
    assamble:function(Data){
        return '<div class="row">' +
                '<span class="col-2">' + '</span>' +
                '<span class="col-2">' + Data.brand + '</span>' +
                '<span class="col-2">' + Data.location + '</span>' +
                '<span class="col-2">' + Data.lunch + '</span>' +
                '<span class="col-2">' + Data.price + '</span>' +
                '<span class="col-2">' + '</span>' +
                '<span class="description col-12">' + "" + '</span>' +
            '</div>';
    },
var listar={
    filter: function (element)
    if (listElements.price)
}
    $("#action1").on("click",function(){
        var price=$("#price").val();
        listElements.listByPrice(price);

    })
    listByPrice:function(price)
    for(var i=0;listElements.items.lenght>i;i++){
        if(listElements.items[i].price<price){
         listElements.assamble(listElements.items[i])
        }
    }
}