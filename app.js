var count=0;

$(".Increase").click(function update(){
   count++;
   $("#value").text(count);

 });
$(".decrease").click(function update(){
  count--;
  $("#value").text(count);
  $("#value").css("color","red");

});

$(".Reset").click(function update(){
  count=0;
  $("#value").text(count);

});

 
