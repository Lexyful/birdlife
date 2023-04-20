export const fetchData = () => {
  return fetch(`https://shibe.online/api/birds?count=50&urls=true&httpsUrls=true`)
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        throw new Error(res.status);
      }
    });
}

