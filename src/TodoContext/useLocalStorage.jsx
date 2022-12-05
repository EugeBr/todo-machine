import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    //creamos un custom hook
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        // Traemos nuestros TODOs almacenados
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if (!localStorageItem) {
            // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            // Si existen TODOs en el localStorage los regresamos como nuestros todos
            parsedItem = JSON.parse(localStorageItem);
          };
  
          setItem(parsedItem); //actualiza la info del estado con la info del localStorage (parsedItem)
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 1000); //setTimeout es solo para simular la respuesta de un API
    });
  
    //Persistir nuevas actualizaciones en LocalStorage
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    }; //cuando hay mas de dos estados se envia dentro de un objeto (en vez de un array)
  }

  export { useLocalStorage };