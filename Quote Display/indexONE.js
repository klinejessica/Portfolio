const colorRandomizer = () => {
    const myColors = ['#827AC4',
        '#937FBB',
        '#BE8ABF',
        '#EA9ABB',
        '#FEA5AD',
        '#F8C3AF']
    const randomNum = Math.floor((Math.random()*myColors.length))
    // generate random number
    const randomColor = myColors[randomNum];
    //modify bg and txt color with my random color
    // get the DOM element
    const bg = document.querySelector('.randomBgSelector')
    bg.setAttribute('style', `background-color: ${randomColor}`);

    const textElements = document.querySelectorAll('.randomTxtColor');
    for(const text of textElements) {
        // we have multiple elements where we want to change the text colors
        text.setAttribute('style', `color: ${randomColor}`)
    }
}

const getQuote = (data) => {
    const url =
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    // creating the callback function that we will pass to the JSONP request
    const callBackName = 'displayQuote'
    window[callBackName] = function(data) {
        delete window[callBackName]
        document.body.removeChild(script)
        callBackName(data)
    }
    // injecting the script tag into our HTML
    const script = document.createElement('script')
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callBack=' + callBackName
    document.body.appendChild(script)
}

const displayQuote = (data) => {
    const currentQuote = data.quoteText;
    const currentAuthor = data.quoteAuthor;
    // Add them to HMTL
    const text = document.querySelector('#quoteText')
    text.innerHTML = currentQuote
    const author = document.querySelector('#quoteAuthor')
    text.innerHTML = `-${currentAuthor}`;
}

document.querySelector("#new-quote").addEventListener('click', () => {
    getQuote(displayQuote);
  })

document.addEventListener('DOMContentLoaded', () => {
    getQuote(displayQuote);
})