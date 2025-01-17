$("#slc_xest_muni_estmunicipio").change(function(){
  var id_municipio = $( "#slc_xest_muni_estmunicipio" ).val();
  $.ajax({
    url:base_url+"Estadistica/estad_indi_generales_getnivel",
    method:"POST",
    data:{"id_municipio":id_municipio},
    beforeSend: function(xhr) {
      // $("#wait").modal("show");
      Notification.loading("");
    },
    success:function(data){
      // $("#wait").modal("hide");
      swal.close();
      $("#slc_xest_muni_nivel").empty();
      $.each(data, function (index, item) {
          $("#slc_xest_muni_nivel").append('<option value="'+index+'">'+item+'</option>');
        });
      // console.log(data);
    },
    error: function(error){
      console.log(error);
    }
  });

});

$("#slc_xest_muni_nivel").change(function(){
  var id_municipio = $( "#slc_xest_muni_estmunicipio" ).val();
  var id_nivel = $( "#slc_xest_muni_nivel" ).val();
  var nivel = $('#slc_xest_muni_nivel option:selected').text();

  $.ajax({
    url:base_url+"Estadistica/estad_indi_generales_getsost",
    method:"POST",
    data:{"id_municipio":id_municipio,"id_nivel":id_nivel,'nivel':nivel},
    beforeSend: function(xhr) {
      // $("#wait").modal("show");
      Notification.loading("");
    },
    success:function(data){
      // $("#wait").modal("hide");
      swal.close();
      $("#slc_xest_muni_sostenimiento").empty();
      $.each(data, function (index, item) {
          $("#slc_xest_muni_sostenimiento").append('<option value="'+index+'">'+item+'</option>');
        });
      // console.log(data);
    },
    error: function(error){
      $("#wait").modal("hide");
      console.log(error);
    }
  });

});

$("#slc_xest_muni_sostenimiento").change(function(){
  var id_municipio = $( "#slc_xest_muni_estmunicipio" ).val();
  var id_nivel = $( "#slc_xest_muni_nivel" ).val();
  var id_sostenimiento = $( "#slc_xest_muni_sostenimiento" ).val();
  var nivel = $('#slc_xest_muni_nivel option:selected').text();
  var sostenimiento = $('#slc_xest_muni_sostenimiento option:selected').text();

  $.ajax({
    url:base_url+"Estadistica/estad_indi_generales_getmodali",
    method:"POST",
    data:{"id_municipio":id_municipio,"id_nivel":id_nivel,"id_sostenimiento":id_sostenimiento,'nivel':nivel,'sostenimiento':sostenimiento},
    beforeSend: function(xhr) {
      // $("#wait").modal("show");
      Notification.loading("");
    },
    success:function(data){
      // $("#wait").modal("hide");
      swal.close();
      $("#slc_xest_muni_modalidad").empty();
      $.each(data, function (index, item) {
          $("#slc_xest_muni_modalidad").append('<option value="'+index+'">'+item+'</option>');
        });
      // console.log(data);
    },
    error: function(error){
      console.log(error);
    }
  });

});

// $("#slc_xest_muni_modalidad").change(function(){
//   var id_municipio = $( "#slc_xest_muni_estmunicipio" ).val();
//   var id_nivel = $( "#slc_xest_muni_nivel" ).val();
//   var id_sostenimiento = $( "#slc_xest_muni_sostenimiento" ).val();
//   var id_modalidad = $( "#slc_xest_muni_modalidad" ).val();
//   $.ajax({
//     url:base_url+"Estadistica/estad_indi_generales_getciclo",
//     method:"POST",
//     data:{"id_municipio":id_municipio,"id_nivel":id_nivel,"id_sostenimiento":id_sostenimiento,"id_modalidad":id_modalidad},
//     beforeSend: function(xhr) {
//       // $("#wait").modal("show");
//     },
//     success:function(data){
//       // $("#wait").modal("hide");
//       $("#slc_xest_muni_cicloe").empty();
//       $.each(data, function (index, item) {
//           $("#slc_xest_muni_cicloe").append('<option value="2">2017-2018</option><option value="4">2018-2019</option>');
//            // $("#slc_xest_muni_cicloe").append('<option value="4">2018-2019</option>');
//         });
//       // console.log(data);
//     },
//     error: function(error){
//       console.log(error);
//     }
//   });

// });

$("#slc_xest_nivel_zona").change(function(){
  var id_nivel = $( "#slc_xest_nivel_zona" ).val();
  var nivel = $('#slc_xest_nivel_zona option:selected').text(); 
  $("#slc_xest_zona").prop('disabled', 'disabled');
  $('#slc_xest_zona').css( 'cursor', 'no-drop' );
  if (id_nivel!=0) {
    $("#slc_xest_sostenimiento_zona").removeAttr("disabled");
    $('#slc_xest_sostenimiento_zona').css( 'cursor', 'pointer' );
  }
  else {
    $("#slc_xest_sostenimiento_zona").prop('disabled', 'disabled');
    $('#slc_xest_sostenimiento_zona').css( 'cursor', 'no-drop' );
  }

  $("#slc_xest_zona").val('0');
  $.ajax({
    url:base_url+"Estadistica/estad_indi_generales_getsubsost_zona",
    method:"POST",
    data:{"id_nivel":id_nivel,'nivel':nivel},
    beforeSend: function(xhr) {
      // $("#wait").modal("show");
      Notification.loading("");
    },
    success:function(data){
      // $("#wait").modal("hide");
      swal.close();
      $("#slc_xest_sostenimiento_zona").empty();
      $.each(data, function (index, item) {
          $("#slc_xest_sostenimiento_zona").append('<option value="'+index+'">'+item+'</option>');
        });
      // console.log(data);
    },
    error: function(error){
      console.log(error);
    }
  });

});

$("#slc_xest_sostenimiento_zona").change(function(){
  var id_nivel = $( "#slc_xest_nivel_zona" ).val();
  var nivel = $('#slc_xest_nivel_zona option:selected').text(); ;
  var id_subsost = $( "#slc_xest_sostenimiento_zona" ).val();
  var sostenimiento = $( "#slc_xest_sostenimiento_zona option:selected" ).text();
  if (id_subsost!=0) {
    $("#slc_xest_zona").removeAttr("disabled");
    $('#slc_xest_zona').css( 'cursor', 'pointer' );
  }
  else {
    $("#slc_xest_zona").prop('disabled', 'disabled');
    $('#slc_xest_zona').css( 'cursor', 'no-drop' );
  }
  $.ajax({
    url:base_url+"Estadistica/estad_indi_generales_getzonassubsost_zona",
    method:"POST",
    data:{"id_nivel":id_nivel,"id_subsost":id_subsost,'nivel':nivel,'sostenimiento':sostenimiento},
    beforeSend: function(xhr) {
      Notification.loading("");
    },
    success:function(data){
      // console.table(data.array);
      // $("#wait").modal("hide");
      swal.close();
      $("#slc_xest_zona").empty();
      $("#slc_xest_zona").append(data.array);
      // $.each(data, function (index, item) {
      //     $("#slc_xest_zona").append('<option value="'+index+'">'+item+'</option>');
      //   });
      // console.log(data);
    },
    error: function(error){
      console.log(error);
      swal.close();
      alert("No hay zonas escolares para este sostenimiento");
      $("#slc_xest_zona").empty();
      $("#slc_xest_zona").html('<option selected>Sin zonas escolares</option>');
      $("#resultado_filtros").empty();
    }
  });

});

$("#slc_xest_zona").change(function(){
  var id_nivel = $( "#slc_xest_nivel_zona" ).val();
  var id_subsost = $( "#slc_xest_sostenimiento_zona" ).val();
  var id_zona = $( "#slc_xest_zona" ).val();


  $.ajax({
    url:base_url+"Estadistica/estad_indi_generales_getcicloxnxsubxz_zona",
    method:"POST",
    data:{"id_nivel":id_nivel,"id_subsost":id_subsost,"id_zona":id_zona},
    beforeSend: function(xhr) {
          Notification.loading("");
    },
    success:function(data){
      // $("#wait").modal("hide");
      swal.close();
      $("#slc_xest_cicloe_zona").empty();
         $("#slc_xest_cicloe_zona").append('<option value="2">2017-2018</option><option value="4">2018-2019</option>');
      // console.log('ok ok');
      $.each(data, function (index, item) {
          // $("#slc_xest_cicloe_zona").append('<option value="'+index+'">'+item+'</option>');
        });
      // console.log(data);
    },
    error: function(error){
      console.log(error);


    }
  });

});
$("#btn_buscar_zona").click(function(){
  // console.log("llego en la funcion del boton");
  var id_nivel = $( "#slc_xest_nivel_zona" ).val();
  var id_subsost = $( "#slc_xest_sostenimiento_zona" ).val();
  var id_zona = $( "#slc_xest_zona" ).val();
  var sostenimiento = $( "#slc_xest_sostenimiento_zona option:selected" ).text();
  var nivel = $( "#slc_xest_nivel_zona option:selected" ).text();
  var ciclo = $("#slc_xest_cicloe_zona").val();

  if (id_nivel=='0') {
    alert("Seleccione nivel");
  }
  else if (id_subsost=='0') {
    alert("Seleccione sostenimiento");
  }
  else if (id_zona=='0') {
    alert("Seleccione número de zona escolar");
  }

  if(id_nivel!="0" && id_subsost!="0" && id_zona!="0"){
    $.ajax({
      url:base_url+"Estadistica/xest_zona_x",
      method:"POST",
      data:{"id_nivel":id_nivel,"id_sostenimiento":id_subsost,"id_zona":id_zona,"ciclo":ciclo,
              "nivel":nivel,"sostenimiento":sostenimiento
            },
      beforeSend: function(xhr) {
        Notification.loading("");
      },
      success:function(data){
        // console.log("fui por el data");
        swal.close();
        $("#resultado_filtros").empty();
        $("#resultado_filtros").append(data.vista);

      },
      error: function(error){
        console.log(error);
        swal.close();
        alert("No se pudieron obtener los datos solicitados");
        $("#resultado_filtros").empty();
      }
    });
  }


});

$("#slc_xest_sostenimiento_zona").prop('disabled', 'disabled');
$("#slc_xest_zona").prop('disabled', 'disabled');
$('#slc_xest_sostenimiento_zona').css( 'cursor', 'no-drop' );
$('#slc_xest_zona').css( 'cursor', 'no-drop' );

// $("#slc_xest_muni_nivel").prop('disabled', 'disabled');
// $('#slc_xest_muni_nivel').css( 'cursor', 'no-drop' );
// $("#slc_xest_muni_sostenimiento").prop('disabled', 'disabled');
// $('#slc_xest_muni_sostenimiento').css( 'cursor', 'no-drop' );
// $("#slc_xest_muni_modalidad").prop('disabled', 'disabled');
// $('#slc_xest_muni_modalidad').css( 'cursor', 'no-drop' );


$("#btn_buscar_mun_est").click(function(){
  let id_municipio = $("#slc_xest_muni_estmunicipio").val();
  let municipio = $("#slc_xest_muni_estmunicipio option:selected").text();
  let id_sostenimiento = $("#slc_xest_muni_sostenimiento").val();
  let sostenimiento = $("#slc_xest_muni_sostenimiento option:selected").text();
  let id_modalidad = $("#slc_xest_muni_modalidad").val();
  let modalidad = $("#slc_xest_muni_modalidad option:selected").text();
  let id_nivel = $("#slc_xest_muni_nivel").val();
  let nivel = $("#slc_xest_muni_nivel option:selected").text();
  let id_ciclo = $("#slc_xest_muni_cicloe").val();
  let ciclo = $("#slc_xest_muni_cicloe option:selected").text();

  $.ajax({
    url:base_url+"Estadistica/xest_muni_x",
    method:"POST",
    data:{"id_municipio":id_municipio,"municipio":municipio,"id_sostenimiento":id_sostenimiento,
          "sostenimiento":sostenimiento,"id_modalidad":id_modalidad,"modalidad":modalidad,
          "id_nivel":id_nivel,"nivel":nivel,"id_ciclo":id_ciclo,"ciclo":ciclo
        },
    beforeSend: function(xhr) {
      Notification.loading("");
    },
    success:function(data){
      // console.log(data);
      swal.close();
      $("#resultado_filtros").empty();
      $("#resultado_filtros").append(data.vista);
    },
    error: function(error){
      console.log(error);
    }
  });

});

$("#xest_muni-tab").click(function(){
  $(".dv_tablas_estzona").empty();
  $(".dv_tablas_estmuni").empty();
  // $(".dv_filtro").empty();
  $("#resultado_filtros").empty();
});

$("#xzona-tab").click(function(){
  $(".dv_tablas_estmuni").empty();
  $(".dv_tablas_estzona").empty();
  // $(".dv_filtro").empty();
  $("#resultado_filtros").empty();

});
