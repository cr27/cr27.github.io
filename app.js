//LISTEN FOR FORM SUBMIT

document.getElementById('myForm').addEventListener('submit', saveBookark);


//SAVE BOOKMARK
function saveBookark(e) {
    //get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    if (!siteName || !siteUrl) {
        alert("please fill in the form")
        return false
    }

    var bookmark = {
        name: siteName,
        url: siteUrl
    }

    //save to local storage
    //localStorage.setItem("test",  "hello world")

    //test if bookmark is null
    if (localStorage.getItem("bookmarks") === null) {
        //init array 
        var bookmarks = []
        //add to array
        bookmarks.push(bookmark)
        //set to LS
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks))

    } else {
        // get bookmarks from bookmarks
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        console.log(bookmarks)
        //add bookmark to array
        bookmarks.push(bookmark)
        //reset back to localstorage
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
    }

    e.preventDefault();
    fetchBookmarks();
}

//DELETE BOOKMARK
function deleteBookmark(url) {
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Loop through the bookmarks
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url == url) {
            // Remove from array
            bookmarks.splice(i, 1);
        }
    }

    // Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // Re-fetch bookmarks
    fetchBookmarks();
}



function fetchBookmarks() {
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Get output id
    var bookmarksResults = document.getElementById('bookmarksResults');

    // Build output
    bookmarksResults.innerHTML = '';
    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML += '<div class="well">' +
            '<h3>' + name +
            ' <a class="btn btn-default" target="_blank" href="' + url + '">Visit</a> ' +
            ' <a onclick="deleteBookmark(\'' + url + '\')" class="btn btn-danger" href="#">Delete</a> ' +
            '</h3>' +
            '</div>';
    }
}


//fetch bookmarks;



