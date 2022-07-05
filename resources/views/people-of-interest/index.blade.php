 @extends('layouts.main')

 @section('content')
{{--  
    <div class="welcome">
         <h1>People of interest by controller</h1>
         @foreach ($people as $person)
            <p>{{$person->name }} is {{ $person->occupation}}</p>      
            <p> Known aliases:
                <ul>
                 @foreach ($person->aliases as $alias)
                     <li> {{$alias->alias}}</li>   
                 @endforeach   
                </ul>
                                    
         @endforeach

         
    </div> --}}
 
   <div id="root"></div> 

<script src="{{ mix("/js/people-of-interest.js") }}"></script>

@endsection