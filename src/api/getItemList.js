const getItemList = ()=> {
    const url = `https://gp-super-store-api.herokuapp.com/item/list`;
  
    return fetch(url)
      .then(response => response.json())  
  };
  
  export default getItemList;
  