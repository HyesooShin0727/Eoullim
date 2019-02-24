/*
$("form[linkChild] > input").on("change", function(){
	var o = $(this);
	var on = $(this).attr("name");
	$("form[linkForm] > input[name='" + on + "']").val(o.val());
})
*/

var linkFormInit;

$(function(){

	linkFormInit = function(){
		init();
	};

	init();

	function init(){

	    var sizeSelector;
	    var quantity;
	    var quaInterval;

		sizeSelector = $("select[name=sizeSelector]");

		sizeSelector.off("change");
		clearInterval(quaInterval);

		sizeSelector.on("change", function(){
			var ov = $(this).val();
			var ot = $("option[value=" + ov + "]", sizeSelector).eq(0).text();
			$("span.productExpression").text(ot);
			$("input[name=ProductSize]").val(ov);
			$("input[name=ProductColor]").val(ot);
			sizeSelector.val(ov);
		})

		quantity = $("div.quantity > input[type=number]").clone();

		quaInterval= setInterval(function(){

			var obj = $("div.quantity > input[type=number]");
			var tmp = obj.clone();

			for(i=0;i<quantity.length;i++){
				//console.log(tmp.eq(i).val(), quantity.eq(i).val());
				if(tmp.eq(i).val() != quantity.eq(i).val() && tmp.eq(i).length > 0){
					obj.val(tmp.eq(i).val());
					break;
				}
			}

			quantity = tmp;

		},100)

	}

})
