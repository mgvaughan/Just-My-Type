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
        // $('<div>').append(sentences[i]);
        $('#sentence').append('<div id="' + (i+1) + '">');
        $('div#' + (i+1)).append(sentences[i]);
    }

    // console.log($('#1').text());
    // console.log($('#5').text().length);
    // console.log($('#1').text().charCodeAt(5));

    // line 1 length is 48
    let line1count = 0;
    // line 2 length is 47
    let line2count = 0;
    // line 3 length is 48
    let line3count = 0;
    // line 4 length is 48
    let line4count = 0;
    // line 5 length is 48
    let line5count = 0;

    $(document).on('keypress', function(e) {
        console.log(line1count);
        console.log(e.which);

        while (line1count < $('#1').text().length) {
            if(e.which == $('#1').text().charCodeAt(line1count)) {
                console.log('Yess!!!!!');
                nextLetter = $('#1').text().charCodeAt(line1count+1);
                // console.log(nextLetter);
                line1_hmove = 18*(++line1count+1);
                console.log(line1_hmove);
                $('#yellow-block').css('left', line1_hmove);
            } else {
                break;
            }
        } $('#yellow-block').css('left', line1_hmove)
        
        // if(e.which == $('#1').text().charCodeAt(line1count)) {
        //     // console.log('Yess!!!!!');
        //     nextLetter = $('#1').text().charCodeAt(line1count+1);
        //     // console.log(nextLetter);
        //     line1_hmove = 18*(++line1count+1);
        //     console.log(line1_hmove);
        //     $('#yellow-block').css('left', line1_hmove);
        // } else {
            
        // }

    })
}) 