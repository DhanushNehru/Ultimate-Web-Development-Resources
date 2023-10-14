document.addEventListener('DOMContentLoaded', () => {

    //card options....
    const cardArray = [
        {
            name: 'icecream',
            img: 'icecream.jpg'
        },
        {
            name: 'burger',
            img: 'burger.jpg'
        },
        {
            name: 'balls',
            img: 'balls.jpg'
        },
        {
            name: 'burger',
            img: 'burger.jpg'
        },
        {
            name: 'hotdog',
            img: 'hotdong.jpg'
        },
        {
            name: 'hotdog',
            img: 'hotdong.jpg'
        },
        {
            name: 'fries',
            img: 'fries.jpg'
        },
        {
            name: 'coldcoffee',
            img: 'coldcoffee.jpg'
        },
        {
            name: 'fries',
            img: 'fries.jpg'
        },
        {
            name: 'balls',
            img: 'balls.jpg'
        },
        {
            name: 'icecream',
            img: 'icecream.jpg'
        },
        {
            name: 'coldcoffee',
            img: 'coldcoffee.jpg'
        },
        
    ]
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    var resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon =[]
    //create your board------
    function CreateBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', './fill.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }

    }
    
    //check for matches----
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src' , './blank1.jpg')
            cards[optionTwoId].setAttribute('src', './blank1.jpg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src' , './fill.jpg')
            cards[optionTwoId].setAttribute('src', './fill.jpg')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent ='Congratulations! You Found Them All !'
        }

    }
    //flip your card----

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    CreateBoard()



})