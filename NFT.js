/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTContainer = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name , color , taste , shape , popularity) {
    let NFT = {
        name: name,
        color: color,
        taste: taste,
        shape: shape,
        popularity: popularity
    }
    NFTContainer.push(NFT);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFTContainer.length; i++) {
        console.log("\n\n VEGETABLES \n\n" );
        console.log("Name: " + NFTContainer[i].name);
        console.log("Color: " + NFTContainer[i].color);
        console.log("Taste: " + NFTContainer[i].taste);
        console.log("Shape: " + NFTContainer[i].shape);
        console.log("Popularity: " + NFTContainer[i].popularity);
        console.log("\n\n_* * * * *_\n" );
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs  Minted so Far " + NFTContainer.length);

}

// call your functions below this line
mintNFT("Tomato", "Red", "Sour", "Round", "Popular");
mintNFT("Onion", "Purple", "Potent", "Round", "Popular");
mintNFT("Corn", "Yellow", "Sweet", "Diamond", "Popular");
mintNFT("Radish", "White", "Spicy", "Conical", "Popular");
listNFTs();
getTotalSupply();