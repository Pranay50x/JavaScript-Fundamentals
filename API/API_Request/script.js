const xhr = new XMLHttpRequest();
const requestURL = 'https://api.github.com/users/pratz1337'
xhr.open('GET',requestURL )
// console.log(xhr.readyState);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        console.log(typeof data);
        console.log(data.bio);

        const image = document.createElement('img');
        image.src = data.avatar_url;
        document.body.appendChild(image);
        let content = document.createElement('div');
        content.innerHTML= data.followers;
        document.body.appendChild(content) ;
    }
}
xhr.send()



