const axios = require('axios')
const containerComedies = document.getElementById('container-comedies')

async function getComedies() {
    try {
       response = await axios.get('http://localhost:3000/get-comedy')
       if(containerComedies) {
       response.data.forEach(element => {
        const img = document.createElement('img')
        const title = document.createElement('p')
        title.innerText = element.title
        img.src = element.poster
        title.style.color = 'white'
        img.style.borderRadius = '20px'
        containerComedies.appendChild(img)
        containerComedies.appendChild(title)
       })
    }
    } catch (error) {
        console.log(error);
        
    }
}



getComedies()