const axios = require('axios');
const { get } = require('http');


const getExchangeRate = async (fromCurrency, toCurrency) => {  
    try{
        
        //const response=await axios.get(`http://apilayer.net/api/live?access_key=987fa8fef1b411ab7a30cebc2ebeb761&format=1`);
        const response=await axios.get(`http://apilayer.net/api/live?access_key=987fa8fef1b411ab7a30cebc2ebeb761&currencies=HRK&source=USD&format=1`);
        //const response = await axios.get('http://data.fixer.io/api/latest?access_key=987fa8fef1b411ab7a30cebc2ebeb761&format=1');
        
        //console.log(response); //给出一大堆没用的信息
        //console.log(response.data); //data本身就是一个json obj不需要用JSON.parse
        const responseObj=response.data;
        const quotes = responseObj.quotes;
        const key=fromCurrency+toCurrency;
        console.log(key);
        console.log(quotes[key]);
        
        return quotes[key];
    }catch(error){
        throw new Error(`Unable to get currency ${fromCurrency} and  ${toCurrency}`); 
    }
    
}

//JSON FILE returned by axios.get
// {
//     "success":true,
//     "terms":"https:\/\/currencylayer.com\/terms",
//     "privacy":"https:\/\/currencylayer.com\/privacy",
//     "timestamp":1710457504,
//     "source":"HRK",
//     "quotes":{
//       "USDHRK":6.882375
//     }
// }

// getExchangeRate('USD', 'HRK');
//getExchangeRate(USD, HRK); //小心一点！！！！不用quotaion mark的话会被当做variable而不是string


const getCountries = async(currencyCode)=>{
    try{
        const response= await axios.get(`https://restcountries.com/v3.1/currency/${currencyCode}`);
        // const responseObj=response.data;
        // const countryNames = responseObj.map(country => country.name);
        // console.log(countryNames);
        return response.data.map(country=>country.name.common);
    }catch(error){
        throw new Error(`Unable to get countries that use ${currencyCode}`);
    }
    
}

//JSON FILE returned by axios.get
// [
//     {
//       common: 'United States Minor Outlying Islands',
//       official: 'United States Minor Outlying Islands',
//       nativeName: { eng: [Object] }
//     },
//     {
//       common: 'Turks and Caicos Islands',
//       official: 'Turks and Caicos Islands',
//       nativeName: { eng: [Object] }
//     }
// ]

//getCountries('USD');

const convert=async(fromCurrency, toCurrency, amount)=>{
    const exchangeRate=await getExchangeRate(fromCurrency, toCurrency);
    
    const countries = await getCountries(fromCurrency);
    
    
    const convertedAmount = (amount * exchangeRate).toFixed(5);
    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. 
    You can spend these in the following countries: ${countries}`;
}

convert('USD', 'HRK', 2000) 
.then((message) => { console.log(message);  })
.catch((error) => {console.log(error.message);});

