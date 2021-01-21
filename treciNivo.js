jQuery(document).ready(function($) {
	var visinaEkrana = window.innerHeight;
	switch (true) {
		case visinaEkrana >= 800 :
			var wrapper = $('#wrapper3').css({'height':'670px','max-width':'640px','margin-top':'60px'});
			wrapper.append('<div class="naslov"><button class="dugmic" onclick="history.go(0)">Nova igra</button><div class="poruka"></div></div><div class="kontejnerVeliki"></div><div class="logoNovi"></div>');
			var kontejner = $('.kontejnerVeliki');
			var slicice = ['<img src="images/m/41a.jpg"/>','<img src="images/m/42a.jpg"/>','<img src="images/m/43a.jpg"/>','<img src="images/m/44a.jpg"/>',
			'<img src="images/m/45a.jpg"/>','<img src="images/m/46a.jpg"/>','<img src="images/m/47a.jpg"/>','<img src="images/m/48a.jpg"/>',
			'<img src="images/m/49a.jpg"/>','<img src="images/m/50a.jpg"/>','<img src="images/m/51a.jpg"/>','<img src="images/m/52a.jpg" />',
			'<img src="images/m/53a.jpg"/>','<img src="images/m/54a.jpg"/>','<img src="images/m/55a.jpg"/>','<img src="images/m/56a.jpg" />',
			'<img src="images/m/57a.jpg"/>','<img src="images/m/58a.jpg"/>',
			'<img src="images/m/41b.jpg"/>','<img src="images/m/42b.jpg"/>','<img src="images/m/43b.jpg"/>','<img src="images/m/44b.jpg"/>',
			'<img src="images/m/45b.jpg"/>','<img src="images/m/46b.jpg"/>','<img src="images/m/47b.jpg"/>','<img src="images/m/48b.jpg"/>',
			'<img src="images/m/49b.jpg"/>','<img src="images/m/50b.jpg"/>','<img src="images/m/51b.jpg"/>','<img src="images/m/52b.jpg"/>',
			'<img src="images/m/53b.jpg"/>','<img src="images/m/54b.jpg"/>','<img src="images/m/55b.jpg"/>','<img src="images/m/56b.jpg"/>',
			'<img src="images/m/57b.jpg"/>','<img src="images/m/58b.jpg"/>'];
			break;
		case visinaEkrana < 800 && visinaEkrana >= 600:
			var wrapper = $('#wrapper3').css({'height':'550px','max-width':'521px','margin-top':'-10px'});
			wrapper.append('<div class="naslov"><button class="dugmic" onclick="history.go(0)">Nova igra</button><div class="poruka"></div></div><div class="kontejner"></div><div class="logoNovi"></div>');
			var kontejner = $('.kontejner');
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
			break;
		default :	
			var wrapper = $('#wrapper3').css({'height':'375px','max-width':'343px','margin-top':'10px'});
			wrapper.append('<div class="naslovMali"><button class="dugmic2" onclick="history.go(0)">Nova igra</button><div class="poruka2"></div></div><div class="kontejnerMali"></div><div class="logoNovi"></div>');
			var kontejner = $('.kontejnerMali');
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

		switch (true) {
			case visinaEkrana >= 800 :
				kontejner.append('<div class="boksVeliki"><div class="licePoveliko">'+ slicice[rand] +'</div><div class="nalicjeVeliko3"></div></div>');
				break;
			case visinaEkrana < 800 && visinaEkrana >= 600 :
				kontejner.append('<div class="boks"><div class="lice">'+ slicice[rand] +'</div><div class="nalicje3"></div></div>');
				break;
			default :	
				kontejner.append('<div class="boksMali"><div class="liceMalo">'+ slicice[rand] +'</div><div class="nalicjeMalo3"></div></div>');
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
    				$('.dugmic').text('Nova igra - Nivo 4');
    				$('.dugmic2').text('Nova igra - Nivo 4');
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

			switch (true) {
				case visinaEkrana >= 800 :
					$(this).find('.nalicjeVeliko3').css('transform', 'perspective(200px) rotateY(180deg)');
					$(this).find('.licePoveliko').css('transform', 'perspective(200px) rotateY(0deg)');
					break;	
				case visinaEkrana < 800 && visinaEkrana >= 600 :	
					$(this).find('.nalicje3').css('transform', 'perspective(200px) rotateY(180deg)');
					$(this).find('.lice').css('transform', 'perspective(200px) rotateY(0deg)');
					break;
				default :
					$(this).find('.nalicjeMalo3').css('transform', 'perspective(120px) rotateY(180deg)');
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
							okrenute[0].find('.nalicjeVeliko3').css('transform', 'perspective(200px) rotateY(0deg)');
							okrenute[0].find('.licePoveliko').css('transform', 'perspective(200px) rotateY(180deg)');
							okrenute[1].find('.nalicjeVeliko3').css('transform', 'perspective(200px) rotateY(0deg)');
							okrenute[1].find('.licePoveliko').css('transform', 'perspective(200px) rotateY(180deg)');
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