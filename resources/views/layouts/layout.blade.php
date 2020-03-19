<!doctype html>

<html lang="en">

@include('layouts.head')

<body class='spwp-body'>

  <div class="stm-absolute-wrap" id="loader-wrap">
    <div class="loader"></div>
  </div>

  <div class="body-inner">

    @include('layouts.header')

    <div class="content">

      @yield('content')

    </div>

  </div>

  @include('layouts.footer')

  @include('layouts.scripts')

  @yield('page-script')

</body>

</html>
