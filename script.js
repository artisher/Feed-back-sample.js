//variable
const textAreaEl = document.querySelector('.form__textarea');
const counterEl = document.querySelector('.counter');
const formEl = document.querySelector('.form');
const feedsEl = document.querySelector('.feedbacks');
const submitEl = document.querySelector('.submit-btn');
const spinnerEl = document.querySelector('.spinner');
const BASE_API_URL = 'https://bytegrad.com/course-assets/js/1/api/';
const hashtagsEl = document.querySelector('.hashtags');


//function
const render = feedback => {
    const feedItem = `
    <li class="feedback">
  <button class="upvote">
      <i class="fa-solid fa-caret-up upvote__icon"></i>
      <span class="upvote__count">${feedback.upvoteCount}</span>
  </button>
  <section class="feedback__badge">
      <p class="feedback__letter">${feedback.badgeLetter}</p>
  </section>
  <div class="feedback__content">
      <p class="feedback__company">${feedback.company}</p>
      <p class="feedback__text">${feedback.text}</p>
  </div>
  <p class="feedback__date">${feedback.daysAgo === 0 ? "New" : feedback.daysAgo}d</p>
  </li>`;
    feedsEl.insertAdjacentHTML('beforeend', feedItem);
}

const inputHandler = () => {
    const maxChar = 150;
    const typedChar = textAreaEl.value.length;
    const charLeft = maxChar - typedChar;


    counterEl.textContent = charLeft;

};

// class ke be onvan voroodi oomade ro hazf mikone 
const colorChanger = (className) => {
    setTimeout(() => formEl.classList.remove(className), 2000)
}


const submitHandler = (event) => {
    event.preventDefault();
    const text = textAreaEl.value;
    if (text.includes('#') && text.length >= 5) { // agar bozorgtar az 5 char va # dasht class valid ro bede ke sabz behse
        formEl.classList.add('form--valid')
        colorChanger('form--valid');
    } else {
        formEl.classList.add('form--invalid')
        colorChanger('form--invalid');
        textAreaEl.focus();
        return;
    }

    const hashtag = text.split(' ').find((word) => word.includes("#"));// bia kalamt ro joda kon va to harkalame ke # bood ro peyda kon
    const company = hashtag.slice(1);
    const badgeLetter = company.slice(0, 1).toUpperCase();
    const upvoteCount = 0;
    const daysAgo = 0;




    const feed = {
        company: company,
        badgeLetter: badgeLetter,
        upvoteCount: upvoteCount,
        daysAgo: daysAgo,
        text: text
    }
    render(feed)

    // Post to server
    fetch(`${BASE_API_URL}feedbacks`, {
        method: 'POST',
        body: JSON.stringify(feed),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (!response.ok) {
            console.log('We have Problem !!!');
            return;
        }
        console.log("Success !!!");

    }).catch(error => console.log(error));

    textAreaEl.value = ' ';
    submitEl.blur();
    counterEl.textContent = '150';
}
const clickHandler = (event) => {




    console.log(event.target);

    const clickedEl = event.target;
    const upvoteBtn = event.target.closest('.upvote');
    if (upvoteBtn) {
        const voteCounter = upvoteBtn.querySelector('.upvote__count');
        voteCounter.textContent = parseInt(voteCounter.textContent) + 1;
        upvoteBtn.disabled = true
    }

    if (clickedEl.classList.contains('feedback__text')) {

        clickedEl.closest('.feedback').classList.toggle('feedback--expand');
    }


}

//API
const getFunc = () =>{fetch(`${BASE_API_URL}feedbacks`)
.then(response => {
    return response.json();
})
.then(data => {


    data.feedbacks.forEach(feedsItem => {
        render(feedsItem)
    });
    spinnerEl.remove();

})
.catch(error => {
    feedsEl.textContent = `failed to fetch Data. error : ${error.message}`
}
);}

getFunc();




const hashtagHandler = event => {
    
    const clickedHashtag = event.target;
    if (clickedHashtag.className === 'hashtags') return;
    getFunc()
    const companyNameFromHashtag = clickedHashtag.textContent.slice(1).trim();

    feedsEl.childNodes.forEach(childNode => {
        if (childNode.nodeType === 3) return;
        const companyNameFromFeedbackItem = childNode.querySelector('.feedback__company').textContent.toLowerCase().trim();


        if (companyNameFromHashtag.toLowerCase().trim() !== companyNameFromFeedbackItem) {
            childNode.remove();
        }


    })


}

//event listener
textAreaEl.addEventListener('input', inputHandler);
formEl.addEventListener('submit', submitHandler);
feedsEl.addEventListener('click', clickHandler);
hashtagsEl.addEventListener('click', hashtagHandler);