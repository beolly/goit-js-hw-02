function getShippingCost(country){
    let cost;
    switch(country) {
        case "China":
            cost=100;
        return `Shipping to ${country} will ${cost} credits`; 
        break;
        case "Chile":
            cost=250;
        return `Shipping to ${country} will ${cost} credits`; 
        break;  
        case "Australia":
            cost=170;
        return `Shipping to ${country} will ${cost} credits`; 
        break;
        case "Jamaica":
            cost=120;
        return `Shipping to ${country} will ${cost} credits`; 
        break;
        default:
        return "Sorry, there is no delivery to your country";
}
    }
    console.log(getShippingCost("Australia")); 
    console.log(getShippingCost("Germany"));
    console.log(getShippingCost("China")); 
    console.log(getShippingCost("Chile")); 
    console.log(getShippingCost("Jamaica")); 
    console.log(getShippingCost("Sweden")); 