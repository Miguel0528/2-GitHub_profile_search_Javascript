function getApi(){

    const user = document.getElementById('user').value
    const ul = document.querySelector("ul")
    ul.innerHTML = ""
    
    fetch(`https://api.github.com/users/${user}/repos`)
        .then(async res => {
            
            let data = await res.json()

            data.map(item => {
                let li = document.createElement("li")
                li.classList.add("list_area")

                li.innerHTML = `<div class="project_card">
                                    <h2 class="project_name">${item.name}</h2>
                                    <p class="project_link">Link: ${item.html_url}</p>   
                                </div> 
                                <hr class="line_2"> `

                ul.appendChild(li)
            })
        })
        .catch(e => {
            console.log(e);
            alert("Erro: " + e)
        })
}