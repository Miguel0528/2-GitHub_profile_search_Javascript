function getApi(){

    const ul = document.querySelector("ul")
    ul.innerHTML = ""
    
    fetch("https://api.github.com/users/Otavinhopx/repos")
        .then(async res => {
            
            let data = await res.json()

            data.map(item => {
                let li = document.createElement("li")
                li.classList.add("list_area")

                li.innerHTML = "<strong>test</strong>"

                ul.appendChild(li)
            })
        })
        .catch()
}