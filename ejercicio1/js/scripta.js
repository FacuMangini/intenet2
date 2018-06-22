var elements={          //objeto
    items:[],      //array    
    setItems:function (data){    //para que items sea la data
            elements.items=data;
    },
    listAll:function (items){           //loop para que revise la lista 1x1
        for(i=0;i<this.items.length;i++)    //adentro del for va con ; y no con ,
            {$('#table-body').append(this.assamble(this.items[i]))} //muestra el assamble en cada ronda
    },
     
    assamble:function(items){               //lo que va a mostrar en el html
       return '<div class="row">'+
        '<span class="col-2"></span>'+
        '<span class="col-2">'+items.brand+'</span>'+
        '<span class="col-2">'+items.location+'</span>'+
        '<span class="col-2">'+items.lunch+'</span>'+
        '<span class="col-2">'+items.price+'</span>'+
        '<span class="col-2"></span>'+
        '<span class="description col-12"></span>'+
      '</div>'
    },
    clear:function(){
            $('#table-body').html(' ')
    },
    listByPrice:function(price){
        for(i=0;i<this.items.length;i++)            
        {if(elements.items[i].price<price)          //la condicion de la comparacion 
            {$('#table-body').append(this.assamble(this.items[i]))}}        //lo que hace si se cumple la condicion anterior ::):
    }

};
//a partir de este momento finaliza la primera parte ;)
$('#boton1').on("click",function(){
    elements.clear();    //para borrar lo que estaba llamamos a clear
    var price= $("#inputprice").val();    //val es asignarle el valor de inputprice a var price
    elements.listByPrice(price);
})