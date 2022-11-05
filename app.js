// $( "#target" ).submit(function( event ) {
//     alert( "Handler for .submit() called." );
//     event.preventDefault();
//   });



// let submit_htu = $("#submit_htu");

// item_name.on("change", function(even){
//     console.log(even.target.value);
// });

// quantity_number.on("change", function(even){

//     console.log(even.target.value);
// });

// submit_htu.on("click", function(){

//     console.log(item_name.value);
//     console.log(quantity_number.value);
// });

$('#save').on('click', function (e) {
    let item_name = $("#item_select").val();
    let quantity_number = $("#qu_number").val();
    var count = $('#myTable tr').length;
    if (item_name != "" && quantity_number != "") {
        $('#myTable tbody').append('<tr class="child"><td>' + count + '</td><td>' + item_name + '</td><td>' + quantity_number + '</td></tr>');
    }
    e.preventDefault();
});







