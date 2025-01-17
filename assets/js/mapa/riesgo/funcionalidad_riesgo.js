$(function() {
    obj_riesgo = new Riesgo();
});

function Riesgo(){
  _this = this;
}

$("#btn_buscar_ries_muni").click(function() {
  let id_minicipio = $("#slt_municipio_ries").val();
  let id_nivel = $("#slt_nivel_ries").val();
  let id_bimestre = $("#slt_bimestre_ries").val();
  let id_ciclo = $("#slt_ciclo_ries").val();
  var obj_grafica = new Grafica();

	$.ajax({
    url:  base_url+"riesgo/riesgoxmuni_graf",
    method: 'POST',
    data: {'id_minicipio':id_minicipio,'id_nivel':id_nivel,'id_bimestre':id_bimestre,'ciclo':"2017-2018"},
    beforeSend: function(xhr) {
      Notification.loading("");
  },
  })
  .done(function( data ) {
	// obj_loader.hide();
  $("#total_bajas_muni").text(data.total_bajas[0]['total']);
	var q1 = parseInt(data.graph_pie_riesgo[0]['muy_alto']);
		var q2 = parseInt(data.graph_pie_riesgo[0]['alto']);
		var q3 = parseInt(data.graph_pie_riesgo[0]['medio']);
		var q4 = parseInt(data.graph_pie_riesgo[0]['bajo']);
	var t1 = parseInt(data.graph_bar_riesgo[0]['muyalto_1']);
		var t2 = parseInt(data.graph_bar_riesgo[0]['muyalto_2']);
		var t3 = parseInt(data.graph_bar_riesgo[0]['muyalto_3']);
		var t4 = parseInt(data.graph_bar_riesgo[0]['muyalto_4']);
		var t5 = parseInt(data.graph_bar_riesgo[0]['muyalto_5']);
		var t6 = parseInt(data.graph_bar_riesgo[0]['muyalto_6']);
		switch(id_nivel) {
		case '4':
							$("#dv_graf_riesgo_mun_zona").empty();
							$("#dv_tab_riesgo_mun_zona").empty();
              $("#dv_tabla_riesgo_mun_zona").empty();
							$("#dv_tablam_riesgo_mun_zona").empty();
              obj_grafica.TablaPieGraficaPie(q1,q2,q3,q4);
              obj_grafica.TablaPieGraficaBarPrimaria(t1,t2,t3,t4,t5,t6);

              var html_tbm_riego='';
              html_tbm_riego += '<div class="col-sm-6">';
              html_tbm_riego += '                    <table id="tabla_bar_info" class="table table-gray table-hover">';
              html_tbm_riego += '                      <thead>';
              html_tbm_riego += '                        <tr>';
              html_tbm_riego += '                          <th class="text-center"></th>';
              html_tbm_riego += '                          <th class="text-center">1°</th>';
              html_tbm_riego += '                          <th class="text-center">2°</th>';
              html_tbm_riego += '                          <th class="text-center">3°</th>';
              html_tbm_riego += '                          <th class="text-center">4°</th>';
              html_tbm_riego += '                          <th class="text-center">5°</th>';
              html_tbm_riego += '                          <th class="text-center">6°</th>';
              html_tbm_riego += '                        </tr>';
              html_tbm_riego += '                      </thead>';
              html_tbm_riego += '                      <tbody>';
              html_tbm_riego += '                        <tr>';
              html_tbm_riego += '                          <th class="text-center">Muy Alto</th>';
              html_tbm_riego += '                          <td class="text-center">'+(t1)+'</td>';
              html_tbm_riego += '                          <td class="text-center">'+(t2)+'</td>';
              html_tbm_riego += '                          <td class="text-center">'+(t3)+'</td>';
              html_tbm_riego += '                          <td class="text-center">'+(t4)+'</td>';
              html_tbm_riego += '                          <td class="text-center">'+(t5)+'</td>';
              html_tbm_riego += '                          <td class="text-center">'+(t6)+'</td>';
              html_tbm_riego += '                        </tr>';
              html_tbm_riego += '                      </tbody>';
              html_tbm_riego += '                    </table>';
              html_tbm_riego += '';
              html_tbm_riego += '                  </div>';

          $("#dv_tablam_riesgo_mun_zona").append(html_tbm_riego);

		break;
		case '5':
              $("#dv_graf_riesgo_mun_zona").empty();
              $("#dv_tab_riesgo_mun_zona").empty();
              $("#dv_tabla_riesgo_mun_zona").empty();
              $("#dv_tablam_riesgo_mun_zona").empty();

              obj_grafica.TablaPieGraficaPie(q1,q2,q3,q4);
              obj_grafica.TablaPieGraficaBarSecundaria(t1,t2,t3);
              var html_tbm_riego='';
              html_tbm_riego += '<div class="col-sm-6">';
              html_tbm_riego += '                    <table id="tabla_bar_info" class="table table-gray table-hover">';
              html_tbm_riego += '                      <thead>';
              html_tbm_riego += '                        <tr>';
              html_tbm_riego += '                          <th class="text-center"></th>';
              html_tbm_riego += '                          <th class="text-center">1°</th>';
              html_tbm_riego += '                          <th class="text-center">2°</th>';
              html_tbm_riego += '                          <th class="text-center">3°</th>';
              html_tbm_riego += '                        </tr>';
              html_tbm_riego += '                      </thead>';
              html_tbm_riego += '                      <tbody>';
              html_tbm_riego += '                        <tr>';
              html_tbm_riego += '                          <th class="text-center">Muy Alto</th>';
              html_tbm_riego += '                          <td class="text-center">'+(t1)+'</td>';
              html_tbm_riego += '                          <td class="text-center">'+(t2)+'</td>';
              html_tbm_riego += '                          <td class="text-center">'+(t3)+'</td>';
              html_tbm_riego += '                        </tr>';
              html_tbm_riego += '                      </tbody>';
              html_tbm_riego += '                    </table>';
              html_tbm_riego += '';
              html_tbm_riego += '                  </div>';

          $("#dv_tablam_riesgo_mun_zona").append(html_tbm_riego);
		break;


		default:

		break;

		}

    var html_tb_riego='';
    html_tb_riego +='<div class="row">';
    html_tb_riego +='  <div class="col-sm-6">';
    html_tb_riego+='    <table id="tabla_pie_info" class="table table-gray table-hover">';
    html_tb_riego+='      <thead>';
    html_tb_riego+='        <tr>';
    html_tb_riego+='          <th class="text-center">Total</th>';
    html_tb_riego+='          <th class="text-center">Muy Alto</th>';
    html_tb_riego+='          <th class="text-center">Alto</th>';
    html_tb_riego+='          <th class="text-center">Medio</th>';
    html_tb_riego+='          <th class="text-center">Bajo</th>';
    html_tb_riego+='        </tr>';
    html_tb_riego+='      </thead>';
    html_tb_riego+='      <tbody>';
    html_tb_riego+='        <tr>';
    html_tb_riego+='          <td class="text-center" style="font-size:1.2em; font-weight:500;">'+(q1+q2+q3+q4)+'</td>';
    html_tb_riego+='          <td class="text-center" style="background-color:#FF0000; color:white; font-size:1.2em; font-weight:600;">'+(q1)+'</td>';
    html_tb_riego+='          <td class="text-center" style="background-color:#FF9900; font-size:1.2em; font-weight:500;">'+(q2)+'</td>';
    html_tb_riego+='          <td class="text-center" style="background-color:#FFFF00; font-size:1.2em; font-weight:500;">'+(q3)+'</td>';
    html_tb_riego+='          <td class="text-center" style="background-color:#3CB371; font-size:1.2em; font-weight:500;">'+(q4)+'</td>';
    html_tb_riego+='        </tr>';
    html_tb_riego+='      </tbody>';
    html_tb_riego+='    </table>';
  html_tb_riego+='</div>';
html_tb_riego+='</div>';

$("#dv_tabla_riesgo_mun_zona").append(html_tb_riego);
  })
  .fail(function(e) {
    console.error("Error in "); console.table(e);
  })
  .always(function() {
  swal.close();
});

  // alert(id_minicipio);
  // obj_riesgo.get_Niveles();
});



Riesgo.prototype.get_Niveles =function(){
	$.ajax({
		url: base_url+'mapa/get_niveles',
		type: 'POST',
		dataType: 'JSON',
		data: {idmunicipio: $("#slt_municipio_mapa").val()},
		beforeSend: function(xhr) {
	        Notification.loading("");
	    },
	})
	.done(function(result) {
		obj_loader.hide();
		$("#slt_nivel_mapa").empty();
		$("#slt_nivel_mapa").append(result.options);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

}
