console.log("Client file!");



const searchForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    messageOne.textContent = ''
    messageTwo.textContent = ''

    const location = search.value


    if (!location) {
        messageTwo.textContent = 'Please enter location'
        return;
    }
    messageOne.textContent = 'loading...'
    fetch('http://localhost:3000/weather?address=' + location).then(
        (response) => {
            response.json().then((data) => {
                messageOne.textContent = ''
                if (data.error) {
                    messageTwo.textContent = data.error
                    return;
                }
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            })
        }
    )
})