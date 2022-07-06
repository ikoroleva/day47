@extends('layouts/main')

@section('content')

<h1>Mission app blade</h1>
<div id="root"></div> 

<script src="{{ mix("/js/missions.js") }}"></script>

@endsection