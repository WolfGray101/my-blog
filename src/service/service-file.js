import axios from "axios";
export default class ServiceFile {
  baseURL = "https://blog.kata.academy/api/";

  async getResponce(url, token) {
    const options = token
      ? {
          headers: { Authorization: `Token ${token}` },
        }
      : null;
    try {
      const response = await fetch(`${this.baseURL}${url}`, options);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const result = await response.json();
      return result;
    } catch (err) {
      throw new Error(err);
    }
  }

  async postResponce(url, ...options) {
    try {
      const result = await axios.post(`${this.baseURL}${url}`, ...options);
      if (result.statusText !== "OK") {
        throw new Error(result.status);
      }
      return result.data;
    } catch (err) {
      throw new Error(err.response.status);
    }
  }

  async putResponce(url, ...options) {
    try {
      const result = await axios.put(`${this.baseURL}${url}`, ...options);
      if (result.statusText !== "OK") {
        throw new Error(result.status);
      }
      return result.data;
    } catch (err) {
      throw new Error(err.response);
    }
  }
  async deleteResponce(url, ...optional) {
    try {
      const result = await axios.delete(`${this.baseURL}/${url}`, ...optional);
      if (result.statusText !== "OK") {
        throw new Error(result.status);
      }

      return result.data;
    } catch (err) {
      throw new Error(err.response.status);
    }
  }

  async createAcc(userdata) {
    userdata = {
      user: {
        username: userdata.nickname,
        email: userdata.email,
        password: userdata.password,
      },
    };
    const res = await this.postResponce("users", userdata);
    return res;
  }

  async login(userdata) {
    userdata = {
      user: {
        email: userdata.email,
        password: userdata.password,
      },
    };
    const res = await this.postResponce(`users/login`, userdata);
    return res;
  }

  async getUser(token) {
    const res = await this.getResponce("user", token);
    return res;
  }

  async setUpdateUser(data = {}, token = "") {
    const res = await this.putResponce(
      "user",
      {
        user: data,
      },
      {
        headers: { Authorization: `Token ${token}` },
      }
    );
    return res;
  }
  async postCreateArticle(data = {}, token = "") {
    const res = await this.postResponce(
      "articles",
      {
        article: data,
      },
      {
        headers: { Authorization: `Token ${token}` },
      }
    );
    return res;
  }
  async getArticles(offset = 0, token = null) {
    const res = await this.getResponce(
      `articles?limit=5&offset=${offset}`,
      token
    );
    return res;
  }
  async getArticle(slug, token = null) {
    const res = await this.getResponce(`articles/${slug}`, token);
    return res;
  }

  async postFavorite(slug, token) {
    const res = await this.postResponce(
      `articles/${slug}/favorite`,
      {},
      {
        headers: { Authorization: `Token ${token}` },
      }
    );
    console.log(res);
    return res;
  }

  async deleteFavorite(slug, token) {
    const res = await this.deleteResponce(`articles/${slug}/favorite`, {
      headers: { Authorization: `Token ${token}` },
    });
    return res;
  }
  async deleteArticle(slug, token) {
    const res = await this.deleteResponce(`articles/${slug}`, {
      headers: { Authorization: `Token ${token}` },
    });
    console.log(res);
    return res;
  }
}

//  async setUpdateUser(user, token) {
//   console.log(user.username);

//    const auth = {
//     method: 'PUT',
//     headers: {
//     Authorization: `Token ${token}`
//    },
//    body: JSON.stringify({ "user" : {
//             "username": user.username,
//             'email': user.email,
//             'password': user.password,
//             'image': user.imgUrl
//           }})

//   }
//     const res = await this.putResponce('user' , auth)
//     console.log(res);
//     return res
//  }
//

//   async postResponce(url, userdata) {
//     try {
//       const response = await fetch(`${this.baseURL}${url}`, {
//       method: 'POST',
//       headers: {
//         accept: 'application/json',
//         'Content-Type': 'application/json;charset=utf-8',

//       },
//       body: JSON.stringify({ 'user' : {
//         'username': userdata.nickname,
//         'email': userdata.email,
//         'password': userdata.password
//       }}
//       )
//     })
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(response.status)
//       }
// const result = await response.json()
// console.log(result);
//       return result
//     } catch (err) {
//       throw new Error(err)
//     }
//   }

// async createAcc(userdata) {
//   console.log(userdata);
//   const res = await this.postResponce('users', userdata)
//   console.log(res);
//   return res
// }
