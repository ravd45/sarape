<?php $i=0;
foreach ($temas as $key => $dato){
	if (!stristr($dato, '/ 0')) {	
		$i++;
		?>
		<div class="accordion accordion-style-1" id="accordionExample">
			<div class="card mb-3">
				<div class="card-header collapsed" id="headingOne" data-toggle="collapse" data-target="#collapse<?=$i?>" aria-expanded="false" aria-controls="collapse" style="cursor: pointer;" onclick="getFormatoTema(<?=$i;?>, '<?=$nivel;?>')">
					<i class="fas fa-clipboard-list mr-2"></i> <span class="second-txt"><?= $dato?></span>
				</div>
				
				<div id="collapse<?= $i?>" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
					<div class="card-body p-0">
						<div class="tab-content tab-content-style-1" id="myTabContent">
							<div class="tab-pane fade show active" id="encuestas" role="tabpanel" aria-labelledby="encuestas-tab">
								<div class="row">
									<div class="col">
										<table class="table table-striped table-hover">
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">Nombre del documento</th>
													<th scope="col">Tipo</th>
													<th scope="col">Ver</th>
												</tr>
											</thead>
											<tbody id="tabla_documentos_tema<?=$i?>">
												

											</tbody>
										</table>
									</div>

								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<?php } else{
	$i++;
}
} ?>