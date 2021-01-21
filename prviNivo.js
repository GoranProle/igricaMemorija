jQuery(document).ready(function($) {
	var visinaEkrana = window.innerHeight;
	switch (true) {
		case visinaEkrana >= 800 :
			var wrapper = $('#wrapper').css({'height':'670px','max-width':'640px','margin-top':'60px'});
			wrapper.append('<div class="naslov"><button class="dugmic" onclick="history.go(0)">Nova igra</button><div class="poruka"></div></div><div class="kontejnerVeliki"></div><div class="logoNovi"></div>');
			var kontejner = $('.kontejnerVeliki');
			var slicice = ['<img src="images/m/01a.jpg"/>','<img src="images/m/02a.jpg"/>','<img src="images/m/03a.jpg"/>','<img src="images/m/04a.jpg"/>',
				'<img src="images/m/05a.jpg"/>','<img src="images/m/06a.jpg"/>','<img src="images/m/07a.jpg"/>','<img src="images/m/08a.jpg"/>',
				'<img src="images/m/09a.jpg"/>','<img src="images/m/10a.jpg"/>','<img src="images/m/11a.jpg"/>','<img src="images/m/12a.jpg"/>',
				'<img src="images/m/13a.jpg"/>','<img src="images/m/14a.jpg"/>','<img src="images/m/15a.jpg"/>','<img src="images/m/16a.jpg"/>',
				'<img src="images/m/17a.jpg"/>','<img src="images/m/18a.jpg"/>',
				'<img src="images/m/01b.jpg"/>','<img src="images/m/02b.jpg"/>','<img src="images/m/03b.jpg"/>','<img src="images/m/04b.jpg"/>',
				'<img src="images/m/05b.jpg"/>','<img src="images/m/06b.jpg"/>','<img src="images/m/07b.jpg"/>','<img src="images/m/08b.jpg"/>',
				'<img src="images/m/09b.jpg"/>','<img src="images/m/10b.jpg"/>','<img src="images/m/11b.jpg"/>','<img src="images/m/12b.jpg"/>',
				'<img src="images/m/13b.jpg"/>','<img src="images/m/14b.jpg"/>','<img src="images/m/15b.jpg"/>','<img src="images/m/16b.jpg"/>',
				'<img src="images/m/17b.jpg"/>','<img src="images/m/18b.jpg"/>'];
			break;
		case visinaEkrana < 800 && visinaEkrana >= 600:
			var wrapper = $('#wrapper').css({'height':'550px','max-width':'521px','margin-top':'-10px'});
			wrapper.append('<div class="naslov"><button class="dugmic" onclick="history.go(0)">Nova igra</button><div class="poruka"></div></div><div class="kontejner"></div><div class="logoNovi"></div>');
			var kontejner = $('.kontejner');
			var slicice = ['<img src="images/m/01e.jpg"/>','<img src="images/m/02e.jpg"/>','<img src="images/m/03e.jpg"/>','<img src="images/m/04e.jpg"/>',
				'<img src="images/m/05e.jpg"/>','<img src="images/m/06e.jpg"/>','<img src="images/m/07e.jpg"/>','<img src="images/m/08e.jpg"/>',
				'<img src="images/m/09e.jpg"/>','<img src="images/m/10e.jpg"/>','<img src="images/m/11e.jpg"/>','<img src="images/m/12e.jpg"/>',
				'<img src="images/m/13e.jpg"/>','<img src="images/m/14e.jpg"/>','<img src="images/m/15e.jpg"/>','<img src="images/m/16e.jpg"/>',
				'<img src="images/m/17e.jpg"/>','<img src="images/m/18e.jpg"/>',
				'<img src="images/m/01f.jpg"/>','<img src="images/m/02f.jpg"/>','<img src="images/m/03f.jpg"/>','<img src="images/m/04f.jpg"/>',
				'<img src="images/m/05f.jpg"/>','<img src="images/m/06f.jpg"/>','<img src="images/m/07f.jpg"/>','<img src="images/m/08f.jpg"/>',
				'<img src="images/m/09f.jpg"/>','<img src="images/m/10f.jpg"/>','<img src="images/m/11f.jpg"/>','<img src="images/m/12f.jpg"/>',
				'<img src="images/m/13f.jpg"/>','<img src="images/m/14f.jpg"/>','<img src="images/m/15f.jpg"/>','<img src="images/m/16f.jpg"/>',
				'<img src="images/m/17f.jpg"/>','<img src="images/m/18f.jpg"/>'];
			break;
		default :	
			var wrapper = $('#wrapper').css({'height':'375px','max-width':'343px','margin-top':'10px'});
			wrapper.append('<div class="naslovMali"><button class="dugmic2" onclick="history.go(0)">Nova igra</button><div class="poruka2"></div></div><div class="kontejnerMali"></div><div class="logoNovi"></div>');
			var kontejner = $('.kontejnerMali');
			var slicice = ['<img src="images/m/01c.jpg"/>','<img src="images/m/02c.jpg"/>','<img src="images/m/03c.jpg"/>','<img src="images/m/04c.jpg"/>',
				'<img src="images/m/05c.jpg"/>','<img src="images/m/06c.jpg"/>','<img src="images/m/07c.jpg"/>','<img src="images/m/08c.jpg"/>',
				'<img src="images/m/09c.jpg"/>','<img src="images/m/10c.jpg"/>','<img src="images/m/11c.jpg"/>','<img src="images/m/12c.jpg"/>',
				'<img src="images/m/13c.jpg"/>','<img src="images/m/14c.jpg"/>','<img src="images/m/15c.jpg"/>','<img src="images/m/16c.jpg"/>',
				'<img src="images/m/17c.jpg"/>','<img src="images/m/18c.jpg"/>',
				'<img src="images/m/01d.jpg"/>','<img src="images/m/02d.jpg"/>','<img src="images/m/03d.jpg"/>','<img src="images/m/04d.jpg"/>',
				'<img src="images/m/05d.jpg"/>','<img src="images/m/06d.jpg"/>','<img src="images/m/07d.jpg"/>','<img src="images/m/08d.jpg"/>',
				'<img src="images/m/09d.jpg"/>','<img src="images/m/10d.jpg"/>','<img src="images/m/11d.jpg"/>','<img src="images/m/12d.jpg"/>',
				'<img src="images/m/13d.jpg"/>','<img src="images/m/14d.jpg"/>','<img src="images/m/15d.jpg"/>','<img src="images/m/16d.jpg"/>',
				'<img src="images/m/17d.jpg"/>','<img src="images/m/18d.jpg"/>'];
	}

	var klikni = 0;
	var okrenute = [];  
	var nedodirljivi = [];       
	var kraj = 0;
	var vreme = 180; // vreme predvidjeno da se predje 1. nivo

	for (var i = 0; i < 36; i++) {
		var rand = Math.floor(Math.random()*slicice.length);

		switch (true) {
			case visinaEkrana >= 800 :
				kontejner.append('<div class="boksVeliki"><div class="licePoveliko">'+ slicice[rand] +'</div><div class="nalicjeVeliko"></div></div>');
				break;
			case visinaEkrana < 800 && visinaEkrana >= 600 :
				kontejner.append('<div class="boks"><div class="lice">'+ slicice[rand] +'</div><div class="nalicje"></div></div>');
				break;
			default :
				kontejner.append('<div class="boksMali"><div class="liceMalo">'+ slicice[rand] +'</div><div class="nalicjeMalo"></div></div>');
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
    			boksovi.unbind(); // boksovi.off();
    			clearInterval(a);
    			if (kraj === 18) {
    				$('.dugmic').append(' - Nivo 2');
    				$('.dugmic2').append(' - Nivo 2');
    				$('.poruka').text('REŠILI STE NIVO 1');
    				$('.poruka2').text('REŠILI STE NIVO 1');  
    				$('button').click(function() {
    					location.href = "drugiNivo.html";
    				})	
    			} else {
    				$('.poruka').text('VREME JE ISTEKLO'); 
    				$('.poruka2').text('VREME JE ISTEKLO'); 
    				$('.boks').css('pointer-events','none');
    				$('.boksMali').css('pointer-events','none');
    			}
    		} else {
    			$('.poruka').text('NIVO 1 - Ostalo je još ' + vreme + ' sekundi'); 
    			$('.poruka2').text('NIVO 1 - Ostalo je još ' + vreme + ' sekundi'); 
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
					$(this).find('.nalicjeVeliko').css('transform', 'perspective(200px) rotateY(180deg)');
					$(this).find('.licePoveliko').css('transform', 'perspective(200px) rotateY(0deg)');
					break;	
				case visinaEkrana < 800 && visinaEkrana >= 600 :
					$(this).find('.nalicje').css('transform', 'perspective(200px) rotateY(180deg)');
					$(this).find('.lice').css('transform', 'perspective(200px) rotateY(0deg)');
					break;
				default :	
					$(this).find('.nalicjeMalo').css('transform', 'perspective(120px) rotateY(180deg)');
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
					boksovi.unbind(); // boksovi.off();

					//console.log(okrenute[0].html().substring(98,101));
					//console.log(okrenute[1].html().substring(98,101));

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
							okrenute[0].find('.nalicjeVeliko').css('transform', 'perspective(200px) rotateY(0deg)');
							okrenute[0].find('.licePoveliko').css('transform', 'perspective(200px) rotateY(180deg)');
							okrenute[1].find('.nalicjeVeliko').css('transform', 'perspective(200px) rotateY(0deg)');
							okrenute[1].find('.licePoveliko').css('transform', 'perspective(200px) rotateY(180deg)');
							okrenute[0].find('.nalicje').css('transform', 'perspective(200px) rotateY(0deg)');
							okrenute[0].find('.lice').css('transform', 'perspective(200px) rotateY(180deg)');
							okrenute[1].find('.nalicje').css('transform', 'perspective(200px) rotateY(0deg)');
							okrenute[1].find('.lice').css('transform', 'perspective(200px) rotateY(180deg)');
							okrenute[0].find('.nalicjeMalo').css('transform', 'perspective(120px) rotateY(0deg)');
							okrenute[0].find('.liceMalo').css('transform', 'perspective(120px) rotateY(180deg)');
							okrenute[1].find('.nalicjeMalo').css('transform', 'perspective(120px) rotateY(0deg)');
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