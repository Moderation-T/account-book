const request = (url, config) => {
  return fetch(url, config)
    .then(res => {
      return res.json();
    })
    .catch(res => {
      // 公共错误处理
      return res.json();
    });
};

// GET请求
export const get = url => {
  return request(url, { method: "GET" });
};

// POST请求
export const post = (url, data) => {
  return request(url, {
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json"
    },
    method: "POST"
  });
};

// PUT请求
export const delete = (url, data) => {
  return request(url, {
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json"
    },
    method: "DELETE"
  });
};

// PUT请求
export const put = (url, data) => {
  return request(url, {
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json"
    },
    method: "PUT"
  });
};

// PATCH请求
export const patch = (url, data) => {
  return request(url, {
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json"
    },
    method: "PATCH"
  });
};
