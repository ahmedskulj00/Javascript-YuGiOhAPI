var image = document.getElementById ('card-image')
var cardName = document.getElementById('card-name')
var attack = document.getElementById ('attack')
var defence = document.getElementById('defence')

const apiData = {
    url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    type:'?id=',
    id: '89631139',
}

const {url, type, id} = apiData
const apiUrl = `${url}${type}${id}`

fetch (apiUrl)
.then((data) => data.json())
.then( (yugioh) => {
    console.log(yugioh)
    image.src = yugioh.data[0].card_images[0].image_url
    cardName.innerHTML ="Name of the card: " + yugioh.data[0].name
    attack.innerHTML = "Attack: " + yugioh.data[0].atk
    defence.innerHTML = "Defence: " + yugioh.data[0].def
}
)


