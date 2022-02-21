let mockDatabase = [
    {
        _id: '001',
        name: 'MSI AMD Radeon RX 6600 MECH 2X Dual-Fan 8GB GDDR6 PCIe 4.0 Graphics Card',
        image: 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/643582_339291_01_front_thumbnail.jpg',
        category: 'Graphics Cards',
        price: 459.99
    },
    {
        _id: '002',
        name: 'PowerColor AMD Radeon RX 6700 XT Red Devil Triple-Fan 12GB GDDR6 PCIe 4.0 Graphics Card',
        image: 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/635134_247882_01_front_thumbnail.jpg',
        category: 'Graphics Cards',
        price: 879.99
    },
    {
        _id: '003',
        name: 'MSI NVIDIA GeForce GTX 1660 Super Gaming X Overclocked Dual-Fan PCIe 3.0 Graphics Card ',
        image: 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/616169_042028_01_front_thumbnail.jpg',
        category: 'Graphics Cards',
        price: 459.99
    },
    {
        _id: '004',
        name: 'ASUS NVIDIA GeForce RTX 3050 Dual Overclocked Dual Fan 8GB GDDR6 PCIe 4.0 Graphics Card',
        image: 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/646748_373498_01_front_thumbnail.jpg',
        category: 'Graphics Cards',
        price: 439.99
    },
    {
        _id: '005',
        name: 'EVGA 750 BQ 750 Watt 80 Plus Bronze Semi-Modular ATX Power Supply',
        image: 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/467824_118455_01_front_thumbnail.jpg',
        category: 'Power Supplies',
        price: 74.99
    },
    {
        _id: '006',
        name: 'PowerSpec 650 Watt 80 Plus Bronze ATX Semi-Modular Power Supply Active PFC SLI Crossfire Ready Gaming PC Computer Switching PSU',
        image: 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/485312_402404_01_front_thumbnail.jpg',
        category: 'Power Supplies',
        price: 49.99
    },
    {
        _id: '007',
        name: 'Logitech G G502 HERO Gaming Mouse',
        image: 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/511175_816769_01_front_thumbnail.jpg',
        category: 'Peripherals',
        price: 44.99
    },
    {
        _id: '008',
        name: 'Logitech MX Master 3 Advanced Wireless Mouse - Black',
        image: 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/611893_003699_01_front_thumbnail.jpg',
        category: 'Peripherals',
        price: 99.99
    },
    {
        _id: '009',
        name: 'Logitech G PRO X SUPERLIGHT Wireless Gaming Mouse - White',
        image: 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/631585_209452_01_front_thumbnail.jpg',
        category: 'Peripherals',
        price: 144.99
    },
    {
        _id: '010',
        name: 'Redragon K552 60% RGB Gaming Mechanical Keyboard - Black',
        image: 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/641121_316117_01_front_thumbnail.jpg',
        category: 'Peripherals',
        price: 34.99
    }
]

// Main Methods
function generateCard(name, image, price, category){
    let column = document.createElement('div');
    column.className = "col";
    let card = document.createElement('div');
    card.className = "card h-100";
    column.appendChild(card);

    let cardImage = document.createElement('img');
    cardImage.src = image;
    card.appendChild(cardImage);

    let cardBody = document.createElement('div');
    cardBody.className = "card-body";
    card.appendChild(cardBody)

    let cardProductCategory = document.createElement('p');
    cardProductCategory.className = "card-text";
    cardProductCategory.innerHTML = category;
    cardBody.appendChild(cardProductCategory);

    let cardProductName = document.createElement('h5');
    cardProductName.className = "card-text";
    cardProductName.innerHTML = name;
    cardBody.appendChild(cardProductName);

    let cardProductPrice = document.createElement('p');
    cardProductPrice.className = "card-text";
    cardProductPrice.innerHTML = `$${price}`;
    cardBody.appendChild(cardProductPrice);

    return column;
}

let generateProductList = (data) => {
    try{
        if(document.getElementById('productList').innerHTML != null){
            document.getElementById('productList').innerHTML = null;
        }

        let productList = document.createElement('div');
        productList.className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4";
        const area = document.getElementById('productList');
        area.appendChild(productList);
        data.forEach((product) => {
            productList.appendChild(generateCard(product.name, product.image, product.price, product.category));
        });
    } catch (e) {
        console.log(e);
    }
}

let getCategories = (data) => {
    let categoryList = ["All"];
    data.forEach((product) => {
        if(!categoryList.includes(product.category)) {
            categoryList.push(product.category);
        }
    });
    categoryList.sort();

    let categoryForm = document.getElementById('category');
    categoryList.forEach((category) => {
        let option = document.createElement('option');
        option.value = category;
        option.innerHTML = category;
        categoryForm.appendChild(option);
    })
}

// Sorting
let sortPriceLowToHigh = (data) => {
    return data.sort(function(a, b) {
        return parseFloat(a.price) - parseFloat(b.price);
    });
}

let sortPriceHighToLow = (data) => {
    return data.sort(function(a, b) {
        return parseFloat(b.price) - parseFloat(a.price);
    });
}

let sortNameAToZ = (data) => {
    return data.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });
}

let sortBySelected = (data) => {
    switch (document.getElementById('sort').value) {
        case 'price-low-high':
            return sortPriceLowToHigh(data);
        case 'price-high-low':
            return sortPriceHighToLow(data);
        case 'a-z':
            return sortNameAToZ(data);
    }
}

let filterResults = (data) => {
    const priceFilter = [{min: 0, max: 50}, {min: 50, max: 200}, {min: 200, max: Number.MAX_SAFE_INTEGER}];

    let newList = [];

    let priceFilterIndex = document.getElementById('price').value;
    if(priceFilterIndex == -1) {
        newList = data;
    }
    else {
        newList = data.filter((product) => (product.price >= priceFilter[priceFilterIndex].min) && (product.price <= priceFilter[priceFilterIndex].max));
    }

    let categoryFilter = document.getElementById('category').value;
    if(categoryFilter != "All") {
        newList = newList.filter((product) => product.category == categoryFilter);
    }
    return newList;
}

// On Page Load
window.onload = async () => {
    getCategories(mockDatabase);
    generateProductList(sortBySelected(filterResults(mockDatabase)));
    sizeCheck();
};

// Event Listeners
const selectSortElement = document.getElementById('sort');
selectSortElement.addEventListener('change', async (event) => {
    generateProductList(sortBySelected(filterResults(mockDatabase)));
});

const selectCategoryElement = document.getElementById('category');
selectCategoryElement.addEventListener('change', async (event) => {
    generateProductList(sortBySelected(filterResults(mockDatabase)));
});

const selectPriceElement = document.getElementById('price');
selectPriceElement.addEventListener('change', async (event) => {
    generateProductList(sortBySelected(filterResults(mockDatabase)));
});

window.addEventListener('resize', async (event) => {
    sizeCheck();
})

let sizeCheck = () => {
    let windowWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );

    if(windowWidth <= 768) {
        document.getElementById('content').className = "container-fluid d-flex justify-content-around mt-5 flex-column"
    }
    else {
        document.getElementById('content').className = "container-fluid d-flex justify-content-around mt-5"
    }
}