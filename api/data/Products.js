const products = [
    {
        name: "Tom Ford Black Orchid",
        image: "https://img.fragrancex.com/images/products/sku/large/tomfboes1.webp",
        description: "A luxurious and sensual fragrance with a rich, dark trace of black orchid.",
        price: 120.00,
        gender: "Unisex"
    },
    {
        name: "Tom Ford Tobacco Vanille",
        image: "https://img.fragrancex.com/images/products/parent/medium/72676m.webp",
        description: "A modern take on an old-world men’s club.",
        price: 150.00,
        gender: "Unisex"
    },
    {
        name: "Tom Ford Oud Wood",
        image: "https://img.fragrancex.com/images/products/sku/large/tfow34m.webp",
        description: "A distinctive fragrance with exotic oud wood.",
        price: 170.00,
        gender: "Men"
    },
    {
        name: "Tom Ford Noir de Noir",
        image: "https://img.fragrancex.com/images/products/sku/large/tfndn17.webp",
        description: "A dark, rich scent with notes of saffron, black rose, and truffle.",
        price: 190.00,
        gender: "Women"
    },
    {
        name: "Tom Ford Neroli Portofino",
        image: "https://img.fragrancex.com/images/products/sku/large/nertm1ed.webp",
        description: "A vibrant and fresh fragrance with a blend of citrus and floral notes.",
        price: 160.00,
        gender: "Men"
    },
    { 
        name: "Chloe Eau de Parfum",
        image: "https://img.fragrancex.com/images/products/sku/large/cnw17.webp",
        description: "An irresistibly seductive floral fragrance.",
        price: 100.00,
        gender: "Women"
    },
    {
        name: "Chloe Nomade",
        image: "https://img.fragrancex.com/images/products/sku/large/cn17psw.webp",
        description: "A blend of strength and softness, the facets of this floral chypre blow like the winds of freedom.",
        price: 110.00,
        gender: "Women"
    },
    {
        name: "Chloe Love Story",
        image: "https://img.fragrancex.com/images/products/sku/large/chlovstw.webp",
        description: "A fresh and floral fragrance inspired by romance and love.",
        price: 115.00,
        gender: "Women"
    },
    {
        name: "Chloe Roses de Chloe",
        image: "https://img.fragrancex.com/images/products/parent/medium/71013w.webp",
        description: "A delicate and fresh rose scent.",
        price: 105.00,
        gender: "Women"
    },
    {
        name: "Chloe Fleur de Parfum",
        image: "https://img.fragrancex.com/images/products/parent/medium/73950w.webp",
        description: "A sophisticated fragrance with notes of rose and verbena flower.",
        price: 120.00,
        gender: "Women"
    },
    {
        name: "Prada Candy",
        image: "https://img.fragrancex.com/images/products/sku/large/pradcand.webp",
        description: "A sweet, modern caramel fragrance.",
        price: 110.00,
        gender: "Women"
    },
    {
        name: "Prada Luna Rossa",
        image: "https://img.fragrancex.com/images/products/sku/large/praluros.webp",
        description: "A fragrance that evokes the spirit of the high seas and the competitive world of extreme sailing.",
        price: 120.00,
        gender: "Men"
    },
    {
        name: "Prada L'Homme",
        image: "https://img.fragrancex.com/images/products/sku/large/lhoprad34.webp",
        description: "A sophisticated and contemporary fragrance for men.",
        price: 130.00,
        gender: "Men"
    },
    {
        name: "Prada La Femme",
        image: "https://img.fragrancex.com/images/products/parent/medium/73824w.webp",
        description: "A floral fragrance that blends tradition and innovation.",
        price: 135.00,
        gender: "Women"
    },
    {
        name: "Prada Infusion d'Iris",
        image: "https://img.fragrancex.com/images/products/parent/medium/64300w.webp",
        description: "A fresh and elegant fragrance with notes of iris and citrus.",
        price: 125.00,
        gender: "Women"
    },
    {
        name: "CHANEL Bleu de Chanel",
        image: "https://img.fragrancex.com/images/products/parent/medium/67530m.webp",
        description: "A woody aromatic fragrance for the man who defies convention.",
        price: 130.00,
        gender: "Men"
    },
    { 
        name: "CHANEL No. 5",
        image: "https://img.fragrancex.com/images/products/parent/medium/61w.webp",
        description: "The classic fragrance, timeless and elegant.",
        price: 140.00,
        gender: "Women"
    },
    {
        name: "Chance by CHANEL",
        image: "https://img.fragrancex.com/images/products/parent/medium/1475w.webp",
        description: "A youthful and vibrant fragrance with a touch of fantasy.",
        price: 120.00,
        gender: "Women"
    },
    {
        name: "CHANEL Coco Mademoiselle",
        image: "https://img.fragrancex.com/images/products/parent/medium/116w.webp",
        description: "A modern and fresh ambery fragrance.",
        price: 135.00,
        gender: "Women"
    },
    { 
        name: "Gabrielle by Chanel",
        image: "https://img.fragrancex.com/images/products/parent/medium/74799w.webp",
        description: "A radiant and sparkling floral fragrance.",
        price: 130.00,
        gender: "Women"
    }, 
    { 
        name: "Roberto Cavalli Uomo",
        image: "https://img.fragrancex.com/images/products/parent/medium/73738m.webp",
        description: "A fragrance for the men who wants to be noticed.",
        price: 105.00,
        gender: "Men"
    },
    {
        name: "Roberto Cavalli Just Cavalli",
        image: "https://img.fragrancex.com/images/products/parent/medium/70337w.webp",
        description: "A provocative and seductive fragrance.",
        price: 95.00,
        gender: "Women"
    },
    {
        name: "Roberto Cavalli Paradiso",
        image: "https://img.fragrancex.com/images/products/parent/medium/71918w.webp",
        description: "A luminous and sensual fragrance inspired by the Mediterranean.",
        price: 115.00,
        gender: "Women"
    },
    {
        name: "Roberto Cavalli I Love Her",
        image: "https://img.fragrancex.com/images/products/parent/medium/67594w.webp",
        description: "An exotic and enchanting fragrance.",
        price: 100.00,
        gender: "Women"
    },
    {
        name: "Roberto Cavalli Nero Assoluto",
        image: "https://img.fragrancex.com/images/products/parent/medium/70553w.webp",
        description: "A rich and intense fragrance for the bold and daring.",
        price: 110.00,
        gender: "Women"
    },
    { 
        name: "Jo Malone London English Pear & Freesia",
        image: "https://img.fragrancex.com/images/products/sku/large/jomjwt.webp",
        description: "A fresh, fruity fragrance.",
        price: 140.00,
        gender: "Women"
    },
    {
        name: "Jo Malone London Wood Sage & Sea Salt",
        image: "https://img.fragrancex.com/images/products/sku/large/jmwss34u.webp",
        description: "A fragrance that captures the essence of sea air and rugged cliffs.",
        price: 145.00,
        gender: "Women"
    },
    {
        name: "Jo Malone London Peony & Blush Suede",
        image: "https://img.fragrancex.com/images/products/parent/medium/73901m.webp",
        description: "A luxurious and seductive floral fragrance.",
        price: 150.00,
        gender: "Women"
    },
    {
        name: "Jo Malone London Lime Basil & Mandarin",
        image: "https://img.fragrancex.com/images/products/parent/medium/70949m.webp",
        description: "A modern classic with a fresh twist.",
        price: 135.00,
        gender: "Women"
    },
    {
        name: "Jo Malone London Red Roses",
        image: "https://img.fragrancex.com/images/products/sku/large/jmrr34u.webp",
        description: "A romantic and fresh floral fragrance.",
        price: 130.00,
        gender: "Women"
    },
    { 
        name: "MontBlanc Legend",
        image: "https://img.fragrancex.com/images/products/sku/large/mlemts33t.webp",
        description: "A fresh, masculine fragrance.",
        price: 90.00,
        gender: "Men"
    },
    {
        name: "MontBlanc Explorer",
        image: "https://img.fragrancex.com/images/products/sku/large/monmm34ed.webp",
        description: "A fragrance that invites to a fantastic journey.",
        price: 95.00,
        gender: "Men"
    },
    {
        name: "Montblanc Legend Night Cologne",
        image: "https://img.fragrancex.com/images/products/sku/large/mbln33m.webp",
        description: "A unique and sophisticated fragrance for the modern man.",
        price: 85.00,
        gender: "Men"
    },
    {
        name: "MontBlanc Presence",
        image: "https://img.fragrancex.com/images/products/sku/large/presltsw.webp",
        description: "A warm and charismatic fragrance.",
        price: 100.00,
        gender: "Women"
    },
    {
        name: "MontBlanc Emblem",
        image: "https://img.fragrancex.com/images/products/parent/medium/71157m.webp",
        description: "A timeless and elegant fragrance.",
        price: 110.00,
        gender: "Men"
    },
    {
        name: "Creed Aventus",
        image: "https://img.fragrancex.com/images/products/sku/large/ave34mc.webp",
        description: "A fragrance inspired by the dramatic life of a historic emperor.",
        price: 300.00,
        gender: "Men"
    },
    { 
        name: "Creed Silver Mountain Water",
        image: "https://img.fragrancex.com/images/products/sku/large/silcma.webp",
        description: "A fragrance that evokes sparkling streams coursing through the snowcapped Swiss Alps.",
        price: 290.00,
        gender: "Men"
    },
    {
        name: "Creed Green Irish Tweed",
        image: "https://img.fragrancex.com/images/products/sku/large/grecm33ed.webp",
        description: "A fresh and timeless fragrance.",
        price: 280.00,
        gender: "Unisex"
    },
    {
        name: "Creed Millesime Imperial",
        image: "https://img.fragrancex.com/images/products/sku/large/mim34m.webp",
        description: "A luxurious and elegant fragrance with a citrus twist.",
        price: 320.00,
        gender: "Women"
    },
    {
        name: "Creed Virgin Island Water",
        image: "https://img.fragrancex.com/images/products/parent/medium/61621m.webp",
        description: "A fresh and tropical fragrance inspired by the Caribbean.",
        price: 310.00,
        gender: "Unisex"
    }
];

module.exports = products;
