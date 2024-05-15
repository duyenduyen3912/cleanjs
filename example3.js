// Sử dụng async/await để tránh callback hell và làm code dễ đọc

getData(function(a) {
  parseData(a, function(b) {
    processData(b, function(c) {
      displayData(c, function(d) {
        console.log('Done');
      });
    });
  });
});
