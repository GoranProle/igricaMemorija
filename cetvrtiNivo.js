jQuery(document).ready(function($) {
	var sirinaEkrana = window.innerWidth;
	var wrapper = $('#wrapper4');
	if (sirinaEkrana >= 600) {
		wrapper.append('<div class="naslov"><button id="dugme" onclick="history.go(0)">Nova igra</button><div class="poruka"></div></div><div class="kontejner"></div><div class="logo"></div>');
		var kontejner = $('.kontejner');
	} else {
		wrapper.append('<div class="naslovMali"><button id="dugme2" onclick="history.go(0)">Nova igra</button><div class="poruka2"></div></div><div class="kontejnerMali"></div><div class="logo"></div>');
		var kontejner = $('.kontejnerMali');
	}
	if (sirinaEkrana >= 600) {
		var slicice = ['<img src="images/m/61a.jpg"/>','<img src="images/m/62a.jpg"/>','<img src="images/m/63a.jpg"/>','<img src="images/m/64a.jpg"/>',
		'<img src="images/m/65a.jpg"/>','<img src="images/m/66a.jpg"/>','<img src="images/m/67a.jpg"/>','<img src="images/m/68a.jpg"/>',
		'<img src="images/m/69a.jpg"/>','<img src="images/m/70a.jpg"/>','<img src="images/m/71a.jpg"/>','<img src="images/m/72a.jpg"/>',
		'<img src="images/m/73a.jpg"/>','<img src="images/m/74a.jpg"/>','<img src="images/m/75a.jpg"/>','<img src="images/m/76a.jpg"/>',
		'<img src="images/m/77a.jpg"/>','<img src="images/m/78a.jpg"/>',
		'<img src="images/m/61b.jpg"/>','<img src="images/m/62b.jpg"/>','<img src="images/m/63b.jpg"/>','<img src="images/m/64b.jpg"/>',
		'<img src="images/m/65b.jpg"/>','<img src="images/m/66b.jpg"/>','<img src="images/m/67b.jpg"/>','<img src="images/m/68b.jpg"/>',
		'<img src="images/m/69b.jpg"/>','<img src="images/m/70b.jpg"/>','<img src="images/m/71b.jpg"/>','<img src="images/m/72b.jpg"/>',
		'<img src="images/m/73b.jpg"/>','<img src="images/m/74b.jpg"/>','<img src="images/m/75b.jpg"/>','<img src="images/m/76b.jpg"/>',
		'<img src="images/m/77b.jpg"/>','<img src="images/m/78b.jpg"/>'];
	} else {
		var slicice = ['<img src="images/m/61c.jpg"/>','<img src="images/m/62c.jpg"/>','<img src="images/m/63c.jpg"/>','<img src="images/m/64c.jpg"/>',
		'<img src="images/m/65c.jpg"/>','<img src="images/m/66c.jpg"/>','<img src="images/m/67c.jpg"/>','<img src="images/m/68c.jpg"/>',
		'<img src="images/m/69c.jpg"/>','<img src="images/m/70c.jpg"/>','<img src="images/m/71c.jpg"/>','<img src="images/m/72c.jpg"/>',
		'<img src="images/m/73c.jpg"/>','<img src="images/m/74c.jpg"/>','<img src="images/m/75c.jpg"/>','<img src="images/m/76c.jpg"/>',
		'<img src="images/m/77c.jpg"/>','<img src="images/m/78c.jpg"/>',
		'<img src="images/m/61d.jpg"/>','<img src="images/m/62d.jpg"/>','<img src="images/m/63d.jpg"/>','<img src="images/m/64d.jpg"/>',
		'<img src="images/m/65d.jpg"/>','<img src="images/m/66d.jpg"/>','<img src="images/m/67d.jpg"/>','<img src="images/m/68d.jpg"/>',
		'<img src="images/m/69d.jpg"/>','<img src="images/m/70d.jpg"/>','<img src="images/m/71d.jpg"/>','<img src="images/m/72d.jpg"/>',
		'<img src="images/m/73d.jpg"/>','<img src="images/m/74d.jpg"/>','<img src="images/m/75d.jpg"/>','<img src="images/m/76d.jpg"/>',
		'<img src="images/m/77d.jpg"/>','<img src="images/m/78d.jpg"/>'];
	}
	
	var klikni = 0;
	var okrenute = [];  
	var nedodirljivi = [];       
	var kraj = 0;
	var vreme = 90; // vreme predvidjeno da se predje 4. nivo

	for (var i = 0; i < 36; i++) {
		var rand = Math.floor(Math.random()*slicice.length);
		if (sirinaEkrana >= 600) {
			kontejner.append('<div class="boks"><div class="lice">'+ slicice[rand] +'</div><div class="nalicje4"></div></div>');
		} else {
			kontejner.append('<div class="boksMali"><div class="liceMalo">'+ slicice[rand] +'</div><div class="nalicjeMalo4"></div></div>');
		}
		slicice.splice(rand,1);
	};

	$('.logo').append('<img src="images/m/logo_prole_software_2019.jpg"/>');

	if (sirinaEkrana >= 600) {
		var boksovi = $('.boks');
	} else {
		var boksovi = $('.boksMali');
	}
	
     function preostaloVreme() {
    	var a = setInterval(function(){
    		vreme--;
    		if (vreme === 0 || kraj === 18) {
    			boksovi.off();
    			clearInterval(a);
    			if (kraj === 18) {
    				if (sirinaEkrana >= 600) {
    					$('#dugme').get(0).style.visibility = 'hidden';
    				} else {
    					$('#dugme2').get(0).style.visibility = 'hidden';
    				}
     				$('.poruka').text('REŠILI STE NIVO 4 - KRAJ IGRE');
    				$('.poruka2').text('REŠILI STE NIVO 4 - KRAJ IGRE').css('text-align','center');
      			} else {
    				$('.poruka').text('VREME JE ISTEKLO'); 
    				$('.poruka2').text('VREME JE ISTEKLO'); 
    				$('.boks').css('pointer-events','none');
    				$('.boksMali').css('pointer-events','none');
    			}
    		} else {
    			$('.poruka').text('NIVO 4 - Ostalo je još ' + vreme + ' sekundi'); 
    			$('.poruka2').text('NIVO 4 - Ostalo je još ' + vreme + ' sekundi'); 
    		}
    	},1000)
    }
    preostaloVreme();

	start();
	function start () {
		boksovi.click(function() {
			okrenute.push($(this));
			klikni++;
			if (sirinaEkrana >= 600) {
				$(this).find('.nalicje4').css('transform', 'perspective(200px) rotateY(180deg)');
				$(this).find('.lice').css('transform', 'perspective(200px) rotateY(0deg)');
			} else {
				$(this).find('.nalicjeMalo4').css('transform', 'perspective(120px) rotateY(180deg)');
				$(this).find('.liceMalo').css('transform', 'perspective(120px) rotateY(0deg)');
			}
			
			var imaLiGa = $(this).html().substring(90,93);
			var imaLiGa2 = $(this).html().substring(94,97);
			if ((nedodirljivi.includes(imaLiGa) == true) || (nedodirljivi.includes(imaLiGa2) == true)) {
				okrenute.pop();
				klikni--;
			} else {	
				if (klikni === 2) {
					boksovi.off();
					if ((okrenute[0].html().substring(90,92) === okrenute[1].html().substring(90,92)) &&
						(okrenute[0].html().substring(92,93) !== okrenute[1].html().substring(92,93)) ||
						(okrenute[0].html().substring(94,96) === okrenute[1].html().substring(94,96)) &&
						(okrenute[0].html().substring(96,97) !== okrenute[1].html().substring(96,97))) {
							if (sirinaEkrana >= 600) {
								nedodirljivi.push(okrenute[0].html().substring(90,93),okrenute[1].html().substring(90,93));
							} else {
								nedodirljivi.push(okrenute[0].html().substring(94,97),okrenute[1].html().substring(94,97));
							}
							klikni = 0;
							okrenute.length = 0;
							kraj++;
							start();
					} else {
						setTimeout(function(){
							okrenute[0].find('.nalicje4').css('transform', 'perspective(200px) rotateY(0deg)');
							okrenute[0].find('.lice').css('transform', 'perspective(200px) rotateY(180deg)');
							okrenute[1].find('.nalicje4').css('transform', 'perspective(200px) rotateY(0deg)');
							okrenute[1].find('.lice').css('transform', 'perspective(200px) rotateY(180deg)');
							okrenute[0].find('.nalicjeMalo4').css('transform', 'perspective(120px) rotateY(0deg)');
							okrenute[0].find('.liceMalo').css('transform', 'perspective(120px) rotateY(180deg)');
							okrenute[1].find('.nalicjeMalo4').css('transform', 'perspective(120px) rotateY(0deg)');
							okrenute[1].find('.liceMalo').css('transform', 'perspective(120px) rotateY(180deg)');
							klikni = 0;
							okrenute.length = 0;
							start();
						},800)
					}	
				};
			}
		});
	}
});