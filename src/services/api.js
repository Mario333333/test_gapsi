
// import axios from "./intance";

export const getVisitor = () => {
  // return axios.post("/visitor").then((res) => res.data);

  return {
    code: 200, 
    data: {
      welcome:"",
      version:1
    }
  }
};

export const getProducts = (category, page) => {
  // return axios.get(`/productos/${category}/${page}`).then((res) => res.data);

  return {
    code: 200, 
    data: {
      products: [
        {
          "ID": 1,
          "NAME": "Test product 1",
          "IMAGE": "https://picsum.photos/200",
          "PRICE": 100,
          "DESCRIPTION": "A legendary sword with immense power."
        },
        {
          "ID": 2,
          "NAME": "Test product 2",
          "IMAGE": "https://picsum.photos/200",
          "PRICE": 100,
          "DESCRIPTION": "A legendary sword with immense power."
        },
        {
          "ID": 3,
          "NAME": "Test product 3",
          "IMAGE": "https://picsum.photos/200",
          "PRICE": 100,
          "DESCRIPTION": "A legendary sword with immense power."
        },
        {
          "ID": 4,
          "NAME": "Test product 3",
          "IMAGE": "https://picsum.photos/200",
          "PRICE": 100,
          "DESCRIPTION": "A legendary sword with immense power."
        },
        {
          "ID": 5,
          "NAME": "Test product 3",
          "IMAGE": "https://picsum.photos/200",
          "PRICE": 100,
          "DESCRIPTION": "A legendary sword with immense power."
        },    {
          "ID": 6,
          "NAME": "Test product 3",
          "IMAGE": "https://picsum.photos/200",
          "PRICE": 100,
          "DESCRIPTION": "A legendary sword with immense power."
        },
        {
          "ID": 7,
          "NAME": "Test product 3",
          "IMAGE": "https://picsum.photos/200",
          "PRICE": 100,
          "DESCRIPTION": "A legendary sword with immense power."
        },
        {
          "ID": 8,
          "NAME": "Test product 3",
          "IMAGE": "https://picsum.photos/200",
          "PRICE": 100,
          "DESCRIPTION": "A legendary sword with immense power."
        },
        {
          "ID": 9,
          "NAME": "Test product 3",
          "IMAGE": "https://picsum.photos/200",
          "PRICE": 100,
          "DESCRIPTION": "A legendary sword with immense power."
        },
        {
          "ID": 10,
          "NAME": "Test product 3",
          "IMAGE": "https://picsum.photos/200",
          "PRICE": 100,
          "DESCRIPTION": "A legendary sword with immense power."
        },
        {
          "ID": 11,
          "NAME": "Test product 3",
          "IMAGE": "https://picsum.photos/200",
          "PRICE": 100,
          "DESCRIPTION": "A legendary sword with immense power."
        },
        {
          "ID": 12,
          "NAME": "Test product 3",
          "IMAGE": "https://picsum.photos/200",
          "PRICE": 100,
          "DESCRIPTION": "A legendary sword with immense power."
        }

      ]
    }
  }
};
