console.log('This is your master');
let d = document;

$(document).ready(function(){
    $('#flip-design').click(function(){
        $('#panel-design').fadeToggle('slow','linear');        
    });
});

$(document).ready(function(){
    $('#flip-dev').click(function(){
        $('#panel-dev').fadeToggle('slow', 'linear');        
    });
});

$(document).ready(function(){
    $('#flip-product').click(function(){
        $('#panel-product').fadeToggle('slow','linear');        
    });
});
event.preventDefault();

