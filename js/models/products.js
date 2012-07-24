/*-------------- PRODUCTS ARRAY ---------------------*/
var productsArray = [
    {
        id: '0000021',
        name: 'product number one',
        link: 'http://www.shop.com/product1',
        variants: [
            {
                filename: 'image1_p1.png',
                description: 'Lorem ipsum - description for product no 1, image no 1',
                size: 3
            },
            {
                filename: 'image2_p1.png',
                description: 'Lorem ipsum - description for product no 1, image no 2',
                size: 2
            },
            {
                filename: 'image3_p1.png',
                description: 'Lorem ipsum - description for product no 1, image no 3',
                size: 1
            }
        ]
    },
    {
        id: '0000022',
        name: 'product number two',
        link: 'http://www.shop.com/product2',
        variants: [
            {
                filename: 'image1_p2.png',
                description: 'Lorem ipsum - description for product no 2, image no 1',
                size: 2
            },
            {
                filename: 'image2_p2.png',
                description: 'Lorem ipsum - description for product no 2, image no 2',
                size: 3
            },
            {
                filename: 'image3_p2.png',
                description: 'Lorem ipsum - description for product no 2, image no 3',
                size: 1
            },
            {
                filename: 'image4_p2.png',
                description: 'Lorem ipsum - description for product no 2, image no 4',
                size: 2
            }
        ]
    },
    {
        id: '0000023',
        name: 'product number three',
        link: 'http://www.shop.com/product3',
        variants: [
            {
                filename: 'image1_p3.png',
                description: 'Lorem ipsum - description for product no 3, image no 1',
                size: 2
            },
            {
                filename: 'image2_p3.png',
                description: 'Lorem ipsum - description for product no 3, image no 2',
                size: 3
            },
            {
                filename: 'image3_p3.png',
                description: 'Lorem ipsum - description for product no 3, image no 3',
                size: 1
            }
        ]
    }
];

/* ---  PRODUCT MODEL CLASS  --- */
WIZARD.Product = Backbone.Model.extend({});

/* ---  PRODUCT COLLECTION CLASS  --- */
WIZARD.ProductList = Backbone.Collection.extend({
    model: WIZARD.Product
});

/*------------- PRODUCT COLLECTION -------------*/
WIZARD.productlist = new WIZARD.ProductList();

/*------------ POPULATING PRODUCT COLLECTION ------------*/
WIZARD.productlist.reset(productsArray);

