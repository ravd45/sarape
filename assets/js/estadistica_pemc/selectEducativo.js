$('#nivel_educativo_grid_general').change(function() {
	Notification.loading("");
	getEstadistica();

});

$('#nivel_educativo_LAE').change(function() {

        $('#region_LAE option:selected').val(0);
        $('#municipio_LAE option:selected').val(0);
	Notification.loading("");
	getEstadisticaLAE();

});

$('#region_LAE').change(function() {
	$('#municipio_LAE option:selected').val(0);
	Notification.loading("");
   $('#sostenimiento_LAE').val(0);
   $('#zona_LAE').val(0);
   getEstadisticaLAE();
  

});

$('#municipio_LAE').change(function() {
	Notification.loading("");
   $('#sostenimiento_LAE option:selected').val();
   $('#zona_LAE option:selected').val();
   getEstadisticaLAE();

});

$('#zona_LAE').change(function() {
	Notification.loading("");
   $('#region_LAE').val(0);
   $('#municipio_LAE').val(0);
   getEstadisticaLAE();

});

$('#sostenimiento_LAE').change(function() {
	Notification.loading("");
   $('#region_LAE').val(0);
   $('#municipio_LAE').val(0);
   getEstadisticaLAE();
});

$('#zona_zona').change(function() {
	Notification.loading("");
   getTablaZona();

});

$('#sostenimiento_zona').change(function() {
	Notification.loading("");
   $('#zona_zona').val(0);
   getTablaZona();
});

$('#nivel_educativo_zona').change(function() {
	Notification.loading("");
   getTablaZona();
});

