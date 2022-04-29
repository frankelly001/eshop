const footerApi = [
    { _id: 1, title: "LET US HELP YOU", list: ["Help Center", "How to shop on eShop?", "Delivery options and timelines", "How to return a product on eShop?", "Corporate and bulk purchases", "Report a Product", "Ship your package anywhere in Nigeria"] },
    { _id: 2, title: "ABOUT ESHOP", list: ["About us", "eShop careers", "eShop Express", "Terms and Conditions", "Privacy and Cookie Notice", "eShop Prime", "eShop Global"] },
    { _id: 3, title: "MAKE MONEY WITH ESHOP", list: ["Sell on eShop", "Become a Sales Consultant", "Become a eShop Vendor Service Provider", "Become a Logistics Service Partner", "Join the eShop DA Academy", "Join the eShop KOL Program"] },
    { _id: 4, title: "ESHOP INTERNATIONAL", list: ["Algeria", "Egypt", "Ghana", "Ivory Coast", "Kenya", "Morocco", "Senegal", "Tunisia", "Uganda", "South Africa", "Zando"] },
]

export function getFooter() {
    return footerApi
}