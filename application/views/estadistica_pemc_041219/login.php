<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>SARAPE - Login</title>
    <link href="https://fonts.googleapis.com/css?family=Boogaloo" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:400,400i,500,500i,800,800i" rel="stylesheet">        
	<link href="<?= base_url('assets/bootstrap-411/css/bootstrap.min.css'); ?>" rel="stylesheet" media="screen">
	<link href="<?= base_url('assets/css/login.css'); ?>" rel="stylesheet" media="screen">         
</head>
<body>
    <div class="container-login" style="background-image: url('<?= base_url('assets/img/jumbo-bg1.jpg');?>');">
    	<div class="wrap-login">
	        <div class="login-form validate-form">
	        		<div class="card" >
					  <div class="card-body">
                                              <center>   
                                            <img class="img-fluid" src="<?= base_url('assets/img/logo.png'); ?>" alt="">  
                                            <h3 class="card-title mt-3">Iniciar Sesión</h3>
                                            <h5 style="color:red;
                                            "><?=$error?></h5>
                                              </center>
                			            <?= form_open('estadistica_pemc/login_action');?>
						  <div class="form-group">
						    <?= form_label('Usuario', 'usuario') ?>
                                                    <?= form_input('usuario', '', array('id' => 'usuario', 'class'=>'form-control', 'required'=>'required', 'autofocus'=>'autofocus')) ?>
						  </div>
						  <div class="form-group">
						    <?= form_label('Contraseña', 'password') ?>
                                                    <?= form_password('password', '', array('id' => 'password', 'class'=>'form-control')) ?>
						  </div>
                                              <div class="text-center">
						  <button type="submit" class="btn btn-primary btn-login center">Iniciar Sesión</button>
                                                    <?= form_close() ?>
                                                  </div>
					  </div>
				</div>

	        </div>
	    </div>
    </div><!-- /container -->
	<script src="<?= base_url('assets/jquery-3.3.1.min.js'); ?>"></script>
	<script src="<?= base_url('assets/bootstrap-411/js/bootstrap.min.js'); ?>"></script>
  
</body>
</html>