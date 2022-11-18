export default {
  fetchData : async () => {
    return await new Promise(async (resolve, reject) => {
      return await fetch('https://raw.githubusercontent.com/jkga/katalogo/main/src/contents/data.json')
      .then(res => res.json()).then(res => resolve(res))
      .catch(e => {
        reject({})
      })
    }).then((res) => res).catch((e) => { return {} })
  }
}