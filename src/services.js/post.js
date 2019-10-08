export const fetchPostData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/getData");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  