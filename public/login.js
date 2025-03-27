const form = document.getElementById("form")

//insertion API call
form.addEventListener('submit', async (event) =>{
    event.preventDefault();

    const formData = new FormData(form)
    const data = {}
    formData.forEach((value, key) => {
        data[key] = value
    })

    const response = await fetch('./api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const result = await response.json()
    alert(result.message || result.error)
})