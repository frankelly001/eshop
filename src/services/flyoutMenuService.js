const flyoutMenu = [
    {
        _id: "1",
        title: "Phones & Tablets",
        menu: [
            { _id: "1-1", categoryTitle: "MOBILE PHONES", categoryItems: ["SmartPhones", "Basic Phones", "Refurbished Phones"] }, 
            { _id: "1-2", categoryTitle: "TABLETS", categoryItems: ["iPads", "Andriod Tablets", "Educational Tablets", "Tablet Accessories"] },
            { _id: "1-3", categoryTitle: "MOBILE ACCESSORIES", categoryItems: ["Accessory Kits","Adapters","Batteries","Battery Chargers","Bluetooth Headsets","Cables","Car Accessories","Chargers","Earphones & Headsets","MicroSD Cards","Screen Protectors","Selfie Sticks & Tripods","Smart Watches"] },
            { _id: "1-4", categoryTitle: "TOP SMARTPHONES", categoryItems: ["iphone 13 pro max","iphone 13 pro","iphone 12 pro max","iphone 12 pro","iPhone 11 Pro Max","Samsung Galaxy S10","iPhone 11","Nokia 7.2","Huawei Y9 S","iPhone XS Max","Infinix S5","Vivo Y6","Oppo A8"] },
            { _id: "1-5", categoryTitle: "MOBILE PHONES", categoryItems: ["Samsung","Apple","Huawei","Nokia","Xiaomi","Tecno","Hawuei","Vivo","Oppo"] },

        ],
        fontAwesome_icon: "fa-solid fa-mobile"
    },

    {
        _id: "2",
        title: "Computing",
        menu: [
            { _id: "2-1", categoryTitle: "COMPUTERS", categoryItems: ["Desktops", "Laptops"] },
            { _id: "2-2", categoryTitle: "DATA STORAGE", categoryItems: ["External Hard Drives", "USB Flash Drives", "External Solid State"] },
            { _id: "2-3", categoryTitle: "ANTIVIRUS & SECURITY",  categoryItems: ["Antivirus",  "Internet Security"] },
            { _id: "2-4", categoryTitle: "PRINTERS",  categoryItems: ["Inkjet Printers", "Laser Printers", "Printer Ink & Toner"] },
            { _id: "2-5", categoryTitle: "COMPUTER ACCESSORIES",  categoryItems: ["Keyboards & Mice", "Uninterrupted Power Supply", "Memory Cards", "Batteries", "Scanners", "Video Projectors"] },
            { _id: "2-6", categoryTitle: "TOP BRANDS", categoryItems: ["HP","Logitech", "Dell", "Lenovo", "Apple", "ASUS", "Huawei", "Microsoft", "Kingston", "Seagate", "Samsung", "Sandisk", "Toshiba", ] },
        ],
        fontAwesome_icon: "fa-solid fa-computer"
    },

    {
        _id: "3",
        title: "Electronics",
        menu: [
            { _id: "3-1", categoryTitle: "TELEVISION & VIDEO", categoryItems: ["Televisions", "Smart TVs", "LED & LCD TVs", "QLED & OLED TVs", "DVD Players & Recorders"] },
            { _id: "3-2", categoryTitle: "HOME AUDIO", categoryItems: ["Home Theatre Systems", "Receivers & Amplifiers", "Sound Bars"] },
            { _id: "3-3", categoryTitle: "CAMERAS & PHOTOS", categoryItems: ["Digital", "Cameras", "Projectors", "Video Surveillance", "Camcorders"] },
            { _id: "3-4", categoryTitle: "GENERATORS & PORTABLE POWER", categoryItems: ["Generators", "Power Inverters", "Solar & Wind Power", "Stablizers"] },
            { _id: "3-5", categoryTitle: "TOP ELECTRONICS BRANDS", categoryItems: ["LG", "Samsung", "Sony", "TCL", "Hisense", "Canon", "DStv"] }
        ],
        fontAwesome_icon: "fa-solid fa-lightbulb"
    },

    {
        _id: "4",
        title: "Fashion",
        menu: [
            { _id: "4-1", categoryTitle: "WOMEN'S FASHION", categoryItems: ["Clothing", "Shoes", "Accessories", "Jewelry", "Handbags & Wallets", "Underwear & Sleepwear", "Maternity", "Dresses", "Traditional", "Beach & Swimwear", "Flats"] },
            { _id: "4-2", categoryTitle: "KID'S FASHION", categoryItems: ["Boy's Fashion", "Girl's Fashion"] },
            { _id: "4-3", categoryTitle: "MEN'S FASHION", categoryItems: ["Clothing", "Shoes", "Accessories", "Underwear & Sleepwear", "Traditional & Cultural Wear", "T-Shirts", "Polo Shirts", "Trousers & Chinos", "Sneakers", "Jewelry", "Jerseys"] },
            { _id: "4-4", categoryTitle: "ALL FASHION", categoryItems: [] },
            { _id: "4-5", categoryTitle: "WATCHES", categoryItems: ["Men's Watches", "Women's Watches"] },
            { _id: "4-6", categoryTitle: "SUNGLASSES", categoryItems: ["Men's Sunglasses", "Women's Sunglasses"] },
            { _id: "4-7", categoryTitle: "TOP BRANDS", categoryItems: ["Adidas", "Zara", "Nike", "Casio", "Puma", "Defacto", "Citizen"] }
        ],
        fontAwesome_icon: "fa-solid fa-shirt" 
    },

    {
        _id: "5",
        title: "Automobiles",
        menu: [
            { _id: "5-1", categoryTitle: "CAR CARE", categoryItems: ["Cleaning Kits", "Exterior Care", "Interior Care"] },
            { _id: "5-2", categoryTitle: "CAR ELECTRONICS & ACCESSORIES", categoryItems: ["Car Electronics", "Car Accessories", "Power & Battery"] },
            { _id: "5-3", categoryTitle: "CAR CARE", categoryItems: ["Bulbs", "Accent & Off Road Lighting"] },
            { _id: "5-4", categoryTitle: "EXTERIOR ACCESSORIES", categoryItems: ["Covers", "Mirrors", "Bumper Stickers, Decals & Magnets"] },
            { _id: "5-5", categoryTitle: "OILS & FLUIDS", categoryItems: ["Brake Fluids", "Greases & Lubricants", "Oils"] },
            { _id: "5-6", categoryTitle: "INTERIOR ACCESSORIES", categoryItems: ["Air Freshners", "Consoles & Organizers", "Key Chains", "Floor Mats & Cargo Liners", "Sun Protection", "Seat Covers & Accessories"] },
            { _id: "5-7", categoryTitle: "TYRE & RIMS", categoryItems: ["Tyre", "Inflator & Guages"] }
        ],
        fontAwesome_icon: "fa-solid fa-car" 
    },

    {
        _id: "6",
        title: "Home & office",
        menu: [
            { _id: "6-1", categoryTitle: "HOME & KITCHEN", categoryItems: ["Bath", "Bedding", "Home Decor", "Home Furniture", "Vacuums & Floor Care", "Wall Art", "Cookware", "Bakeware", "Small Appliances", "Cutlery & Knife Accessories"] },
            { _id: "6-2", categoryTitle: "HOME & OFFICE FURNITURE", categoryItems: ["Kitchen & Dining", "Lighting", "Stationery", " Storage & Organization"] },
            { _id: "6-3", categoryTitle: "OFFICE PRODUCTS", categoryItems: ["Office & School Supplies", "Office Furniture & Lighting", "Packaging Materials"] },
            { _id: "6-4", categoryTitle: "SMALL APPLIANCES", categoryItems: ["Ironing & Laundry", "Kettles", "Mixing & Blending", "Microwave Ovens", "Vacuum Cleaners", "Kitchen Bundles"] },
            { _id: "6-5", categoryTitle: "LARGE APPLIANCES", categoryItems: ["Air Conditioners", "Cookers", "Washers & Dryers", "Fans", "Freezers", "Refrigerators", "Dishwashers"] }
        ],
        fontAwesome_icon: "fa-solid fa-home"
    },

    {
        _id: "7",
        title: "Supermarket",
        menu: [
            { _id: "7-1", categoryTitle: "CAR CARE", categoryItems: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods", "Herbs, Spices & Seasoning", "Flours & Meals", "Malt Drinks", "Coffee", "Water", "Cooking Oil", "Juices", "Soft Drinks", "Canned & Packaged Foods", "Candy & Chocolate", "Syrups, Sugars & Sweeteners"] },
            { _id: "7-2", categoryTitle: "BABY PRODUCTS", categoryItems: [] },
            { _id: "7-3", categoryTitle: "HOUSEHOLD CLEANING", categoryItems: ["Laundry", "Air Fresheners", "Toilet Paper & Wipes", "Bathroom Cleaners", "Dishwashing", "Disinfectant Wipes"] },
            { _id: "7-4", categoryTitle: "BEER, WINE & SPIRITS", categoryItems: ["Beers", "Vodka", "Red Wine", "Champagne & Sparkling Wine", "White Wine", "Whiskey", "Liquors"] }
        ],
        fontAwesome_icon: "fa-solid fa-apple-whole"
    },

    {
        _id: "8",
        title: "Baby Products",
        menu: [
            { _id: "8-1", categoryTitle: "APPAREL & ACCESSORIES", categoryItems: ["Baby Boys", "Baby Girls"] },
            { _id: "8-2", categoryTitle: "DIAPERING", categoryItems: ["Disposable Diapers", "Diaper Bags", "Wipes & Holders"] },
            { _id: "8-3", categoryTitle: "BABY & TODDLER TOYS", categoryItems: ["Activity Play Centers", "Music & Sound", "Bath Toys"] },
            { _id: "8-4", categoryTitle: "BATHING & SKIN CARE", categoryItems: ["Washcloths & Towels", "Grooming & Healthcare Kits", "Skin Care", "Bathing Tubs & Seats", "Bathroom Safety"] },
            { _id: "8-5", categoryTitle: "FEEDING", categoryItems: ["Bibs & Burp Cloths", "Breastfeeding", "Bottle-Feeding", "Pacifiers & Accessories", "Food Storage", "Highchairs & Booster Seats", "Solid Feeding"] },
            { _id: "8-6", categoryTitle: "GEAR", categoryItems: ["Backpacks & Carriers", "Swings, Jumpers & Bouncers", "Walkers"] }
        ],
        fontAwesome_icon: "fa-solid fa-baby"
    },

    {
        _id: "9",
        title: "Health & Beauty",
        menu: [
            { _id: "9-1", categoryTitle: "MAKE UP", categoryItems: ["Concealers & Color Correctors", "Foundation", "Powder", "Lip Gloss", "Lip Liner", "Lipstick", "Eyeliner & Kajal", "Eyeshadow", "Mascara"] },
            { _id: "9-2", categoryTitle: "FRAGRANCES", categoryItems: ["Women's", "Men's"] },
            { _id: "9-3", categoryTitle: "HAIR CARE", categoryItems: ["Hair & Scalp Care", "Hair Accessories", "Hair Cutting Tools", "Shampoo & Conditioner", "Wigs & Accessories"] },
            { _id: "9-4", categoryTitle: "PERSONAL CARE", categoryItems: ["Feminine Care", "Contraceptives & Lubricants", "Body"] },
            { _id: "9-5", categoryTitle: "ORAL CARE", categoryItems: ["Dental Care kits", "Dental Floss & Picks", "Teeth Whitening", "Toothbrushes"] },
            { _id: "9-6", categoryTitle: "HEALTH CARE", categoryItems: ["Face Protection", "Thermometers", "Hand Sanitizers", "Lab, Safety & Work Gloves"] }
        ],
        fontAwesome_icon: "fa-solid fa-notes-medical"
    },

    {
        _id: "10",
        title: "Sporting goods",
        menu: [
            { _id: "10-1", categoryTitle: "CARDIO TRAINING", categoryItems: ["Exercise Bikes", "Treadmills", "Elliptical Trainers"] },
            { _id: "10-2", categoryTitle: "STRENGTH TRAINING EQUIPMENT", categoryItems: ["Core & Abdominal Trainers", "Dumbbells", "Bars"] },
            { _id: "10-3", categoryTitle: "ACCESSORIES", categoryItems: ["Exercise Bands", "Exercise Mats", "Jump Ropes", "Sports Clothing"] },
            { _id: "10-4", categoryTitle: "TEAM SPORTS", categoryItems: ["Basketball", "Team Sport Accessories", "Tennis & Racquet Sports", "Swimming"] },
            { _id: "10-5", categoryTitle: "OUTDOOR & ADVENTURE", categoryItems: ["Cycling", "Running"] }
        ],
        fontAwesome_icon: "fa-solid fa-baseball-bat-ball"
    },

    {
        _id: "11",
        title: "Other Cateories",
        menu: [
            { _id: "11-1", categoryTitle: "TOYS & GAMES", categoryItems: ["Games", "Dress Up & Pretend Play", "Sports & Outdoor Play", "Top Toys & Games"] },
            { _id: "11-2", categoryTitle: "MISCELLANEOUS", categoryItems: [] },
            { _id: "11-3", categoryTitle: "BOOKS, MOVIES AND MUSIC", categoryItems: [] },
            { _id: "11-4", categoryTitle: "MUSICAL INSTRUMENTS", categoryItems: [] },
            { _id: "11-5", categoryTitle: "PET SUPPLIES", categoryItems: [] },
            { _id: "11-6", categoryTitle: "ESHOP GLOBAL", categoryItems: [] },
            { _id: "11-7", categoryTitle: "OFFICIAL STORES", categoryItems: ["Michelin", "Nestle", "Xiaomi", "Huawei", "L'Oreal", "MAC", "Apple", "Intel", "Reckitt Benckiser", "Binatone", "Nexus"] },
            { _id: "11-8", categoryTitle: "GROCERY", categoryItems: ["Food Cupboards", "Baby Products", "Plastic & Paper Products", "Drinks", "Hygiene", "Household Cleaning", "Beer, Wine & Spirits"] },
            { _id: "11-9", categoryTitle: "GARDEN & OUTDOORS", categoryItems: [] },
            { _id: "11-10", categoryTitle: "INDUSTRIAL & SCIENTIFIC", categoryItems: [] },
            { _id: "11-11", categoryTitle: "SERVICES", categoryItems: [] },
            { _id: "11-12", categoryTitle: "LIVESTOCK", categoryItems: [] },
        ],
        fontAwesome_icon: "fa-solid fa-ellipsis"
    },
]

export function getFlyoutMenu () {
    return flyoutMenu
}