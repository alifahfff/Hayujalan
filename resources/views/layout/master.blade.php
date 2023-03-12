@include('layout.header')
  <!-- Preloader -->
  <div class="preloader flex-column justify-content-center align-items-center">
    <img class="animation__shake" src="{{asset('template/dist/img/AdminLTELogo.png')}}" alt="AdminLTELogo" height="60" width="60">
  </div>
@include('layout.navbar')

@include('layout.sidebar')
  
@include('layout.content')

@include('layout.footer')
 