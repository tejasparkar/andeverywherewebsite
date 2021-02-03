<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Andeverywhere</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
      
           <meta charset="utf-8">
           <meta content="width=device-width, initial-scale=1.0" name="viewport">
         
           
           <meta content="" name="descriptison">
           <meta content="" name="keywords">
         
           <!-- Favicons -->
           <link href="{{ asset('assets/img/hero-logo.png') }}" rel="icon">
           <link href="{{ asset('assets/img/hero-logo.png') }}" rel="apple-touch-icon">
         
           <!-- Google Fonts -->
           <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

           <!-- Vendor CSS Files -->
           <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
           <link href="{{ asset('assets/vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
           <link href="{{ asset('assets/vendor/icofont/icofont.min.css') }}" rel="stylesheet">
           <link href="{{ asset('assets/vendor/boxicons/css/boxicons.min.css') }}" rel="stylesheet">
           <link href="{{ asset('assets/vendor/venobox/venobox.css') }}" rel="stylesheet">
           <link href="{{ asset('assets/vendor/owl.carousel/assets/owl.carousel.min.css') }}" rel="stylesheet">
           <link href="{{ asset('assets/vendor/aos/aos.css') }}" rel="stylesheet">
         
           <!-- Template Main CSS File -->
           <link href="{{ asset('assets/css/style.css') }}" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
        </head>
    <body >
        
        <div class="flex-center position-ref full-height ">
            <!-- ======= Hero Section ======= -->
           
           
            
    
    <!--===============START OF SVG======================== -->
    <div id="HeaderMark"></div>

    </div>
  
    
    
    
    
    <!--================End of SVB-->
    
    
  </main>
  

  </div>
  <div class="loader-wrapper">
    <span class="loader"><span class="loader-inner"></span></span>
  </div>
  <script>
     $("body").addClass("disable-scroll");
    
      $(window).on("load",function(){
      $(".loader-wrapper").fadeOut("slow");
      $("body").removeClass("disable-scroll").addClass("body");
      $("body").slideDown("slow")
    });
   
</script>
       
       
        <script defer src="{{ asset('js/app.js') }}"></script>
        
       
        
  <!-- Vendor JS Files -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js" integrity="sha512-HzAEuXwhLxwm/Jj+5ecdjzrRVrjuh2ZeIxyT1Ln37TO5pWNMnKBuU7cfd1wvRQ/k86w1oC174Yk1T7aRlBpIcA==" crossorigin="anonymous"></script>
    <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
  <script src="{{ asset('assets/vendor/jquery/jquery.min.js') }}"></script>
  <script src="{{ asset('assets/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
  <script src="{{ asset('assets/vendor/jquery.easing/jquery.easing.min.js') }}"></script>
  <script src="{{ asset('assets/vendor/php-email-form/validate.js') }}"></script>
  <script src="{{ asset('assets/vendor/jquery-sticky/jquery.sticky.js') }}"></script>
  <script src="{{ asset('assets/vendor/venobox/venobox.min.js') }}"></script>
  <script src="{{ asset('assets/vendor/isotope-layout/isotope.pkgd.min.js') }}"></script>
  <script src="{{ asset('assets/vendor/owl.carousel/owl.carousel.min.js') }}"></script>
  <script src="{{ asset('assets/vendor/aos/aos.js') }}"></script>
  
<script src="./app.js"></script>
  <!-- Template Main JS File -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.4/gsap.min.js"></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.4/ScrollTrigger.min.js"></script>
  <script src="assets/js/main.js"></script>
  <script src="{{ asset('js/timelineanim.js') }}"></script>
  <script>
      
  </script>
    </body>
</html>
