document.addEventListener('DOMContentLoaded', function(){
    var toggles = document.querySelectorAll('.nav-dropdown > a');
    toggles.forEach(function(toggle){
          toggle.addEventListener('click', function(e){
                  e.preventDefault();
                  e.stopPropagation();
                  var parent = toggle.parentElement;
                  var wasOpen = parent.classList.contains('open');
                  document.querySelectorAll('.nav-dropdown.open').forEach(function(d){ d.classList.remove('open'); });
                  if(!wasOpen){ parent.classList.add('open'); }
          });
    });
    document.addEventListener('click', function(){
          document.querySelectorAll('.nav-dropdown.open').forEach(function(d){ d.classList.remove('open'); });
    });
});
