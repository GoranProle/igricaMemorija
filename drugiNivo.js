jQuery(document).ready(function($) {
	var sirinaEkrana = window.innerWidth;
	var wrapper = $('#wrapper2');
	if (sirinaEkrana >= 600) {
		wrapper.append('<div class="naslov"><button class="dugme" onclick="history.go(0)">Nova igra</button><div class="poruka"></div></div><div class="kontejner"></div><div class="logo"></div>');
		var kontejner = $('.kontejner');
	} else {
		wrapper.append('<div class="naslovMali"><button class="dugme2" onclick="history.go(0)">Nova igra</button><div class="poruka2"></div></div><div class="kontejnerMali"></div><div class="logo"></div>');
		var kontejner = $('.kontejnerMali');
	}
	if (sirinaEkrana >= 600) {
		var slicice = ['<img src="images/m/21a.jpg"/>','<img src="images/m/22a.jpg"/>','<img src="images/m/23a.jpg"/>','<img src="images/m/24a.jpg"/>',
		'<img src="images/m/25a.jpg"/>','<img src="images/m/26a.jpg"/>','<img src="images/m/27a.jpg"/>','<img src="images/m/28a.jpg" />',
		'<img src="images/m/29a.jpg"/>','<img src="images/m/30a.jpg"/>','<img src="images/m/31a.jpg"/>','<img src="images/m/32a.jpg" />',
		'<img src="images/m/33a.jpg"/>','<img src="images/m/34a.jpg"/>','<img src="images/m/35a.jpg"/>','<img src="images/m/36a.jpg" />',
		'<img src="images/m/37a.jpg"/>','<img src="images/m/38a.jpg"/>',
		'<img src="images/m/21b.jpg"/>','<img src="images/m/22b.jpg"/>','<img src="images/m/23b.jpg"/>','<img src="images/m/24b.jpg" />',
		'<img src="images/m/25b.jpg"/>','<img src="images/m/26b.jpg"/>','<img src="images/m/27b.jpg"/>','<img src="images/m/28b.jpg" />',
		'<img src="images/m/29b.jpg"/>','<img src="images/m/30b.jpg"/>','<img src="images/m/31b.jpg"/>','<img src="images/m/32b.jpg" />',
		'<img src="images/m/33b.jpg"/>','<img src="images/m/34b.jpg"/>','<img src="images/m/35b.jpg"/>','<img src="images/m/36b.jpg" />',
		'<img src="images/m/37b.jpg"/>','<img src="images/m/38b.jpg"/>'];
	} else {
		var slicice = ['<img src="images/m/21c.jpg"/>','<img src="images/m/22c.jpg"/>','<img src="images/m/23c.jpg"/>','<img src="images/m/24c.jpg"/>',
		'<img src="images/m/25c.jpg"/>','<img src="images/m/26c.jpg"/>','<img src="images/m/27c.jpg"/>','<img src="images/m/28c.jpg" />',
		'<img src="images/m/29c.jpg"/>','<img src="images/m/30c.jpg"/>','<img src="images/m/31c.jpg"/>','<img src="images/m/32c.jpg" />',
		'<img src="images/m/33c.jpg"/>','<img src="images/m/34c.jpg"/>','<img src="images/m/35c.jpg"/>','<img src="images/m/36c.jpg" />',
		'<img src="images/m/37c.jpg"/>','<img src="images/m/38c.jpg"/>',
		'<img src="images/m/21d.jpg"/>','<img src="images/m/22d.jpg"/>','<img src="images/m/23d.jpg"/>','<img src="images/m/24d.jpg" />',
		'<img src="images/m/25d.jpg"/>','<img src="images/m/26d.jpg"/>','<img src="images/m/27d.jpg"/>','<img src="images/m/28d.jpg" />',
		'<img src="images/m/29d.jpg"/>','<img src="images/m/30d.jpg"/>','<img src="images/m/31d.jpg"/>','<img src="images/m/32d.jpg" />',
		'<img src="images/m/33d.jpg"/>','<img src="images/m/34d.jpg"/>','<img src="images/m/35d.jpg"/>','<img src="images/m/36d.jpg" />',
		'<img src="images/m/37d.jpg"/>','<img src="images/m/38d.jpg"/>'];
	}
	
	var klikni = 0;
	var okrenute = [];  
	var nedodirljivi = [];       
	var kraj = 0;
	var vreme = 150; // vreme predvidjeno da se predje 2. nivo

	for (var i = 0; i < 36; i++) {
		var rand = Math.floor(Math.random()*slicice.length);
		if (sirinaEkrana >= 600) {
			kontejner.append('<div class="boks"><div class="lice">'+ slicice[rand] +'</div><div class="nalicje2"></div></div>');
		} else {
			kontejner.append('<div class="boksMali"><div class="liceMalo">'+ slicice[rand] +'</div><div class="nalicjeMalo2"></div></div>');
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
    				$('.dugme').text('Nova igra - Nivo 3');
    				$('.dugme2').text('Nova igra - Nivo 3');
    				$('.poruka').text('REŠILI STE NIVO 2');
    				$('.poruka2').text('REŠILI STE NIVO 2');  
    				$('button').click(function() {
    					location.href = "treciNivo.html";
    				})	
    			} else {
    				$('.poruka').text('VREME JE ISTEKLO'); 
    				$('.poruka2').text('VREME JE ISTEKLO'); 
    				$('.boks').css('pointer-events','none');
    				$('.boksMali').css('pointer-events','none');
    			}
    		} else {
    			$('.poruka').text('NIVO 2 - Ostalo je još ' + vreme + ' sekundi'); 
    			$('.poruka2').text('NIVO 2 - Ostalo je još ' + vreme + ' sekundi'); 
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
				$(this).find('.nalicje2').css('transform', 'perspective(200px) rotateY(180deg)');
				$(this).find('.lice').css('transform', 'perspective(200px) rotateY(0deg)');
			} else {
				$(this).find('.nalicjeMalo2').css('transform', 'perspective(120px) rotateY(180deg)');
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
							okrenute[0].find('.nalicje2').css('transform', 'perspective(200px) rotateY(0deg)');
							okrenute[0].find('.lice').css('transform', 'perspective(200px) rotateY(180deg)');
							okrenute[1].find('.nalicje2').css('transform', 'perspective(200px) rotateY(0deg)');
							okrenute[1].find('.lice').css('transform', 'perspective(200px) rotateY(180deg)');
							okrenute[0].find('.nalicjeMalo2').css('transform', 'perspective(120px) rotateY(0deg)');
							okrenute[0].find('.liceMalo').css('transform', 'perspective(120px) rotateY(180deg)');
							okrenute[1].find('.nalicjeMalo2').css('transform', 'perspective(120px) rotateY(0deg)');
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