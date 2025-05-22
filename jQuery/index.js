// $ = document.querySelector
$("h1").css("color","yellow");

//class
$("h1").addClass("btn-style");
$("h1").removeClass("btn-style");
console.log($("h1").hasClass("btn-style"));

//text
$("h1").text("kavita");

$("h1").addClass("btn-style margin-60");
console.log($("h1").attr("class"));

//eventlistener
$("h1").click(function(){
    $("h1").css("color","green");
})

//before
for(let i = 0; i<document.querySelectorAll(".btn").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
    document.querySelector("h1").style.color ="red";
});
}
//after
$(".btn").click(function(){
    $("h1").css("color","purple")
})

$("input").keydown(function(event){
    $("h1").text(event.key);
})

$("h1").on("mouseover",function(){
    $("h1").css("color","grey")
})


//before after prepend append
$("h1").before("<button>Click</button>") //before h1 tag
$("h1").after("<button>Click</button>")  //after h1 tag
$("h1").prepend("<button>Click</button>") //after h1 opening tag before content
$("h1").append("<button>Click</button>") //after h1 content ,before h1 closing tag

// $("button").remove();