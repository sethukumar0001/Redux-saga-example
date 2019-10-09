export const fetchData = async () => {
    try {
      const response = await fetch("https://localhost:5000/api/getData");
      const data = await response.json();
      console.log(data)
      return data;
      
    } catch (e) {
      console.log(e);
    }
  };