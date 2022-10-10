
//https://www.googleapis.com/books/v1/volumes?q=anna+karenina&callback=handleResponse

//choose between books and magazines by changing params in the query.

//what could a query include? 
//it can include author name
//isbn number if you nerding out
//title
//description

function isAuthor() {

}

function apiCall() {
    var query = document.getElementById("searchQuery").value
    if(query == '') {
        query = 'War And Peace'
    }
    console.log(query)
    document.getElementById("content").innerHTML = '';
    //document.getElementById("content").innerHTML += "<br>" + query
    //var apiQuery = "https://www.googleapis.com/books/v1/volumes?callback=handleResponse&q=" + query
    var apiQuery = "https://www.googleapis.com/books/v1/volumes?maxResults=10&q=" + query
    //https://www.googleapis.com/books/v1/volumes?q=""+inauthor:leo tolstoy
    //var apiQuery = "https://www.googleapis.com/books/v1/volumes?q=''+inauthor:" + query
    document.getElementById("content").innerHTML += "<br>" + apiQuery

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
            document.getElementById("content").innerHTML += "<br>Number of results: " + Object.keys(text.items).length
            for(var i = 0; i < Object.keys(text.items).length; i++) {
                document.getElementById("content").innerHTML += "<br>" + (i+1) + ")" + text.items[i].volumeInfo.title + "<br>"
                document.getElementById("content").innerHTML += "<br>" + text.items[i].volumeInfo.authors + "<br>"
                document.getElementById("content").innerHTML += "<br>" + text.items[i].volumeInfo.description + "<br>" + "<br>" + "<br>"
            }
        }
        else {
            document.getElementById("content").innerHTML = "<br>" + request.status + ", Try again"
        }
    }
    //document.getElementById("content").innerHTML += "<br>" + data
}
