// define number or films in json
var number_of_products = films.length;

// loop for adding html div
for (i = 0; i < number_of_products; i++)
      {
         // definition of the new element
         var newItem_1 = 
         `<div class="film_container">
			<div class="image_container">
				<img src="` + films[i].link_online_pic + '"' + `alt="` + films[i].title + `">
			</div>
			<div class="description_container">
				<div class="title_container h4">
					<p>`+ films[i].title + `</p>
				</div>
				<div class="short_description_container">
					<p>`+ films[i].description + `</p>
				</div>
				<div class="button_container">
					<div class="like_container">
						<p>Like <i class="fa fa-thumbs-up"></i></p>
					</div>
					<div class="circle_container">
						<span class="number_of_likes">`+ films[i].start_likes + `</span>
					</div>
				</div>
			</div>
		</div>`
         // insert the new element  
         $(".wrapper").append(newItem_1); 
         };

// change number of likes by clicking
$('.like_container').click(function() {
  $(this).next(".circle_container").text(function() {
    return + this.textContent + 1;
  })
});

var $divs = $("div.film_container");

$('#numBnt').on('click', function () {
    var numericallyOrderedDivs = $divs.sort(function (a, b) {
        return $(a).find(".number_of_likes").text() > $(b).find(".number_of_likes").text();
    });
    $(".wrapper").html(numericallyOrderedDivs);
});

// https://jsfiddle.net/hibbard_eu/C2heg/