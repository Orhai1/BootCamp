//ex1
function fetchBookISBN(isbn) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
    success: function (data) {
      console.log(data); 
    },
    error: function (xhr, text, error) {
      console.log(text);
    }
  });
}
fetchBookISBN("9780575087057"); 

//ex2
function fetchBookISBNOrTitle(queryType, queryValue) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${encodeURIComponent(queryValue)}`;

  $.ajax({
    method: "GET",
    url: url,
    success: function (data) {
      if (data.totalItems > 0) {
        const book = data.items[0].volumeInfo;
        console.log("Title:", book.title);
        console.log("Author(s):", book.authors?.join(", "));
      } else {
        console.log("No book found for given search.");
      }
    },
    error: function (xhr, text, error) {
      console.log("Request failed:", text);
    }
  });
}

fetchBookISBNOrTitle("isbn", "9789814561778"); // From Third World to First: The Singapore Story
fetchBookISBNOrTitle("title", "How to Win Friends and Influence People"); // book by Dale Carnegie

//ex3 
function fetchBookAllItems(queryType, queryValue) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${encodeURIComponent(queryValue)}`;

  $.ajax({
    method: "GET",
    url: url,
    success: function (data) {
      if (data.totalItems > 0) {
        data.items.forEach((item) => {
          const info = item.volumeInfo;
          const title = info.title || "No Title";
          const authors = info.authors ? info.authors.join(", ") : "Unknown author";

          console.log(`Title: ${title}`);
          console.log(`Authors: ${authors}`);
        });
      } else {
        console.log("No books found.");
      }
    },
    error: function (xhr, text, error) {
      console.log( text);
    }
  });
}
fetchBookAllItems("isbn", "9789814561778"); // From Third World to First: The Singapore Story


//ex4
const apiKey = "gQNIqMnyLegTnCbDcI1OxEl5WOaEwYwl" ; 
const searchTerm = "cat"; 
const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=1`;

$.ajax({
  method: "GET",
  url: url,
  success: function (data) {
    const embedUrl = data.data[0].embed_url;

    const iframe = document.createElement("iframe");
    iframe.src = embedUrl;
    iframe.width = "480";
    iframe.height = "360";
    iframe.frameBorder = "0";

    document.getElementById("gif-container").appendChild(iframe);
  },
  error: function (xhr, text, error) {
    console.error("Error fetching GIF:", text);
  }
});


//ex5
$("#searchBtn").on("click", function () {
  const searchTerm = $("#searchInput").val();
  const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=1`;

  $.ajax({
    method: "GET",
    url: url,
    success: function (data) {
      const embedUrl = data.data[0].embed_url;
      $("#gif-container").empty();
      const iframe = $("<iframe>", {
        src: embedUrl,
        width: 480,
        height: 360,
        frameborder: 0
      });

      $("#gif-container").append(iframe);
    },
    error: function () {
      $("#gif-container").html("An error occurred while fetching the GIF.");
    }
  });
});

