const getItemById =id=> {
    const url = `https://gp-super-store-api.herokuapp.com/item/${id}`;
  
    return fetch(url)
      .then(response => response.json())  
  };
  
  export default getItemById;
  