const getGQL =
  (url) =>
  (query, variables = {}) =>
    fetch(url, {
      //метод
      method: "POST",
      headers: {
        //заголовок content-type
        "Content-Type": "application/json",
        ...(localStorage.auth
          ? { Authorization: "Bearer " + localStorage.auth }
          : {}),
      },
      //body с ключами query и variables
      body: JSON.stringify({ query, variables }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors && !data.data)
          throw new Error(JSON.stringify(data.errors));
        return data.data[Object.keys(data.data)[0]];
      });

export const backURL = "http://shop-roles.asmer.fs.a-level.com.ua";
export const gql = getGQL(`${backURL}/graphql`);
