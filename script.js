console.log("This is my script")

let result = {

    "tag": "",
    "free": true,
    "role": false,
    "user": "kirtipandeysrp",
    "email": "kirtipandeysrp@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true

}



submitBtn.addEventListener("click", async(e) => {
    e.preventDefault()
    console.log("Clicked!")
    resultCont.innerHTML = `<img width="123" src="loading.svg" alt="">`
    let key = "ema_live_APzSjd8SZIQ4cioC3CGUNYUEL6IUn5SM22gYbMpJ"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }

    console.log(str)
    resultCont.innerHTML = str
})