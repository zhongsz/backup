
export const fetchUsers = (id: string) => {
  return fetch('https://mysafeinfo.com/api/data?list=presidents&format=json')
    .then(res => {
      return res.json();
    })
    .then(result => result);
};

export const fetchResent = (id: string) => {
  return fetch('http://localhost:8080/api/Review/getrecents?id='+id)
    .then(res => {
      return res.json();
    })
    .then(result => result);
};

export const fetchContentService = (id:string) => {
  return fetch('http://localhost:8080/api/Review/getArticle?id='+id)
  .then(res => {
    return res.json();
  })
  .then(result => result);  
}
