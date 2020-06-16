var initialState = [
    {
        id: 1
        , name: 'Cây đá phong thủy'
        , price: '15000'
        , image: 'https://www.vietgemstones.com/image/cache/catalog/san-pham/Cay-phong-thuy/cay-phong-thuy-thach-anh-vang-1-400x400.JPG'
        , rating: 4
        , status: true
        , quantity: 1
        , total: '2500'
    }



    
    , {
        id: 2
        , name: 'đá phong thủy hồng'
        , price: '25000'
        , image: 'https://www.quatangphongthuy.vn/upload/UploadFiles/images/qua%20cau%20nui%20lua%20do%20phong%20thuy(1).jpg'
        , rating: 2
        , status: false
        , quantity: 1
        , total: '2500'
    }


    
    , {
        id: 3
        , name: 'Vòng tay phong thủy'
        , price: '5000'
        , image: 'https://phongthuyxanh.vn/wp-content/uploads/THACH-ANH-TOC-DEN-1.jpg'
        , rating: 3
        , status: true
        , quantity: 1
        , total: '2500'
    }


    
    , {
        id: 4
        , name: 'đá phong thủy'
        , price: '15000'
        , image: 'http://trangsucankara.com/wp-content/uploads/2019/04/Ankara-cau-phong-thuy-da-serpentine-450x450.jpg'
        , rating: 4
        , status: true
        , quantity: 1
        , total: '2500'
    }
];

const Cart = ( state = initialState, action ) => {
    return [ ...state ];
}
export default Cart;
