
$(document).ready(function() {
   	obj_prioridad = new Prioridad();
   $("#div_resultados_gral").hide();
$('[data-toggle="tooltip"]').tooltip({
    trigger : 'hover'
	});

});

	$("#nav-tab").click(function (e) {
		e.preventDefault()
        var id = e.target.id;
        // console.log(id);
        if(id =="nav-resultados-tab"){
        	$("#nombreescuela_pemc").val("");
        	$("#div_resultados_gral").show();
        	accionesRezagadas(); 
	   		datos_accion();
		   	// datos_laepie();
		   	// datos_objetivopie();
		   	// datos_accionpie();	
   		}else if(id!="nav-resultados-tab"){
   			// console.log(id);
   			$("#div_resultados_gral").hide();
   			// $("#div_busxcct_pemc").empty();	  
   		}
	});

$('#salir').click(function(){
	$('#myModal').modal('toggle');
	if ($('.modal-backdrop').is(':visible')) {
	  $('body').removeClass('modal-open');
	  $('.modal-backdrop').remove();
	};
})

$("#btn_mision").click(function(e){
	e.preventDefault()
	var ruta = base_url + 'Rutademejora/modal_mision'
	$.ajax({
		url:ruta,
		data: { },
		beforeSend: function(xhr) {
	      Notification.loading("");
    }
	})
	.done(function(data){
		$("#div_generico").empty();
    $("#div_generico").append(data.strView);

		$('h5').empty();
		$('h5').append(data.titulo);
    $("#myModal").modal("show");
	})
	.fail(function(e) {
    console.error("Error in ()"); console.table(e);
  })
	.always(function() {
    swal.close();
  });
})

$("#img_mision").click(function(e){
	e.preventDefault()
	if($("#tipou_pemc").length){

	}else{
		var ruta = base_url + 'Rutademejora/modal_mision'
		$.ajax({
			url:ruta,
			data: { },
			beforeSend: function(xhr) {
		      Notification.loading("");
	    	}
		})
		.done(function(data){
			$("#div_generico").empty();
	    	$("#div_generico").append(data.strView);
			$('h5').empty();
			$('h5').append(data.titulo);
	    	$("#myModal").modal("show");
		})
		.fail(function(e) {
	    	console.error("Error in ()"); console.table(e);
	  	})
		.always(function() {
	    	swal.close();
	  	});
	}
});

$("#id_tabla_rutas tr:gt()").click(function () {
    console.log('header de la tabla jeje');
    var selected = $(this).hasClass("highlight");

    $("#data tr").removeClass("highlight");

    if (!selected) {
        $(this).addClass("highlight");
    }

});

//Prioridad (incompleto)
$("#btn_prioridad").click(function(e){
	e.preventDefault();
	
	if(obj.id_tprioritario == undefined || obj.id_tprioritario == ''){
		swal(
        '¡Error!',
        "Selecciona una línea de acción para editar",
        "error"
      );
    return false;
	} else{
		//console.log(obj);
		var ruta = base_url + 'Rutademejora/get_datos_edith_tp'
		$.ajax({
			url:ruta,
			type:'post',
			data: { 
				"id_tprioritario": obj.id_tprioritario,
				"id_prioridad": obj.id_prioridad,
				"id_subprioridad": obj.id_subprioridad,
                "accion": obj.accion,
                "txttp": obj.txttp
			},
			beforeSend: function(xhr) {
			      Notification.loading("");
		    }
		}).done(function(data){
				
			$("#div_generico").empty();
		    $("#div_generico").append(data.strView);
		    // $('.problematica').selectpicker('val', data.data['problematica'].split(','));
		    // $('.problematicaTxt').text( data.data['problematica']);
		    // if (data.data.ambito != null) {
		    // 	// console.log(data.data.ambito);
		    // $('.problematica').val(data.data.ambito);
		    // }
		    // $('#evidencias').val("");
		    // $('#txt_rm_obs_direc').val("");
		    let tipou_pemc="";
			$('h5').empty();
			$('h5').append(data.titulo);
		    $("#myModal").modal("show");
		    if($('#tipou_pemc').length) {
				$("#grabar_prioridad").hide();
				$("#grabar_objetivo").hide();
				$("#btn_eliminar").hide();
				$('.problematica').selectpicker('hide');
				tipou_pemc=$('#tipou_pemc').val();
			}  
        	obj_prioridad.getObjetivos(obj.id_tprioritario);

		}).fail(function(e) {
		    console.error("Error in get_datos_edith_tp()");
		}).always(function() {
		    swal.close();
				// $("#myModal").modal("hide");
		});
	}
});

//Actividades
$("#btn_actividades").click(function(e){
	e.preventDefault()
	var ruta = base_url + 'Rutademejora/modal_actividades'
	$.ajax({
		url:ruta,
		data: { },
		beforeSend: function(xhr) {
	      Notification.loading("");
    }
	})
	.done(function(data){
		$("#div_generico").empty();
    $("#div_generico").append(data.strView);

		$('h5').empty();
		$('h5').append(data.titulo);
    $("#myModal").modal("show");
	})
	.fail(function(e) {
    console.error("Error in ()"); console.table(e);
  })
	.always(function() {
    swal.close();
  });
});



///
Prioridad.prototype.getObjetivos = function(id_tprioritario){
	// var idtemaprioritario = obj.id_tprioritario ;
	 let tipou_pemc="";
		if($('#tipou_pemc').length) {
			$("#grabar_prioridad").hide();
			$("#grabar_objetivo").hide();
			$("#btn_eliminar").hide();
			$('.problematica').selectpicker('hide');
			tipou_pemc=$('#tipou_pemc').val();
		}
	console.log(tipou_pemc);
	if(obj.id_tpriotario != 0){
	//console.log(obj.id_tprioritario);
		$.ajax({
			url: base_url+'Rutademejora/getObjetivos',
			type: 'POST',
			dataType: 'JSON',
			data: {	id_tpriotario: obj.id_tprioritario,
					id_prioridad: obj.id_prioridad,
					id_subprioridad: obj.id_subprioridad,
					tipou_pemc:tipou_pemc,
			},
			beforeSend: function(xhr) {
		        Notification.loading("");
	    	},
		})
		.done(function(result) {
			$("#objetivo_meta").empty();
			$("#objetivo_meta").append(result.table);

			 for (var i = result.encabezado.length - 1; i >= 0; i--) {
			
             $("#problematicaSelect option[value="+result.encabezado[i]['problematica']+"]").prop("selected",true);
			 }

			$('#tema_prioritario').val(result.id_tprioritario);
			$('#id_objetivo').val(result.id_objetivo);
			if (result.id_objetivo == 0) {
				$('.problematicaTxt').empty();
				$('#evidencias').empty();
				$('#txt_rm_obs_direc').empty();
			}
			// console.log(result.id_objetivo);
			obj_prioridad.funcionalidadselect();
			// obj_prioridad.btnEditar();
			// btnEditar();
		})
		.fail(function(e) {
			console.error("Error in getObjetivos()");
		})
		.always(function() {
	    swal.close();
		});
	}
}

//grid objetivos
Prioridad.prototype.funcionalidadselect = function(){
	$("#id_tabla_objetivos tr").click(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		var value = $(this).find('td:first').text();
     	var t_prioritario = $(this).find('td:first').next().text();
		obj.id_objetivo = value;
		obj.id_tprioritario = t_prioritario;
		
		id_objetivo = 0;
	});
}


	function datos_accion(){
		// console.log("llego a la funcion de datos accion");
		let id_cct_rm=$("#id_cct_rm").val();
		if(id_cct_rm!=""){
			$.ajax({
			    url: base_url+'Rutademejora/avancesxcctxaccion',
			    dataType : 'json',
			    method : 'POST',
			    data : {"id_cct":id_cct_rm},
			    beforeSend: function(xhr){
			      	Notification.loading("");
			    },
			    success: function(data){
			      	swal.close();
			      	$("#mensaje_res_acciones").empty();
			      	$('#gantt_p').empty();
			      	$("#tabla_avances").empty();
			      	if(data.datos.length>0){
			      		$("#chart_div").show();
			      		$('#gantt_p').append(data.dom);
			      		// pintaGrafica(data.datos,data.fechaMin,data.fechaMax);
			      		    $('#demo').gantt({
						      data: data.acciones,
						      startDate: new Date(data.fechaMin),
						      endDate: new Date(data.fechaMax),
						    });

						let tabla="";
						$("#tabla_avances").empty();
						tabla+="<center>";
						tabla+='<table class="table table-striped table-bordered w-auto">';
			            tabla+='<thead class="thead-dark">';
						tabla+='<tr>';
						tabla+='<th scope="col" ><center>Acción</center></th>';
						tabla+='<th scope="col" ><center>Porcentaje</center></th>';
						tabla+='<th scope="col" ><center>Fecha Inicio</center></th>';
						tabla+='<th scope="col" ><center>Fecha Término</center></th>';
						tabla+='</tr>';
						tabla+='</thead>';
						tabla+='<tbody>';
						let p=0;
						// console.log(data.acciones);
						if(data.datos.length>0){
						    for(let x=0; x <data.datos.length; x++){
						    	let p=0;
						        tabla+='<tr>';
						        tabla+='<td>';
						        tabla+=data.datos[x]['accion'];
						        tabla+='</td>';
						        tabla+='<td>';
						        if(data.datos[x]['porcentaje']!=0 && data.datos[x]['porcentaje']!=null){
						        	p=data.datos[x]['porcentaje'];
						        }

						        tabla+=p+"%";
						        tabla+='</td>';
						        tabla+='<td>';
						        tabla+=data.datos[x]['fechainicio'];
						        tabla+='</td>';
						        tabla+='<td>';
						        tabla+=data.datos[x]['fechafin'];
						        tabla+='</td>';
						        tabla+='</tr>';
						    }
						        	
						}else{
						    $("#mensaje_res_acciones").append('<br><h3 align="center" class="panel-title">Esta escuela no cuenta con acciones</h1><br>');
						}
						
						tabla+='</tbody>';
			          	tabla+='</table>';
			          	tabla+='</center>';
			        	// $("#tabla_avances").append(tabla);
					}else{
						// $("#chart_div").hide();
						$("#mensaje_res_acciones").append('<br><h3 align="center" class="panel-title">Esta escuela no cuenta con acciones</h1><br>');
					}
			        
			    },
			    error: function(error){
			      swal.close();
			      console.log(error);
			    }
			});
		}else{
			alert("Ocurrio un error al cargar los datos de avances de acciones");
		}

	}





   	function datos_accionpie(){
		let id_cct_rm=$("#id_cct_rm").val();
		if(id_cct_rm!=""){
			$.ajax({
			    url: base_url+'Rutademejora/pieAccion',
			    dataType : 'json',
			    method : 'POST',
			    data : {"id_cct":id_cct_rm},
			    beforeSend: function(xhr){
			      	Notification.loading("");
			    },
			    success: function(data){
			      	swal.close();
			        google.charts.setOnLoadCallback(pieAccion(data.datos));
			    },
			    error: function(error){
			      swal.close();
			      console.log(error);
			    }
			});
		}else{
			alert("Ocurrio un error al cargar los datos");
		}

	}

	function datos_objetivopie(){
		let id_cct_rm=$("#id_cct_rm").val();
		if(id_cct_rm!=""){
			$.ajax({
			    url: base_url+'Rutademejora/pieObjetivos',
			    dataType : 'json',
			    method : 'POST',
			    data : {"id_cct":id_cct_rm},
			    beforeSend: function(xhr){
			      	Notification.loading("");
			    },
			    success: function(data){
			      	swal.close();

			        google.charts.setOnLoadCallback(pieObjetivos(data.datos));
			    },
			    error: function(error){
			      swal.close();
			      console.log(error);
			    }
			});
		}else{
			alert("Ocurrio un error al cargar los datos");
		}

	}

	function datos_laepie(){
		let id_cct_rm=$("#id_cct_rm").val();
		if(id_cct_rm!=""){
			$.ajax({
			    url: base_url+'Rutademejora/pieLAE',
			    dataType : 'json',
			    method : 'POST',
			    data : {"id_cct":id_cct_rm},
			    beforeSend: function(xhr){
			      	Notification.loading("");
			    },
			    success: function(data){
			      	swal.close();
			        google.charts.setOnLoadCallback(pieLAE(data.datos));
			    },
			    error: function(error){
			      swal.close();
			      console.log(error);
			    }
			});
		}else{
			alert("Ocurrio un error al cargar los datos");
		}
	}

    function pieAccion(datos) {
    	let c=100-datos[0]['porcentaje'];
    	var data = new google.visualization.DataTable();
            data.addColumn('string', 'Browser');
            data.addColumn('number', 'Percentage');
            data.addRows([
                ['Capturadas',parseInt(datos[0]['porcentaje'])],
         		['No capturadas',parseInt(c)]
            ]);
        let options = {
          title: '',
          colors: ['#F47D4A', '#E1315B']
        };

        $("#div_acc_graf").empty();
        var chart = new google.visualization.PieChart(document.getElementById('div_acc_graf'));

        chart.draw(data, options);
    }

    function pieObjetivos(datos) {
    	let c=100-datos[0]['porc'];
        // var data = google.visualization.arrayToDataTable([
        // 	['Objetivos', 'Avance Objetivos'],
        //   	['Capturadas',datos[0]['porc']],
        //   	['No capturadas',c]
        // ]);
        var data = new google.visualization.DataTable();
            data.addColumn('string', 'Browser');
            data.addColumn('number', 'Percentage');
            data.addRows([
                ['Capturadas',parseInt(datos[0]['porc'])],
         		['No capturadas',parseInt(c)]
            ]);
        let options = {
          title: '',
          colors: ['#FA812A', '#FAAF08']
        };
        $("#div_obj_graf").empty();
        let chart = new google.visualization.PieChart(document.getElementById('div_obj_graf'));

        chart.draw(data, options);
    }

    function pieLAE(datos) {
    	let c=100-datos[0]['porc_p'];
      	var data = new google.visualization.DataTable();
            data.addColumn('string', 'Titulo');
            data.addColumn('number', 'Porcentaje');
            data.addRows([
                ['Capturadas',parseInt(datos[0]['porc_p'])],
         		['No capturadas',parseInt(c)]
            ]);

        let options = {
          title: '',
          colors: ['#2C7873', '#6FB98F']
           };
        $("#div_lae_graf").empty();
        let chart = new google.visualization.PieChart(document.getElementById('div_lae_graf'));

        chart.draw(data, options);
    }

    function accionesRezagadas(){
		let id_cct_rm=$("#id_cct_rm").val();
		if(id_cct_rm!=""){
			$.ajax({
			    url: base_url+'Rutademejora/accionesRezagadas',
			    dataType : 'json',
			    method : 'POST',
			    data : {"id_cct":id_cct_rm},
			    beforeSend: function(xhr){
			      	Notification.loading("");
			    },
			    success: function(data){
			      	swal.close();

			    	let acciones=[];
			    	let acciones1=[];
			    	if(data.datos.length>0){
			    		for(let i=0; i<data.datos.length; i++){
							if (data.datos[i]['dias_restantes_hoy'] >= 0) {
								if (data.datos[i]['dias_restantes'] >= data.datos[i]['dias_restantes_hoy']) {
								    if (data.datos[i]['porcentaje'] == 0) {
								      acciones1.push(data.datos[i]);
								    }
									if (data.datos[i]['porcentaje'] <= 66) {
								      	acciones.push(data.datos[i]);
								      	// console.log("entro en la linea 550");
								    }else{
								      	if (data.datos[i]['porcentaje'] >= 67 && data.datos[i]['porcentaje'] <= 89) {
								      		acciones1.push(data.datos[i]);
									    }else{
									      	if (data.datos[i]['porcentaje'] >= 90 && data.datos[i]['porcentaje'] <= 99) {
									       		acciones1.push(data.datos[i]);
									     	}else{
									      		if (data.datos[i]['porcentaje'] == 100) {
									       			acciones1.push(data.datos[i]);
									     		}
									   		}
									 	}
									}
								}else{
								  	if (data.datos[i]['dias_restantes']>= data.datos[i]['dias_restantes_hoy']) {
									    if (data.datos[i]['porcentaje'] == 0) {
									      	acciones1.push(data.datos[i]);
									    }
									    if (data.datos[i]['porcentaje'] <= 33) {
									     	acciones.push(data.datos[i]);
									     	// console.log("entro en la linea 571");
									   	}else{
										    if (data.datos[i]['porcentaje'] >= 33 && data.datos[i]['porcentaje'] <= 66) {
										      	acciones1.push(data.datos[i]);
										    }else{
										      	if (data.datos[i]['porcentaje'] >= 67 && data.datos[i]['porcentaje'] <= 99) {
										        	acciones1.push(data.datos[i]);
										      	}else{
										        	if (data.datos[i]['porcentaje'] == 100) {
										          		acciones1.push(data.datos[i]);
										        	}
										      	}
										    }
									  	}

									}else{
									  if (data.datos[i]['dias_restantes'] >= data.datos[i]['dias_restantes_hoy']) {
										    if (data.datos[i]['porcentaje'] == 0) {
										      	acciones1.push(data.datos[i]);
										    }
										    if (data.datos[i]['porcentaje'] >= 1 && data.datos[i]['porcentaje'] <= 33) {
										      	acciones1.push(data.datos[i]);
										    }else{
											    if (data.datos[i]['porcentaje'] >= 34 && data.datos[i]['porcentaje'] <= 66) {
											      	acciones1.push(data.datos[i]);
											    }else{
											      	if (data.datos[i]['porcentaje'] >= 67 && data.datos[i]['porcentaje'] <= 99) {
											        	acciones1.push(data.datos[i]);
											      	}else{
											        	if (data.datos[i]['porcentaje'] == 100) {
											          		acciones1.push(data.datos[i]);
											        	}
											      	}
											    }
										  	}
										}else{
									      	acciones1.push(data.datos[i]);
									    } 
									}
								}
							}else{
						    	acciones.push(data.datos[i]);
						    	// console.log("entro en la linea 613");
							}  	
			    		}
			    	}

			    	let tabla="";
			    	$("#div_acc_rez").empty();
			    	$("#mensaje_res_rezagadas").empty();
			    	if(acciones.length>0){
				    	tabla+="<center>";
				    	tabla+='<table class="table table-striped table-bordered w-auto">';
	            		tabla+='<thead class="thead-dark">';
					    tabla+='<tr>';
						tabla+='<th scope="col" ><center>Acción</center></th>';
						tabla+='<th scope="col" ><center>Porcentaje</center></th>';
						tabla+='<th scope="col" ><center>Fecha Inicio</center></th>';
						tabla+='<th scope="col" ><center>Fecha Término</center></th>';
					    tabla+='</tr>';
				        tabla+='</thead>';
				        tabla+='<tbody>';
				        let porcentaje=0;
				        	for(let x=0; x <acciones.length; x++){
				        		tabla+='<tr>';
				        		tabla+='<td>';
				        		tabla+=acciones[x]['accion'];
				        		tabla+='</td>';
				        		tabla+='<td>';
				        		if(acciones[x]['porcentaje']!="" || acciones[x]['porcentaje']!=null || acciones[x]['porcentaje']!='null'){
				        			porcentaje=acciones[x]['porcentaje'];
				        		}else{
				        			porcentaje=0;
				        		}
				        		tabla+=porcentaje+"%";
				        		tabla+='</td>';
				        		tabla+='<td>';
				        		tabla+=acciones[x]['f_inicio'];
				        		tabla+='</td>';
				        		tabla+='<td>';
				        		tabla+=acciones[x]['f_termino'];
				        		tabla+='</td>';
				        		tabla+='</tr>';
				        	}
				        	
				        
				        tabla+='</tbody>';
	          			tabla+='</table>';
	          			tabla+='</center>';
	          			$("#div_acc_rez").append(tabla);
	          			$("#div_rezagadas").show();
          			}else{
          				// console.log("llego en la linea 633");
          				// $("#div_rezagadas").hide();
          				$("#mensaje_res_rezagadas").append('<br><h3 align="center" class="panel-title">Esta escuela no cuenta con acciones rezagadas</h1><br>');         				
          			}
			    },
			    error: function(error){
			      swal.close();
			      console.log(error);
			    }
			});
		}else{
			alert("Ocurrio un error al cargar los datos");
		}
	}

  
