
	$(function() {
	
		var clicks = 0;
		var boxVal = '';
		var val = '';

      	$('button').click(function() {
//assigns tiles & prevent placement in tile already assigned
	      	if ($(this).text() === "") {
	      	clicks += 1;
	      	}
//assigns -1 value for O placement
	        if ($(this).text() === "" && clicks % 2 !== 0) {
	        	$(this).text('0');
	        	$(this).attr('boxVal', '-1');
	        } 
//assigns 1 value for X placement
	        if ($(this).text() === "" && clicks % 2 == 0) {
	         	$(this).text('X');
	         	$(this).attr('boxVal', '1');
        	}

// checking if attribute being assigned:
			// if ( $('#btn1').attr('boxVal') === '1') {
			//  	console.log('Winner is X');
			//  }
			// if ( $('#btn1').attr('boxVal') === '-1') {
			//  	console.log('Winner is O');
			//  }

// check X winner
			if (
			Number($('#btn1').attr('boxVal')) + Number($('#btn2').attr('boxVal')) + Number($('#btn3').attr('boxVal')) === 3  ||
			Number($('#btn4').attr('boxVal')) + Number($('#btn5').attr('boxVal')) + Number($('#btn6').attr('boxVal')) === 3 ||
			Number($('#btn7').attr('boxVal')) + Number($('#btn8').attr('boxVal')) + Number($('#btn9').attr('boxVal')) === 3 ||
			Number($('#btn1').attr('boxVal')) + Number($('#btn4').attr('boxVal')) + Number($('#btn7').attr('boxVal')) === 3 ||
			Number($('#btn2').attr('boxVal')) + Number($('#btn5').attr('boxVal')) + Number($('#btn8').attr('boxVal'))=== 3  ||
			Number($('#btn3').attr('boxVal')) + Number($('#btn6').attr('boxVal')) + Number($('#btn9').attr('boxVal'))=== 3  ||
			Number($('#btn1').attr('boxVal')) + Number($('#btn5').attr('boxVal')) + Number($('#btn9').attr('boxVal')) === 3 ||
			Number($('#btn3').attr('boxVal')) + Number($('#btn5').attr('boxVal')) + Number($('#btn7').attr('boxVal')) === 3 ) {
				console.log('Winner is X!');
				$('#message').text('The winner is X!!!');
			}

//check O winner
			if (
			Number($('#btn1').attr('boxVal')) + Number($('#btn2').attr('boxVal')) + Number($('#btn3').attr('boxVal')) === -3  ||
			Number($('#btn4').attr('boxVal')) + Number($('#btn5').attr('boxVal')) + Number($('#btn6').attr('boxVal')) === -3 ||
			Number($('#btn7').attr('boxVal')) + Number($('#btn8').attr('boxVal')) + Number($('#btn9').attr('boxVal')) === -3 ||
			Number($('#btn1').attr('boxVal')) + Number($('#btn4').attr('boxVal')) + Number($('#btn7').attr('boxVal')) === -3 ||
			Number($('#btn2').attr('boxVal')) + Number($('#btn5').attr('boxVal')) + Number($('#btn8').attr('boxVal'))=== -3  ||
			Number($('#btn3').attr('boxVal')) + Number($('#btn6').attr('boxVal')) + Number($('#btn9').attr('boxVal'))=== -3  ||
			Number($('#btn1').attr('boxVal')) + Number($('#btn5').attr('boxVal')) + Number($('#btn9').attr('boxVal')) === -3 ||
			Number($('#btn3').attr('boxVal')) + Number($('#btn5').attr('boxVal')) + Number($('#btn7').attr('boxVal')) === -3 ) {
				console.log('Winner is O!');
				$('#message').text('The winner is O!!!');
			}

// check draw
			if (clicks >= 9) {
				console.log("It's a draw!");
				$('#message').text("It's a draw!");
			}
               	
    	})

        //winner check -> array or variables with all conditionals
        // $('.box').map(function() {return $(this). text();})
        // -> return 1 dimensional array list of values	

	})

