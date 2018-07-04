const url = "https://s3.amazonaws.com/misc-file-snack/MOCK_SNACKER_DATA.json"

fetch(url)
.then(function(data) {
  console.log(data)
})
.catch(function(error) {
  console.log(error)
});
