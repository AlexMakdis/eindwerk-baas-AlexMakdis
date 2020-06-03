(() => {  
  const DOMAIN = 'https://github.com/AlexMakdis/eindwerk-baas-AlexMakdis';

  const loadBlog = async () => {
    const response = await fetch(`${DOMAIN}/data/hotSauce/index.json`);
    const jsonData = await response.json();
    console.log(jsonData);
  }

  loadBlog();
})();