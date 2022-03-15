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

//hoverable images
// function portfolioImagesHover(){
//     $(".image-title").hide();
//     $(".image-description").hover(function(){
//         $(this).find("image-title").toggle();
//     });
// }

$(".image-description-1").hover(function(){
    $('.image-title-1').toggle();
});

$(".image-description-2").hover(function(){
    $('.image-title-2').toggle();
});

$(".image-description-3").hover(function(){
    $('.image-title-3').toggle();
});
$(".image-description-4").hover(function(){
    $('.image-title-4').toggle();
});

$(".image-description-5").hover(function(){
    $('.image-title-5').toggle();
});

$(".image-description-6").hover(function(){
    $('.image-title-6').toggle();
});

$(".image-description-7").hover(function(){
    $('.image-title-7').toggle();
});

$(".image-description-8").hover(function(){
    $('.image-title-8').toggle();
});

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
    

    if (mailText == '' && emailAddress == '') {
        alert ('Enter a valid email address and type a message in the text box')
    }
    if (mailText !== '') {
        alert ((userId) + ' we have recieved your message. Thank you for reaching out to us')
    }
} 
