
var url = 'https://wallet.cryptoxchange.com/api/';


// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  
  // bind events
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
    player.playVideo();
  });
  
  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
  });

  var stopButton = document.getElementById("stop-button");
  stopButton.addEventListener("click", function() {
    player.stopVideo();
  });
  
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(document).ready(function () {

    /*    if($( window ).width()<=768){
           $(".sidenav").css("display","block");
          }
    */



    $(".buy-list li").click(function () {
        $(".buy-list li").removeClass("activeClass");
        $(this).addClass("activeClass");

        $('html, body').animate({
            scrollTop: $("#payment-list-section").offset().top
        }, 2000);


        $(".select_options>span").removeClass("selected");


    })

    $(".nav-home-toggle").click(function () {
        $(".sidenav").toggle("slow").toggleClass("positioning");
    })

    $(".payment-list li").click(function () {
        $(".payment-list li").removeClass("activeClass");
        $(this).addClass("activeClass");

        $('html, body').animate({
            scrollTop: $("#calculator").offset().top
        }, 2000);

    })

    $(".owl-carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        dots: true,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1]
    });




    /*===Fancy Select===*/
    jQuery("body").on("click", ".select_triger", function (e) {
        var $this = jQuery(this);
        jQuery(this).parent(".fancy_select").find(".select_options").slideToggle();
    });
    $("body").on("click", ".select_options span", function (e) {
        var $this = jQuery(this);
        var text;
        var src;
        jQuery(".select_options span").removeClass("selected");
        jQuery(this).addClass("selected");
        text = jQuery(this).text();
        src = jQuery(this).find('img.absoluteLeft').attr('src');
        console.log(src);
        jQuery(this).parents(".fancy_select").find("span.text").text(text);
        jQuery(this).parents(".fancy_select").find("span.text").text(text);
        this.selectedOption = text;
        jQuery(this).parents(".fancy_select").find(".select_triger img").attr('src', src);
        jQuery(this).parents(".fancy_select").find(".select_options").slideUp();

        if (this.selectedOption == "BITCOIN") {
            self.tokenType = "Bitcoins";
            self.bitCoinCheck = true;
            self.ethereumCheck = false;
            self.liteCoinCheck = false;
            self.wireCheck = false;
            self.creditCardCheck = false;
        } else
            if (this.selectedOption == "LITECOIN") {
                self.tokenType = "LiteCoins";
                self.bitCoinCheck = false;
                self.ethereumCheck = false;
                self.liteCoinCheck = true;
                self.wireCheck = false;
                self.creditCardCheck = false;
            } else
                if (this.selectedOption == "ETHEREUM") {
                    self.tokenType = "Ethers";
                    self.bitCoinCheck = false;
                    self.ethereumCheck = true;
                    self.liteCoinCheck = false;
                    self.wireCheck = false;
                    self.creditCardCheck = false;
                } else
                    if (this.selectedOption == "WIRE TRANSFER") {
                        self.tokenType = "Ethers";
                        self.bitCoinCheck = false;
                        self.ethereumCheck = false;
                        self.liteCoinCheck = false;
                        self.wireCheck = true;
                        self.creditCardCheck = false;
                    } else
                        if (this.selectedOption == "CREDIT CARD") {
                            self.bitCoinCheck = false;
                            self.ethereumCheck = false;
                            self.liteCoinCheck = false;
                            self.wireCheck = false;
                            self.creditCardCheck = true;
                        }
        console.log(this.bitcoinCheck, self.ethereumCheck, this.litecoinCheck)
    });

    $('body').on("click", function (e) {
        if (jQuery(e.target).closest('.select_triger').length === 0) {
            jQuery(".fancy_select .select_options").slideUp();

        }
    });

    jQuery("body").on("click", ".color-select .select_options span", function (e) {
        var $this = $(this);
        var text;
        jQuery(".select_options span").removeClass("selected");
        jQuery(this).addClass("selected");
        text = jQuery(this).html();
        jQuery(this).parents(".fancy_select").find(".select_triger span").html(text);
        jQuery(this).parents(".fancy_select").find(".select_options").slideUp();
    });


});


function register() {

    var userRegisterFname = $("#fname").val();
    var userRegisterEmail = $("#email").val();
    var userRegisterLname = $("#lname").val();


    $(".errors-listing").html(" ");


    var error;
    if (userRegisterFname == "") {
        $(".errors-listing").append("<p>First Name is required!");


        error = true;
    }

    if (userRegisterEmail == "") {
        error = true;
        $(".errors-listing").append("<p>Email is required!");
    }

    if (userRegisterLname == "") {
        error = true;
        $(".errors-listing").append("<p>Last Name is required!");
    }

    if (error) {
        $(".errors-listing").show();
    } else {
        $(".errors-listing").hide();
    }



}

function login() {

    var userEmail = $("#login-user").val();
    var userPass = $("#login-pass").val();



    $(".errors-listing").html(" ");
    console.log(userEmail, userPass);

    var error;
    if (userEmail == "") {
        $(".errors-listing").append("<p>User email is required!");


        error = true;
    }

    if (userPass == "") {
        error = true;
        $(".errors-listing").append("<p>User password is required!");
    }

    if (error) {
        $(".errors-listing").show();
    } else {
        $(".errors-listing").hide();
    }
}
function showBuy() {
    $(".homepage-content").hide();
    $(".buy-section").show();
}


AOS.init();



// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


function toggleNav() {
    $(".sidenav").toggleClass("close-side");
    $(".main").toggleClass("close-left");
    $(".row-div-wrap1").toggleClass("row-dic-wrap");
}

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}



function sendNow() {

    toastr.remove();
    var error = false;
    var namee = document.getElementById("name").value;
    var emaail = document.getElementById("email").value;

    function validateEmail(emaail) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var test = re.test(String(emaail).toLowerCase());
        return test;
    }

    if (namee == "") {
        toastr["error"]("Enter Your Name");
        error = true;
    }

    if (namee.length > 20) {
        toastr["error"]("Name Should Not Be Greater Than Twenty Digits");
        error = true;
    }
    if (emaail == "") {
        toastr["error"]("Enter Your Email");
        error = true;
    }


    if (emaail != "" && !validateEmail(emaail)) {
        toastr["error"]("Enter Valid Email");
        error = true;
    }




    if (error) {

    }

    else {


        $('.loader').show();

        $.ajax({
            url: url+'customer/subscription',
            type: 'POST',
            data: { name: namee, email: emaail },
            async: false,
            success: function (data) {
                console.log(data);
                if (data.code == 200) {
                    $("#name").val("");
                    $("#email").val("");
                    $(".loader").hide();

                    setTimeout(() => {
                        $("#login-screen").hide();
                        $("#thank-you").show();
                    }, 2000);
                } else {
                    toastr["error"](data.message);
                    $(".loader").hide();
                }

            },
            error: function (error) {

                $(".loader").hide();
            }
        });


    }

}



function subscribeThisUser() {

    toastr.remove();
    var subscription_email = $('#subscription-email').val();

    var error = false;
    if (subscription_email == "") {
        error = true;
        toastr["error"]("Enter Your Email");
 
    }

    if(subscription_email !="" && !validateEmail(subscription_email) ){
        error = true;
        toastr["error"]("Enter a valid Email Address");
    }

    if(error){

    }else{



        $('.subscribe-loader').show();
        $('.subcribe-form').hide();
        $.ajax({
            url: url+'customer/subscribeUser',
            type: 'POST',
            data: { email: subscription_email },
            async: false,
            success: function (data) {
                console.log(data);
                if (data.code == 200) {

                    $("#subscription-email").val("");
                    $('.subscribe-loader').hide();
                    $('.subcribe-form').show();
                    toastr["success"]("You have successfully subscribed to our updates");
                } else {
                    toastr["error"](data.message);
                    $('.subscribe-loader').hide();
                    $('.subcribe-form').show();
                }

            },
            error: function (error) {
                console.log(error);
                toastr["error"](error.responseJSON.message);
                $('.subscribe-loader').hide();
                $('.subcribe-form').show();
            }
        });


    }


}


var subscriptionEmailInput = document.getElementById("subscription-email");
subscriptionEmailInput.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
    subscribeThisUser();
    }
});

function validateEmail(emaail) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var test = re.test(String(emaail).toLowerCase());
    return test;
}


function changeLanguage(language) {

    var translator = $('body').translate({ lang: language, t: dict }); //use English


} 