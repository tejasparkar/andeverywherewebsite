@component('mail::message')
# Introduction

Thanks for suscribing to our cool application

<h1>Tejas Parkar</h1>
<img src="{{ asset('assets/img/logo-black.png') }}" alt="">
Thanks,<br>
{{ config('app.name') }}
@endcomponent
