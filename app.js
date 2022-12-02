let input = document.getElementById('input')
let btn = document.getElementById('submit')

btn.addEventListener('click',()=>{
    fetch(`https://api.github.com/users/${input.value}`)
    .then(response => response.json())
    .then((data)=>{
        let img = document.getElementById('avatar')
        img.src = `${data.avatar_url}`
        let name = document.getElementById('name')
        name.innerText = data.name
        let bio = document.getElementById('bio')
        bio.innerText = data.bio
        let username = document.getElementById('username')
        username.innerText = data.login
        let location = document.getElementById('location')
        location.innerText = data.location
        let repos = document.getElementById('repos')
        repos.innerText = data.public_repos
        let link = document.getElementById('link')
        link.href = data.html_url

    })
input.value = ""
})