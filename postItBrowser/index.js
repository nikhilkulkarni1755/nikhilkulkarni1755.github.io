function sendToEmail() {
    //we need to find an email provider which will send emails in specific format. 
    //we will not be spamming hopefully (free tier)

}

function deleteSpecificNode() {
    console.log('I have clicked on an Element! We can soon figure out which element!')
    
}

function populate() {
    let size = window.localStorage.getItem(0 + '')
    if(size == null) {
        console.log('size is null')
        window.localStorage.setItem(0 + '', "0")
        let clone = document.getElementById("post").cloneNode(true)
        clone.innerHTML = window.localStorage.getItem(0 + '')
        document.getElementById("post").appendChild(clone)
    }
    else if(Math.floor(size) > 0) {
        console.log('size is ' + size)
        console.log('size is greater than 0')
        //document.getElementById("post").removeChild(document.getElementById("post").firstChild)
        while(document.getElementById("post").firstChild) {
            document.getElementById("post").removeChild(document.getElementById("post").firstChild)
        }

        var clone;
        for(let i = 1; i <= size; i++) {
            clone = document.getElementById("post").cloneNode(true);
            clone.innerHTML = window.localStorage.getItem(i + '');
            console.log('innerHTML for ' + i + 'is: ' + clone.innerHTML)
            var color = Math.floor(Math.random() * 3)
            console.log(color)
            if(color == 0) {
                clone.style.backgroundColor = "lightgreen"
            }
            if(color == 1) {
                clone.style.backgroundColor = "orange"
            }
            if(color == 2) {
                clone.style.backgroundColor = "lightblue"
            }
            
            //document.getElementById("post").appendChild(clone)
            document.getElementById("post").insertBefore(clone, document.getElementById("post").firstChild)
        }
    }
    else {
        console.log('size is ' + size)
        console.log('size is 0')
    }
    document.getElementById("postIt").focus()   
}

function postIt() {
    post = document.getElementById("postIt").value
    document.getElementById("postIt").value=""
    //console.log(post)
    let clone = document.getElementById("post").cloneNode(true);
    clone.innerHTML = post
    clone.style.backgroundColor = "lightgreen"
    document.getElementById("post").appendChild(clone)
    
    //added new item, need to change the size
    let size = window.localStorage.getItem(0 + '')
    if(size == '0') {
        console.log('in postIt method and size is 0')
        size = 1  
    }
    else {
        size = Math.floor(size)
        size += 1
    }

    window.localStorage.setItem(0 + '', size)
    
    saveLocally(size, post)
}

function saveLocally(number, post) {
    //console.log('storing in ' + number)
    window.localStorage.setItem(number + '', post)
    //clearScreen()
    populate()
}

function clearScreen() {
    
    if(confirm("Delete all your notes?")) {
        let size = window.localStorage.getItem(0+'')
        if(size == '0') {
            console.log('size is 0')
            window.localStorage.clear()
            window.localStorage.setItem(0 + '', "0")
        }
        else {
            console.log('size is greater than 0')
            window.localStorage.clear()
            window.localStorage.setItem(0 + '', "0")
        }

        console.log('User wanted to delete all previous notes!')
    }
    else {
        console.log('User accidentally pressed delete all')
    }

    

}