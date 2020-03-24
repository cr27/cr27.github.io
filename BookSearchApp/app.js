$(document).ready(function () { 
    $("#formsubmit").submit(function(){
        $("#searchresults").empty();
        var userSearch = $("#textsubmission").val();
        //to search specific book concatenate google api with userSearch
        $.get("https://www.googleapis.com/books/v1/volumes?q=" + userSearch, function(response){
            console.log(response);
            
            for(var i=0; i<response["items"].length; i++)
            {
                var title = response["items"][i].volumeInfo.title;//loops through the entire array
                var img = response["items"][i].volumeInfo.imageLinks.smallThumbnail;
                var author = response["items"][i].volumeInfo.authors;
                var publishedDate = response["items"][i].volumeInfo.publishedDate;
                var previewlink = response["items"][i].volumeInfo.previewLink;
                $("#searchresults").append("<div id='Booknumber'>" +
                    "<a href=" + previewlink + " target='_blank'><img src=" + img + " /></a>" +
                    "<p> "+ title +" </p>" +
                    "<p> Authors: "+ author + " </p>" +
                    "<p> Published Date: "+ publishedDate+"</p> </div>"
                )
            }
        })
        return false; //stops refreshing page
    });

})

