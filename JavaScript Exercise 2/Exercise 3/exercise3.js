// initialization of variable
const text =
  "The quick brown fox jumps-over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.";

// function finding the words with high frequency
const findTopWords = (text, top) => {
  // remove punctuations and numbers to the text
  const punctuationsless = text.replace(
    /[.,\/#!$%\^&\*;:{}=_`~()123456789]/g,
    ""
  );

  // split the text using space and hyphen
  const arrayText = punctuationsless.split(/[\s-]+/);

  // create array for invalid words
  const invalidText =
    "the a an and or but not to of in for on with at by from up about into over after beneath under above among";
  const arrayInvalidText = invalidText.split(" ");

  //filter the text and store only the words needed
  const filteredText = arrayText.filter((text) => {
    return !arrayInvalidText.includes(text.toLowerCase());
  });

  // get only the distinct values in array
  const uniqueText = [...new Set(filteredText)];

  // store the count of words into object
  const ObjectText = uniqueText.map(item =>{
    let count= 0;
  for(const element of filteredText){
      if(item == element){
          count += 1;
      }
  }
  
  return {word: item, frequency: count};
})

  // sorting the object (descending) to know the highest
  ObjectText.sort((a, b) => (b.frequency - a.frequency));

  // creating new object to store the words with high frequency
  const topFrequency = {};
  for (let i = 0; i < top; i++) {
    topFrequency[ObjectText[i].word] = ObjectText[i].frequency;
  }

  return topFrequency;
};

// output
console.log(findTopWords(text, 3));
