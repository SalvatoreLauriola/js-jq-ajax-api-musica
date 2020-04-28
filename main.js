$(document).ready(function() {
	


//Refs
var api = "https://flynn.boolean.careers/exercises/api/array/music";

var list = $('.cds-container')

//init Handlebars
$.ajax({
		url: api,
		method: 'GET',
		success: function(data){
			// console.log(data);
			
			var cds = data.response;
			var source = $('#disc-template').html();
			var template = Handlebars.compile(source);
				
			for(var i = 0; i < cds.length; i++){

				var autore = cds[i].author;
				var copertina = cds[i].poster;
				var anno = cds[i].year;
				var titolo = cds[i].title;
				var genere = cds[i].genre;
				
				var context = {
					poster: copertina,
					title: titolo,
					author: autore,
					year: anno,
					genre: genere
				}
				
				var html = template(context);
				list.append(html);
			}
		},
		error: function(){
			console.log('Errore')
		}
})












});