jQuery(document).ready(function($) {
	var sirinaEkrana = window.innerWidth;
	var wrapper = $('#wrapper4');
	if (sirinaEkrana >= 600) {
		wrapper.append('<div class="naslov"><button class="dugme" onclick="history.go(0)">Nova igra</button><div class="poruka"></div></div><div class="kontejner"></div><div class="logo"></div>');
		var kontejner = $('.kontejner');
	} else {
		wrapper.append('<div class="naslovMali"><button class="dugme2" onclick="history.go(0)">Nova igra</button><div class="poruka2"></div></div><div class="kontejnerMali"></div><div class="logo"></div>');
		var kontejner = $('.kontejnerMali');
	}
	if (sirinaEkrana >= 600) {
		var slicice = ['<img src="images/m/61e.jpg"/>','<img src="images/m/62e.jpg"/>','<img src="images/m/63e.jpg"/>','<img src="images/m/64e.jpg"/>',
		'<img src="images/m/65e.jpg"/>','<img src="images/m/66e.jpg"/>','<img src="images/m/67e.jpg"/>','<img src="images/m/68e.jpg"/>',
		'<img src="images/m/69e.jpg"/>','<img src="images/m/70e.jpg"/>','<img src="images/m/71e.jpg"/>','<img src="images/m/72e.jpg"/>',
		'<img src="images/m/73e.jpg"/>','<img src="images/m/74e.jpg"/>','<img src="images/m/75e.jpg"/>','<img src="images/m/76e.jpg"/>',
		'<img src="images/m/77e.jpg"/>','<img src="images/m/78e.jpg"/>',
		'<img src="images/m/61f.jpg"/>','<img src="images/m/62f.jpg"/>','<img src="images/m/63f.jpg"/>','<img src="images/m/64f.jpg"/>',
		'<img src="images/m/65f.jpg"/>','<img src="images/m/66f.jpg"/>','<img src="images/m/67f.jpg"/>','<img src="images/m/68f.jpg"/>',
		'<img src="images/m/69f.jpg"/>','<img src="images/m/70f.jpg"/>','<img src="images/m/71f.jpg"/>','<img src="images/m/72f.jpg"/>',
		'<img src="images/m/73f.jpg"/>','<img src="images/m/74f.jpg"/>','<img src="images/m/75f.jpg"/>','<img src="images/m/76f.jpg"/>',
		'<img src="images/m/77f.jpg"/>','<img src="images/m/78f.jpg"/>'];
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
	var vreme = 120; // vreme predvidjeno da se predje 4. nivo

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
					$('.dugme').text('Nova igra - Nivo 5');
    				$('.dugme2').text('Nova igra - Nivo 5');
    				$('.poruka').text('REŠILI STE NIVO 4');
    				$('.poruka2').text('REŠILI STE NIVO 4');  
    				$('button').click(function() {
    					location.href = "petiNivo.html";
    				})	
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