let textareaEl = document.querySelector('.textarea');
let charnumberEl = document.querySelector('.statNumberChar');
let twitternumber = document.querySelector('.statNumberTwitter');
let facebooknumber = document.querySelector('.statNumberFacebook');
let wordsnumberEl = document.querySelector('.statNumberWord');

textareaEl.addEventListener('input', function () {
    let text = textareaEl.value.trim();
    let wordsCount = text.length > 0 ? text.split(/\s+/).length : 0;
    let charnumber = text.length;
    let twitterCounter = 280 - charnumber;
    let facebookecounter = 2200 - charnumber;
    
    wordsnumberEl.textContent = wordsCount;
    charnumberEl.textContent = charnumber;
    twitternumber.textContent = twitterCounter;
    facebooknumber.textContent = facebookecounter;


    if ( twitterCounter < 0) {
        twitternumber.classList.add('alert')
    }
    else{
        twitternumber.classList.remove('alert')

    }
    
    if ( facebookecounter < 0) {
        facebooknumber.classList.add('alert')
    }
    else{
        facebooknumber.classList.remove('alert')

    }
});
