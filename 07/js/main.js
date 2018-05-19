(
  function(){
    var contenedor_respuesta=$(".contenedor_respuesta");
    var cmbBase= $('#cmbBase').val();
    var multiplicando=cmbBase;
    var multiplicador=0;
    console.log(cmbBase);
    $("#btn_agregar").on('click',function(){
      multiplicador=multiplicador+1;
      contenedor_respuesta.append("<tr><td>"+multiplicando+"</td><td>x</td><td>"+multiplicador+"</td><td>=</td><td>"+multiplicando*multiplicador+"</td></tr>");
    });


    // Funcion que detecta el cambio de la base
	$("#cmbBase").on("change",function(){

		$("tr").not(":eq(0)").remove();
		multiplicador = 0;
    multiplicando=cmbBase;
	});


  }
)();
