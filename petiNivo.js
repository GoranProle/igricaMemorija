jQuery(document).ready(function($) {
	var visinaEkrana = window.innerHeight;
	switch (true) {
		case visinaEkrana >= 800 :
			var wrapper = $('#wrapper5').css({'height':'670px','max-width':'640px','margin-top':'60px'});
			wrapper.append('<div class="naslov"><button id="dugmic" onclick="history.go(0)">Nova igra</button><div class="poruka"></div></div><div class="kontejnerVeliki"></div><div class="logoNovi"></div>');
			var kontejner = $('.kontejnerVeliki');
			var slicice = ['<img src="images/m/81a.jpg"/>','<img src="images/m/82a.jpg"/>','<img src="images/m/83a.jpg"/>','<img src="images/m/84a.jpg"/>',
			'<img src="images/m/85a.jpg"/>','<img src="images/m/86a.jpg"/>','<img src="images/m/87a.jpg"/>','<img src="images/m/88a.jpg"/>',
			'<img src="images/m/89a.jpg"/>','<img src="images/m/90a.jpg"/>','<img src="images/m/91a.jpg"/>','<img src="images/m/92a.jpg"/>',
			'<img src="images/m/93a.jpg"/>','<img src="images/m/94a.jpg"/>','<img src="images/m/95a.jpg"/>','<img src="images/m/96a.jpg"/>',
			'<img src="images/m/97a.jpg"/>','<img src="images/m/98a.jpg"/>',
			'<img src="images/m/81b.jpg"/>','<img src="images/m/82b.jpg"/>','<img src="images/m/83b.jpg"/>','<img src="images/m/84b.jpg"/>',
			'<img src="images/m/85b.jpg"/>','<img src="images/m/86b.jpg"/>','<img src="images/m/87b.jpg"/>','<img src="images/m/88b.jpg"/>',
			'<img src="images/m/89b.jpg"/>','<img src="images/m/90b.jpg"/>','<img src="images/m/91b.jpg"/>','<img src="images/m/92b.jpg"/>',
			'<img src="images/m/93b.jpg"/>','<img src="images/m/94b.jpg"/>','<img src="images/m/95b.jpg"/>','<img src="images/m/96b.jpg"/>',
			'<img src="images/m/97b.jpg"/>','<img src="images/m/98b.jpg"/>'];
			break;
		case visinaEkrana < 800 && visinaEkrana >= 600:
			var wrapper = $('#wrapper5').css({'height':'550px','max-width':'521px','margin-top':'-10px'});
			wrapper.append('<div class="naslov"><button id="dugmic" onclick="history.go(0)">Nova igra</button><div class="poruka"></div></div><div class="kontejner"></div><div class="logoNovi"></div>');
			var kontejner = $('.kontejner');
			var slicice = ['<img src="images/m/81e.jpg"/>','<img src="images/m/82e.jpg"/>','<img src="images/m/83e.jpg"/>','<img src="images/m/84e.jpg"/>',
			'<img src="images/m/85e.jpg"/>','<img src="images/m/86e.jpg"/>','<img src="images/m/87e.jpg"/>','<img src="images/m/88e.jpg"/>',
			'<img src="images/m/89e.jpg"/>','<img src="images/m/90e.jpg"/>','<img src="images/m/91e.jpg"/>','<img src="images/m/92e.jpg"/>',
			'<img src="images/m/93e.jpg"/>','<img src="images/m/94e.jpg"/>','<img src="images/m/95e.jpg"/>','<img src="images/m/96e.jpg"/>',
			'<img src="images/m/97e.jpg"/>','<img src="images/m/98e.jpg"/>',
			'<img src="images/m/81f.jpg"/>','<img src="images/m/82f.jpg"/>','<img src="images/m/83f.jpg"/>','<img src="images/m/84f.jpg"/>',
			'<img src="images/m/85f.jpg"/>','<img src="images/m/86f.jpg"/>','<img src="images/m/87f.jpg"/>','<img src="images/m/88f.jpg"/>',
			'<img src="images/m/89f.jpg"/>','<img src="images/m/90f.jpg"/>','<img src="images/m/91f.jpg"/>','<img src="images/m/92f.jpg"/>',
			'<img src="images/m/93f.jpg"/>','<img src="images/m/94f.jpg"/>','<img src="images/m/95f.jpg"/>','<img src="images/m/96f.jpg"/>',
			'<img src="images/m/97f.jpg"/>','<img src="images/m/98f.jpg"/>'];
			break;
		default :	
			var wrapper = $('#wrapper5').css({'height':'375px','max-width':'343px','margin-top':'10px'});
			wrapper.append('<div class="naslovMali"><button id="dugmic2" onclick="history.go(0)">Nova igra</button><div class="poruka2"></div></div><div class="kontejnerMali"></div><div class="logoNovi"></div>');
			var kontejner = $('.kontejnerMali');
			var slicice = ['<img src="images/m/81c.jpg"/>','<img src="images/m/82c.jpg"/>','<img src="images/m/83c.jpg"/>','<img src="images/m/84c.jpg"/>',
			'<img src="images/m/85c.jpg"/>','<img src="images/m/86c.jpg"/>','<img src="images/m/87c.jpg"/>','<img src="images/m/88c.jpg"/>',
			'<img src="images/m/89c.jpg"/>','<img src="images/m/90c.jpg"/>','<img src="images/m/91c.jpg"/>','<img src="images/m/92c.jpg"/>',
			'<img src="images/m/93c.jpg"/>','<img src="images/m/94c.jpg"/>','<img src="images/m/95c.jpg"/>','<img src="images/m/96c.jpg"/>',
			'<img src="images/m/97c.jpg"/>','<img src="images/m/98c.jpg"/>',
			'<img src="images/m/81d.jpg"/>','<img src="images/m/82d.jpg"/>','<img src="images/m/83d.jpg"/>','<img src="images/m/84d.jpg"/>',
			'<img src="images/m/85d.jpg"/>','<img src="images/m/86d.jpg"/>','<img src="images/m/87d.jpg"/>','<img src="images/m/88d.jpg"/>',
			'<img src="images/m/89d.jpg"/>','<img src="images/m/90d.jpg"/>','<img src="images/m/91d.jpg"/>','<img src="images/m/92d.jpg"/>',
			'<img src="images/m/93d.jpg"/>','<img src="images/m/94d.jpg"/>','<img src="images/m/95d.jpg"/>','<img src="images/m/96d.jpg"/>',
			'<img src="images/m/97d.jpg"/>','<img src="images/m/98d.jpg"/>'];
	}
	
	var klikni = 0;
	var okrenute = [];  
	var nedodirljivi = [];       
	var kraj = 0;
	var vreme = 100; // vreme predvidjeno da se predje 5. nivo

	for (var i = 0; i < 36; i++) {
		var rand = Math.floor(Math.random()*slicice.length);

		switch (true) {
			case visinaEkrana >= 800 :
				kontejner.append('<div class="boksVeliki"><div class="licePoveliko">'+ slicice[rand] +'</div><div class="nalicjeVeliko5"></div></div>');
				break;
			case visinaEkrana < 800 && visinaEkrana >= 600 :
				kontejner.append('<div class="boks"><div class="lice">'+ slicice[rand] +'</div><div class="nalicje5"></div></div>');
				break;
			default :	
				kontejner.append('<div class="boksMali"><div class="liceMalo">'+ slicice[rand] +'</div><div class="nalicjeMalo5"></div></div>');
		}

		slicice.splice(rand,1);
	};

	$('.logoNovi').append('<img src="images/m/logo_prole_software_2020.jpg"/>');

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
    				if (visinaEkrana >= 600) {
    					$('#dugmic').get(0).style.visibility = 'hidden';
    				} else {
    					$('#dugmic2').get(0).style.visibility = 'hidden';
    				}
     				$('.poruka').text('REŠILI STE NIVO 5 - KRAJ IGRE');
    				$('.poruka2').text('REŠILI STE NIVO 5 - KRAJ IGRE').css('text-align','center');
      			} else {
    				$('.poruka').text('VREME JE ISTEKLO'); 
    				$('.poruka2').text('VREME JE ISTEKLO'); 
    				$('.boks').css('pointer-events','none');
    				$('.boksMali').css('pointer-events','none');
    			}
    		} else {
    			$('.poruka').text('NIVO 5 - Ostalo je još ' + vreme + ' sekundi'); 
    			$('.poruka2').text('NIVO 5 - Ostalo je još ' + vreme + ' sekundi'); 
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
					$(this).find('.nalicjeVeliko5').css('transform', 'perspective(200px) rotateY(180deg)');
					$(this).find('.licePoveliko').css('transform', 'perspective(200px) rotateY(0deg)');
					break;	
				case visinaEkrana < 800 && visinaEkrana >= 600 :	
					$(this).find('.nalicje5').css('transform', 'perspective(200px) rotateY(180deg)');
					$(this).find('.lice').css('transform', 'perspective(200px) rotateY(0deg)');
					break;
				default :
					$(this).find('.nalicjeMalo5').css('transform', 'perspective(120px) rotateY(180deg)');
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
							okrenute[0].find('.nalicjeVeliko5').css('transform', 'perspective(200px) rotateY(0deg)');
							okrenute[0].find('.licePoveliko').css('transform', 'perspective(200px) rotateY(180deg)');
							okrenute[1].find('.nalicjeVeliko5').css('transform', 'perspective(200px) rotateY(0deg)');
							okrenute[1].find('.licePoveliko').css('transform', 'perspective(200px) rotateY(180deg)');
							okrenute[0].find('.nalicje5').css('transform', 'perspective(200px) rotateY(0deg)');
							okrenute[0].find('.lice').css('transform', 'perspective(200px) rotateY(180deg)');
							okrenute[1].find('.nalicje5').css('transform', 'perspective(200px) rotateY(0deg)');
							okrenute[1].find('.lice').css('transform', 'perspective(200px) rotateY(180deg)');
							okrenute[0].find('.nalicjeMalo5').css('transform', 'perspective(120px) rotateY(0deg)');
							okrenute[0].find('.liceMalo').css('transform', 'perspective(120px) rotateY(180deg)');
							okrenute[1].find('.nalicjeMalo5').css('transform', 'perspective(120px) rotateY(0deg)');
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