var htmlString = "<h1>hello world</h1><div><p>next section</p><div>";

function closeDivTag(string){
    //Technique 2 
    var search = string.matchAll(/<div>/g);
    var searchArr = [];
    var newString = "";
    for(item of search){
        searchArr.push(item);
    }
    console.log(searchArr);

    let lastIndex = 0;
    for(let i = 1; i <= searchArr.length; i++){
        if(i % 2 == 0){
            newString += string.substring(lastIndex, searchArr[i-1].index) + "</div>";
            lastIndex = searchArr[i-1].index + 5;
        }
    }
    
    return newString;
}

var result = closeDivTag(htmlString);
console.log(result);

//Technique 1: drowback -> replace only one div from string.
    // var subString1 = string.substring(0, string.length/2);
    // var subString2 = string.substring(string.length/2);

    // var replace = subString2.replace(/<div>/g, '</div>');

    // var result = subString1 + replace;