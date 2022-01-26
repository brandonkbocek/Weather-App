
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')




weatherForm.addEventListener('submit', (e) =>  {
    e.preventDefault()
    
    const location = search.value

    messageOne.textContent = ''
    messageTwo.textContent = 'loading message...'

    fetch('/weather?address=' + location).then((response) => {
        
        response.json().then((data) => {
            if(data.error){
                messageOne.textContent = ''
                messageTwo.textContent = 'Unable to find the location. Please try another search.'
                return console.log('error!')
            }
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            console.log(data.location)
            console.log(data.forecast)
        })
    })
})