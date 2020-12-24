jQuery(document).ready(function($) {
	var sirinaEkrana = window.innerWidth;
	var wrapper = $('#wrapper3');
	if (sirinaEkrana >= 600) {
		wrapper.append('<div class="naslov"><button class="dugme" onclick="history.go(0)">Nova igra</button><div class="poruka"></div></div><div class="kontejner"></div><div class="logo"></div>');
		var kontejner = $('.kontejner');
	} else {
		wrapper.append('<div class="naslovMali"><button class="dugme2" onclick="history.go(0)">Nova igra</button><div class="poruka2"></div></div><div class="kontejnerMali"></div><div class="logo"></div>');
		var kontejner = $('.kontejnerMali');
	}
	if (sirinaEkrana >= 600) {
		var slicice = ['<img src="images/m/41e.jpg"/>','<img src="images/m/42e.jpg"/>','<img src="images/m/43e.jpg"/>','<img src="images/m/44e.jpg"/>',
		'<img src="images/m/45e.jpg"/>','<img src="images/m/46e.jpg"/>','<img src="images/m/47e.jpg"/>','<img src="images/m/48e.jpg"/>',
		'<img src="images/m/49e.jpg"/>','<img src="images/m/50e.jpg"/>','<img src="images/m/51e.jpg"/>','<img src="images/m/52e.jpg" />',
		'<img src="images/m/53e.jpg"/>','<img src="images/m/54e.jpg"/>','<img src="images/m/55e.jpg"/>','<img src="images/m/56e.jpg" />',
		'<img src="images/m/57e.jpg"/>','<img src="images/m/58e.jpg"/>',
		'<img src="images/m/41f.jpg"/>','<img src="images/m/42f.jpg"/>','<img src="images/m/43f.jpg"/>','<img src="images/m/44f.jpg"/>',
		'<img src="images/m/45f.jpg"/>','<img src="images/m/46f.jpg"/>','<img src="images/m/47f.jpg"/>','<img src="images/m/48f.jpg"/>',
		'<img src="images/m/49f.jpg"/>','<img src="images/m/50f.jpg"/>','<img src="images/m/51f.jpg"/>','<img src="images/m/52f.jpg"/>',
		'<img src="images/m/53f.jpg"/>','<img src="images/m/54f.jpg"/>','<img src="images/m/55f.jpg"/>','<img src="images/m/56f.jpg"/>',
		'<img src="images/m/57f.jpg"/>','<img src="images/m/58f.jpg"/>'];
	} else {
		var slicice = ['<img src="images/m/41c.jpg"/>','<img src="images/m/42c.jpg"/>','<img src="images/m/43c.jpg"/>','<img src="images/m/44c.jpg"/>',
		'<img src="images/m/45c.jpg"/>','<img src="images/m/46c.jpg"/>','<img src="images/m/47c.jpg"/>','<img src="images/m/48c.jpg"/>',
		'<img src="images/m/49c.jpg"/>','<img src="images/m/50c.jpg"/>','<img src="images/m/51c.jpg"/>','<img src="images/m/52c.jpg" />',
		'<img src="images/m/53c.jpg"/>','<img src="images/m/54c.jpg"/>','<img src="images/m/55c.jpg"/>','<img src="images/m/56c.jpg" />',
		'<img src="images/m/57c.jpg"/>','<img src="images/m/58c.jpg"/>',
		'<img src="images/m/41d.jpg"/>','<img src="images/m/42d.jpg"/>','<img src="images/m/43d.jpg"/>','<img src="images/m/44d.jpg"/>',
		'<img src="images/m/45d.jpg"/>','<img src="images/m/46d.jpg"/>','<img src="images/m/47d.jpg"/>','<img src="images/m/48d.jpg"/>',
		'<img src="images/m/49d.jpg"/>','<img src="images/m/50d.jpg"/>','<img src="images/m/51d.jpg"/>','<img src="images/m/52d.jpg"/>',
		'<img src="images/m/53d.jpg"/>','<img src="images/m/54d.jpg"/>','<img src="images/m/55d.jpg"/>','<img src="images/m/56d.jpg"/>',
		'<img src="images/m/57d.jpg"/>','<img src="images/m/58d.jpg"/>'];
	}
	
	var klikni = 0;
	var okrenute = [];  
	var nedodirljivi = [];       
	var kraj = 0;
	var vreme = 140; // vreme predvidjeno da se predje 3. nivo

	for (var i = 0; i < 36; i++) {
		var rand = Math.floor(Math.random()*slicice.length);
		if (sirinaEkrana >= 600) {
			kontejner.append('<div class="boks"><div class="lice">'+ slicice[rand] +'</div><div class="nalicje3"></div></div>');
		} else {
			kontejner.append('<div class="boksMali"><div class="liceMalo">'+ slicice[rand] +'</div><div class="nalicjeMalo3"></div></div>');
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
    				$('.dugme').text('Nova igra - Nivo 4');
    				$('.dugme2').text('Nova igra - Nivo 4');
    				$('.poruka').text('REŠILI STE NIVO 3');
    				$('.poruka2').text('REŠILI STE NIVO 3');  
    				$('button').click(function() {
    					location.href = "cetvrtiNivo.html";
    				})	
    			} else {
    				$('.poruka').text('VREME JE ISTEKLO'); 
    				$('.poruka2').text('VREME JE ISTEKLO'); 
    				$('.boks').css('pointer-events','none');
    				$('.boksMali').css('pointer-events','none');
    			}
    		} else {
    			$('.poruka').text('NIVO 3 - Ostalo je još ' + vreme + ' sekundi'); 
    			$('.poruka2').text('NIVO 3 - Ostalo je još ' + vreme + ' sekundi'); 
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
				$(this).find('.nalicje3').css('transform', 'perspective(200px) rotateY(180deg)');
				$(this).find('.lice').css('transform', 'perspective(200px) rotateY(0deg)');
			} else {
				$(this).find('.nalicjeMalo3').css('transform', 'perspective(120px) rotateY(180deg)');
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
							okrenute[0].find('.nalicje3').css('transform', 'perspective(200px) rotateY(0deg)');
							okrenute[0].find('.lice').css('transform', 'perspective(200px) rotateY(180deg)');
							okrenute[1].find('.nalicje3').css('transform', 'perspective(200px) rotateY(0deg)');
							okrenute[1].find('.lice').css('transform', 'perspective(200px) rotateY(180deg)');
							okrenute[0].find('.nalicjeMalo3').css('transform', 'perspective(120px) rotateY(0deg)');
							okrenute[0].find('.liceMalo').css('transform', 'perspective(120px) rotateY(180deg)');
							okrenute[1].find('.nalicjeMalo3').css('transform', 'perspective(120px) rotateY(0deg)');
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