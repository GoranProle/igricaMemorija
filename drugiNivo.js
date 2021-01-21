jQuery(document).ready(function($) {
	var visinaEkrana = window.innerHeight;
	switch (true) {
		case visinaEkrana >= 800 :
			var wrapper = $('#wrapper2').css({'height':'670px','max-width':'640px','margin-top':'60px'});
			wrapper.append('<div class="naslov"><button class="dugmic" onclick="history.go(0)">Nova igra</button><div class="poruka"></div></div><div class="kontejnerVeliki"></div><div class="logoNovi"></div>');
			var kontejner = $('.kontejnerVeliki');
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
			break;
		case visinaEkrana < 800 && visinaEkrana >= 600:
			var wrapper = $('#wrapper2').css({'height':'550px','max-width':'521px','margin-top':'-10px'});
			wrapper.append('<div class="naslov"><button class="dugmic" onclick="history.go(0)">Nova igra</button><div class="poruka"></div></div><div class="kontejner"></div><div class="logoNovi"></div>');
			var kontejner = $('.kontejner');
			var slicice = ['<img src="images/m/21e.jpg"/>','<img src="images/m/22e.jpg"/>','<img src="images/m/23e.jpg"/>','<img src="images/m/24e.jpg"/>',
			'<img src="images/m/25e.jpg"/>','<img src="images/m/26e.jpg"/>','<img src="images/m/27e.jpg"/>','<img src="images/m/28e.jpg" />',
			'<img src="images/m/29e.jpg"/>','<img src="images/m/30e.jpg"/>','<img src="images/m/31e.jpg"/>','<img src="images/m/32e.jpg" />',
			'<img src="images/m/33e.jpg"/>','<img src="images/m/34e.jpg"/>','<img src="images/m/35e.jpg"/>','<img src="images/m/36e.jpg" />',
			'<img src="images/m/37e.jpg"/>','<img src="images/m/38e.jpg"/>',
			'<img src="images/m/21f.jpg"/>','<img src="images/m/22f.jpg"/>','<img src="images/m/23f.jpg"/>','<img src="images/m/24f.jpg" />',
			'<img src="images/m/25f.jpg"/>','<img src="images/m/26f.jpg"/>','<img src="images/m/27f.jpg"/>','<img src="images/m/28f.jpg" />',
			'<img src="images/m/29f.jpg"/>','<img src="images/m/30f.jpg"/>','<img src="images/m/31f.jpg"/>','<img src="images/m/32f.jpg" />',
			'<img src="images/m/33f.jpg"/>','<img src="images/m/34f.jpg"/>','<img src="images/m/35f.jpg"/>','<img src="images/m/36f.jpg" />',
			'<img src="images/m/37f.jpg"/>','<img src="images/m/38f.jpg"/>'];
			break;
		default :	
			var wrapper = $('#wrapper2').css({'height':'375px','max-width':'343px','margin-top':'10px'});
			wrapper.append('<div class="naslovMali"><button class="dugmic2" onclick="history.go(0)">Nova igra</button><div class="poruka2"></div></div><div class="kontejnerMali"></div><div class="logoNovi"></div>');
			var kontejner = $('.kontejnerMali');
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
	var vreme = 160; // vreme predvidjeno da se predje 2. nivo

	for (var i = 0; i < 36; i++) {
		var rand = Math.floor(Math.random()*slicice.length);

		switch (true) {
			case visinaEkrana >= 800 :
				kontejner.append('<div class="boksVeliki"><div class="licePoveliko">'+ slicice[rand] +'</div><div class="nalicjeVeliko2"></div></div>');
				break;
			case visinaEkrana < 800 && visinaEkrana >= 600 :
				kontejner.append('<div class="boks"><div class="lice">'+ slicice[rand] +'</div><div class="nalicje2"></div></div>');
				break;
			default :	
				kontejner.append('<div class="boksMali"><div class="liceMalo">'+ slicice[rand] +'</div><div class="nalicjeMalo2"></div></div>');
		}

		slicice.splice(rand,1);
	};

	$('.logoNovi').append('<img src="images/m/logo_prole_software_2019.jpg"/>');

	switch (true) {
		case visinaEkrana >= 800 :
			var boksovi = $('.boksVeliki');
			break;
		case visinaEkrana < 800 && visinaEkrana >= 600 :
			var boksovi = $('.boks');
			break;
		default :	
			var boksovi = $('.boksMali');
	}
	
     function preostaloVreme() {
    	var a = setInterval(function(){
    		vreme--;
    		if (vreme === 0 || kraj === 18) {
    			boksovi.off();
    			clearInterval(a);
    			if (kraj === 18) {
    				$('.dugmic').text('Nova igra - Nivo 3');
    				$('.dugmic2').text('Nova igra - Nivo 3');
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

			switch (true) {
				case visinaEkrana >= 800 :
					$(this).find('.nalicjeVeliko2').css('transform', 'perspective(200px) rotateY(180deg)');
					$(this).find('.licePoveliko').css('transform', 'perspective(200px) rotateY(0deg)');
					break;	
				case visinaEkrana < 800 && visinaEkrana >= 600 :	
					$(this).find('.nalicje2').css('transform', 'perspective(200px) rotateY(180deg)');
					$(this).find('.lice').css('transform', 'perspective(200px) rotateY(0deg)');
					break;
				default :
					$(this).find('.nalicjeMalo2').css('transform', 'perspective(120px) rotateY(180deg)');
					$(this).find('.liceMalo').css('transform', 'perspective(120px) rotateY(0deg)');
			}
					
			var imaLiGa = $(this).html().substring(90,93);
			var imaLiGa2 = $(this).html().substring(94,97);
			var imaLiGa3 = $(this).html().substring(98,101);
			if ((nedodirljivi.includes(imaLiGa) == true) || (nedodirljivi.includes(imaLiGa2) == true) ||
				(nedodirljivi.includes(imaLiGa3) == true)) {
				okrenute.pop();
				klikni--;
			} else {	
				if (klikni === 2) {
					boksovi.off();
					if ((okrenute[0].html().substring(98,100) === okrenute[1].html().substring(98,100)) &&
						(okrenute[0].html().substring(100,101) !== okrenute[1].html().substring(100,101)) ||
						(okrenute[0].html().substring(90,92) === okrenute[1].html().substring(90,92)) &&
						(okrenute[0].html().substring(92,93) !== okrenute[1].html().substring(92,93)) ||
						(okrenute[0].html().substring(94,96) === okrenute[1].html().substring(94,96)) &&
						(okrenute[0].html().substring(96,97) !== okrenute[1].html().substring(96,97))) {
							switch (true) {
								case visinaEkrana >= 800 :
									nedodirljivi.push(okrenute[0].html().substring(98,101),okrenute[1].html().substring(98,101));
									break;
								case visinaEkrana < 800 && visinaEkrana >= 600 :	
									nedodirljivi.push(okrenute[0].html().substring(90,93),okrenute[1].html().substring(90,93));
									break;
								default :
									nedodirljivi.push(okrenute[0].html().substring(94,97),okrenute[1].html().substring(94,97));
							}		
							klikni = 0;
							okrenute.length = 0;
							kraj++;
							start();
					} else {
						setTimeout(function(){
							okrenute[0].find('.nalicjeVeliko2').css('transform', 'perspective(200px) rotateY(0deg)');
							okrenute[0].find('.licePoveliko').css('transform', 'perspective(200px) rotateY(180deg)');
							okrenute[1].find('.nalicjeVeliko2').css('transform', 'perspective(200px) rotateY(0deg)');
							okrenute[1].find('.licePoveliko').css('transform', 'perspective(200px) rotateY(180deg)');
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