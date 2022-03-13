// UI logic
console.log('This is your master');
let d = document;

//Description section toggle
$(document).ready(function(){
    $('#flip-design').click(function(){
        $('#panel-design').fadeToggle('slow', 'linear');        
    });
});

$(document).ready(function(){
    $('#flip-dev').click(function(){
        $('#panel-dev').fadeToggle('slow', 'linear');        
    });
});

$(document).ready(function(){
    $('#flip-product').click(function(){
        $('#panel-product').fadeToggle('slow', 'linear');        
    });
});


//Images hover effect
$(document).ready(function(){
    $('.child-image-1').hover(function(){
        $('.child-image-1').show();
    })
})


//Business Logic

$(document).ready(function(){
    $('#clickbtn').click(function(event){
        submitForm(event);
});
});

function submitForm(event){

    event.preventDefault();

    let mailText = document.querySelector('#message').value;
    let userId = document.querySelector('#userName').value;
    let emailAddress = document.querySelector('#userMail').value;
    
    ;

    if (mailText == '' && emailAddress == '') {
        alert ('Enter a valid email address and type a message in the text box')
    }
    if (mailText !== '') {
        alert ((userId) + ' we have recieved your message. Thank you for reaching out to us')
    }
} 
