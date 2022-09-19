$(document).ready(function () {

    $('#keyboard-upper-container').hide();

    $(document).on('keydown', function(e) {
        let key = e.which;
        if (key == 16) {
            $('#keyboard-upper-container').toggle();
            $('#keyboard-lower-container').toggle();
        }
    })

    $(document).on('keyup', function(e) {
        let key = e.which;
        if (key == 16) {
            $('#keyboard-upper-container').toggle();
            $('#keyboard-lower-container').toggle();
        }
    })

    $(document).on('keypress', function(e) {
        // console.log(e.which);
        $('#' + e.which).css('background-color', 'yellow');
    })

    
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

    for(let i = 0; i < sentences.length; i++) {
        $('#sentence').append('<div id="' + (i+1) + '">');
        $('div#' + (i+1)).append(sentences[i]);
    }


    let count = 0;
    let errors = 0;
    let timer = []

    $(document).on('keypress', function(e) {
        // console.log(e.which);
        let time = (e.timeStamp / 1000);
        timer.push(time);
        // console.log("this is start time: " + timer);

        
        if (count < 240) {    
            if (count < 47) {
                if(e.which == $('#1').text().charCodeAt(count)) {
                    $("#feedback").append('<span class="glyphicon glyphicon-ok"></span>');
                    let nextChar = $('#1').text().charCodeAt(count+1);
                    let nextLetter = String.fromCharCode(nextChar);
                    $('#target-letter').empty();
                    $('#target-letter').append(nextLetter);
                    let hmove = 17.5*(count+1);
                    $('#yellow-block').css('left', (17+hmove));
                    ++count;
                } else {
                    $("#feedback").append('<span class="glyphicon glyphicon-remove"></span>');
                    ++errors
                }
            } else if (count == 47) {
                let nextChar = $('#2').text().charCodeAt(0);
                let nextLetter = String.fromCharCode(nextChar);
                $('#target-letter').empty();
                $('#target-letter').append(nextLetter);
                $('#feedback').empty();
                let hmove = 17;
                let vmove = 33;
                $('#yellow-block').css('left', hmove);
                $('#yellow-block').css('top', vmove);
                ++count;
            } else if (47 < count && count < 94) {
                if(e.which == $('#2').text().charCodeAt(count - 48)) {
                    $("#feedback").append('<span class="glyphicon glyphicon-ok"></span>');
                    let nextChar = $('#2').text().charCodeAt((count - 48) + 1);
                    let nextLetter = String.fromCharCode(nextChar);
                    $('#target-letter').empty();
                    $('#target-letter').append(nextLetter);
                    let hmove = 17.5*((count - 47)+1);
                    $('#yellow-block').css('left', hmove);
                    ++count;
                } else {
                    $("#feedback").append('<span class="glyphicon glyphicon-remove"></span>');
                    ++errors
                }
            } else if (count == 94) {
                let nextChar = $('#3').text().charCodeAt(0);
                let nextLetter = String.fromCharCode(nextChar);
                $('#target-letter').empty();
                $('#target-letter').append(nextLetter);
                $('#feedback').empty();
                let hmove = 17;
                let vmove = 67;
                $('#yellow-block').css('left', hmove);
                $('#yellow-block').css('top', vmove);
                ++count;
            } else if (94 < count && count < 142) {
                if(e.which == $('#3').text().charCodeAt(count - 95)) {
                    $("#feedback").append('<span class="glyphicon glyphicon-ok"></span>');
                    let nextChar = $('#3').text().charCodeAt((count - 95) + 1);
                    let nextLetter = String.fromCharCode(nextChar);
                    $('#target-letter').empty();
                    $('#target-letter').append(nextLetter);
                    let hmove = 17.5*((count - 94)+1);
                    $('#yellow-block').css('left', hmove);
                    ++count;
                } else {
                    $("#feedback").append('<span class="glyphicon glyphicon-remove"></span>');
                    ++errors
                }
            } else if (count == 142) {
                let nextChar = $('#4').text().charCodeAt(0);
                let nextLetter = String.fromCharCode(nextChar);
                $('#target-letter').empty();
                $('#target-letter').append(nextLetter);
                $('#feedback').empty();
                let hmove = 17;
                let vmove = 100;
                $('#yellow-block').css('left', hmove);
                $('#yellow-block').css('top', vmove);
                ++count;         
            } else if (142 < count && count < 190) {
                if(e.which == $('#4').text().charCodeAt(count - 143)) {
                    $("#feedback").append('<span class="glyphicon glyphicon-ok"></span>');
                    let nextChar = $('#4').text().charCodeAt((count - 143) + 1);
                    let nextLetter = String.fromCharCode(nextChar);
                    $('#target-letter').empty();
                    $('#target-letter').append(nextLetter);
                    let hmove = 17.5*((count - 142)+1);
                    $('#yellow-block').css('left', hmove);
                    ++count;
                } else {
                    $("#feedback").append('<span class="glyphicon glyphicon-remove"></span>');
                    ++errors
                }
            } else if (count == 190) {
                let nextChar = $('#5').text().charCodeAt(0);
                let nextLetter = String.fromCharCode(nextChar);
                $('#target-letter').empty();
                $('#target-letter').append(nextLetter);
                $('#feedback').empty();
                let hmove = 17;
                let vmove = 135;
                $('#yellow-block').css('left', hmove);
                $('#yellow-block').css('top', vmove);
                ++count;     
            } else if (190 < count && count < 239) {
                if(e.which == $('#5').text().charCodeAt(count - 191)) {
                    $("#feedback").append('<span class="glyphicon glyphicon-ok"></span>');
                    let nextChar = $('#5').text().charCodeAt((count - 191) + 1);
                    let nextLetter = String.fromCharCode(nextChar);
                    $('#target-letter').empty();
                    $('#target-letter').append(nextLetter);
                    let hmove = 17.5*((count - 190)+1);
                    $('#yellow-block').css('left', hmove);
                    ++count;
                } else {
                    $("#feedback").append('<span class="glyphicon glyphicon-remove"></span>');
                    ++errors
                }
            } else {
                let length = timer.length
                let minutes = (timer[length - 1] - timer[0]) / 60
                // console.log('this is errors quantity: ' + errors); 
                let score = Math.round((54 / minutes) - (2 * errors));
                $('#target-letter').empty();
                $('#target-letter').append('Your score is: ' + score + '!!');
                
                function confirmAction () {
                    let confirmAction = confirm("Would you like to play again?")
                    if (confirmAction) {
                        location.reload();
                    } else {

                    }
                }
                setTimeout(confirmAction, 3000);
            }    
        } 
        
    })
}) 