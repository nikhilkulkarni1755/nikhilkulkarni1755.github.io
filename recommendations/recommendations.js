
//https://www.googleapis.com/books/v1/volumes?q=anna+karenina&callback=handleResponse

//choose between books and magazines by changing params in the query.

//what could a query include? 
//it can include author name
//isbn number if you nerding out
//title
//description

let defQuery = ''
let exampleTexts = ['The Idiot', 'The Alchemist', 'War And Peace', 'The Sun Also Rises', 'Anna Karenina', 'Storm of Swords', 'Goblet of Fire', 'Antigone', 'The Night Thoreau Spent in Jail', 'Rabindranath Tagore', 'The Picture of Dorian Gray']

function init() {
    let index = Math.floor(Math.random() * (exampleTexts.length - 0) + 0)
    document.getElementById('searchQuery').placeholder = exampleTexts[index]
    defQuery = exampleTexts[index]
}

function getRecommendations() {
    let index = Math.floor(Math.random() * (exampleTexts.length - 0) + 0)
    document.getElementById('searchQuery').placeholder = exampleTexts[index]
    defQuery = exampleTexts[index]
}

//remove authors who are spelled very similarly to the other authors
//this should remove different spellings of the same person hopefully
function commonLetters() {

}

function findMostOccuringAuthor(author) {
    const authorMap = new Map()

    for(let i = 0; i < author.length; i++) {
        for(let j = 0; j < author[i].length; j++) {
            if(!authorMap.has(author[i][j])) {
                authorMap.set(author[i][j], 1)
            }
            else {
                var num = authorMap.get(author[i][j])
                authorMap.set(author[i][j], ++num) //num++ doesn't work
            }
        }
    }

    //taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    let popularAuthors = []
    let highest = -1
    let highestAuthor = ""
    if(authorMap.size >= 3) {
        for(let i = 0; i < 3; i++) {
            for (const [key, value] of authorMap) {
                console.log(`${key} = ${value}`)
                if(value > highest) {
                    highest = value
                    highestAuthor = key
                } 
            }
            console.log("highestAuthor: " + highestAuthor + ", " + highest)
            popularAuthors.push({author: highestAuthor, count: highest})
            authorMap.delete(highestAuthor)
            highest = -1
        }
    }
    
    return popularAuthors
}

function isAuthor(author) {
    var counter = 0
    //for(let i = 0; i < author.length; i++) {
    //    for(let j = 0; j < author[i].length; j++) {
            //counter += 1
            //console.log(counter + ") " + author[i][j])
    //    }
    //}

    for(let i = 0; i < author.length; i++) {
        for(let j = 0; j < author[i].length; j++) {
            //author[i][j].toUpperCase()
            counter += 1
            author[i][j] = author[i][j].toUpperCase() 
            console.log(counter + ") " + author[i][j])
        }
    }

    let popularAuthors = findMostOccuringAuthor(author)
    console.log("These are some popular authors: ")
    document.getElementById("recommendations").innerHTML += "<br>" + "Some popular authors mentioned above are:" +  "<br>"
    for(let i = 0; i < popularAuthors.length; i++) {
        console.log(popularAuthors[i].author + ", " + popularAuthors[i].count)
        document.getElementById("recommendations").innerHTML += "<br>" + popularAuthors[i].author + " is mentioned " + popularAuthors[i].count + " times!<br>"  
    }

      

    //console.log('This is not printing out!')

    /*
    document.getElementById("recommendations").innerHTML += "<br>" + "Some authors related to this search: " + "<br>"
    for(let i = 0; i < author.length; i++) {
        for(let j = 0; j < author[i]; j++) {
            console.log(author[i][j])
            document.getElementById("recommendations").innerHTML += "<br>" + "" + author[i][j]
        }
    }
    */

    // Here we go thru and check which names pops out the most. That name will give us more recommendations

    console.log('Or above is not printing out!')
    
    return true;
}

function apiCall() {
    var query = document.getElementById("searchQuery").value
    
    //if query is empty, we use the query randomly chosen to be the placeholder text
    if(query == '') {
        query = defQuery
    }
    console.log(query)
    document.getElementById("content").innerHTML = '';
    //document.getElementById("content").innerHTML += "<br>" + query
    //var apiQuery = "https://www.googleapis.com/books/v1/volumes?callback=handleResponse&q=" + query
    var apiQuery = "https://www.googleapis.com/books/v1/volumes?maxResults=20&q=" + query
    //https://www.googleapis.com/books/v1/volumes?q=""+inauthor:leo tolstoy
    //var apiQuery = "https://www.googleapis.com/books/v1/volumes?q=''+inauthor:" + query
    
    //we don't need to show this anymore.
    //document.getElementById("content").innerHTML += "<br>" + apiQuery

    const request = new XMLHttpRequest()
    request.open("GET", apiQuery)
    request.send()
    request.onload = () => {
        if(request.status == 200) {
            //document.getElementById("content").innerHTML += "<br>" + request.responseText
            var text = JSON.parse(request.responseText)
            //console.log(text)
            //console.log(text[0])
            //console.log(text.items[0])
            //console.log(text.items[0].volumeInfo.description)
            //document.getElementById("content").innerHTML += "<br>" + "DONE" + "<br>" + "<br>"
            //document.getElementById("content").innerHTML += "<br>" + text.items[0].volumeInfo.title
            //document.getElementById("content").innerHTML += "<br>" + text.items[0].volumeInfo.authors
            //document.getElementById("content").innerHTML += "<br>" + text.items[0].volumeInfo.description


            //Object.keys(myObject).length

            var author = []
            var title = []
            var description = []
            var publisher = []

            document.getElementById("content").innerHTML += "<br>Number of results: " + Object.keys(text.items).length
            var counter = 1
            var undefinedItems = []
            for(var i = 0; i < Object.keys(text.items).length; i++) {

                //if anything undefined, move it into array. After this list is done, print the undefined list
                if(text.items[i].volumeInfo.title == undefined || text.items[i].volumeInfo.authors == undefined || text.items[i].volumeInfo.description == undefined || text.items[i].volumeInfo.publisher == undefined) {
                    var undefinedBook = {title: text.items[i].volumeInfo.title, authors: text.items[i].volumeInfo.authors, description: text.items[i].volumeInfo.description, publisher: text.items[i].volumeInfo.publisher}
                    console.log("Printing out undefined below!")
                    console.log(undefinedBook)
                    undefinedItems.push(undefinedBook)
                    continue
                }
                //pushing multiple authors?
                console.log("text.items[i].volumeInfo.authors: " + text.items[i].volumeInfo.authors)
                author.push(text.items[i].volumeInfo.authors)
                title.push(text.items[i].volumeInfo.title)
                description.push(text.items[i].volumeInfo.description)
                publisher.push(text.items[i].volumeInfo.publisher)
                /*
                document.getElementById("content").innerHTML += "<br>" + counter + ")" + text.items[i].volumeInfo.title + "<br>"
                document.getElementById("content").innerHTML += "<br>" + text.items[i].volumeInfo.authors + "<br>"
                document.getElementById("content").innerHTML += "<br>" + text.items[i].volumeInfo.description + "<br>"
                document.getElementById("content").innerHTML += "<br>" + text.items[i].volumeInfo.publisher + "<br>" 
                */
                //document.getElementById("thumbnail").src = text.items[i].volumeInfo.imageLinks.thumbnail
                
            }

            console.log("Printing out the list of authors which were pushed here: ")
            for(let i = 0; i < author.length; i++) {
                console.log(author[i])
            }

            if(isAuthor(author)) {
                console.log("Found author!")
            }

            for(var i = 0; i < author.length; i++) {
                document.getElementById("content").innerHTML += "<br>" + counter + ")" + title[i] + "<br>"
                document.getElementById("content").innerHTML += "<br>" + author[i] + "<br>"
                document.getElementById("content").innerHTML += "<br>" + description[i] + "<br>"
                document.getElementById("content").innerHTML += "<br>" + publisher[i] + "<br>" + "<br>" + "<br>"
                counter++
            }


            if(undefinedItems.length > 0) {
                for(var i = 0; i < undefinedItems.length; i++) {
                    document.getElementById("content").innerHTML += "<br>" + counter + ")" + undefinedItems[i].title + "<br>"
                    document.getElementById("content").innerHTML += "<br>" + undefinedItems[i].authors + "<br>"
                    document.getElementById("content").innerHTML += "<br>" + undefinedItems[i].description + "<br>"
                    document.getElementById("content").innerHTML += "<br>" + undefinedItems[i].publisher + "<br>" + "<br>" + "<br>"
                    counter++
                }
            }
            
            

        }
        else {
            document.getElementById("content").innerHTML = "<br>" + request.status + ", Try again"
        }
    }
    //document.getElementById("content").innerHTML += "<br>" + data
}
