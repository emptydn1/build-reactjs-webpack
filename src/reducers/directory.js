const InitialState = {
  sections: [
    {
      title: "shirt",
      imageUrl:
        "https://i.a4vn.com/2019/11/7/sao-viet-han-dung-hang-chiec-vay-than-thanh-ai-dep-hon-ai-191f8b.jpg",
      id: 1,
      linkUrl: "shop/shirt"
    },
    {
      title: "jackets",
      imageUrl:
        "https://www.elleman.vn/wp-content/uploads/2015/01/03/ellemanvn-nguoi-mau-hoang-tien-dung-featured.jpg",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "sneakers",
      imageUrl:
        "https://vietstylist.com/wp-content/uploads/2019/10/adidas_nu_2019_b6f16b9610b44d73b0825478ac5f81bb.jpg",
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "womens",
      imageUrl:
        "https://keomoi.com/wp-content/uploads/2019/05/gai-xinh-sexy-goi-cam-hinh-1.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "mens",
      imageUrl:
        "https://i-giaitri.vnecdn.net/2019/05/31/ggg-2192-1559291494.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

const directory = (state = InitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directory;
