function averageOfEvens(numbers) {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    if (evenNumbers.length === 0);
    const sumOfEvens = evenNumbers.reduce((sum, num) => sum + num, 0);
    return sumOfEvens / evenNumbers.length;
    console.log(averageOfEvens(numbers));
}
function longestWord(words) {
    return words.reduce((longest, currentWord) => {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
  }console.log(longestWord(words)); 
  function averagePages(books) {
    
    const totalPages = books
      .map(book => book.pages) 
      .reduce((sum, pages) => sum + pages, 0); 
  
    // Return average 
    return totalPages / books.length;}

  console.log(averagePages(books));

  function stringFrequency(arr) {
    const words = ["hello", "world", "hello"];
    return arr.reduce((freq, str) => {
      freq[str] = (freq[str] || 0) + 1;
      return freq;
    }, {});
  }  
  console.log(stringFrequency(words));

  function countByCity(people) {
    const people = [
        { name: "Alice", age: 30, city: "New York" },
        { name: "Bob", age: 40, city: "Chicago" },
        { name: "Charlie", age: 50, city: "New York" }
      ];
      
    return people.reduce((cityCount, person) => {
      cityCount[person.city] = (cityCount[person.city] || 0) + 1;
      return cityCount;
    }, {});} 
      
  console.log(countByCity(people));
    