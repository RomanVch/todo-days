import { CorrectTaskT, NewTaskT, TodoUiT } from "./types";

const URL = "http://localhost:3003/";
const URL_NEWS =
  "https://newsapi.org/v2/everything?q=apple&from=2023-01-21&to=2023-01-21&sortBy=popularity&apiKey=1379ea55d09c4c3998a85a68d46cdfb9&pageSize=1";
const methodData = async (
  url: string,
  method: "POST" | "PUT",
  data: CorrectTaskT | NewTaskT
) => {
  return fetch(url, {
    method: method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
};
export const api = {
  async getNews(): Promise<{ articles: { title: string }[] }> {
    const response = await fetch(`${URL_NEWS}`);
    return response.json();
  },
  async getTodos(): Promise<TodoUiT> {
    const response = await fetch(`${URL}date`);
    return response.json();
  },
  async addTodo(newTaskT: NewTaskT) {
    const response = await methodData(`${URL}date/addTask`, "POST", newTaskT);
    return response.json();
  },
  async correctTodo(correctTaskT: CorrectTaskT) {
    const response = await methodData(
      `${URL}date/correctTask`,
      "PUT",
      correctTaskT
    );
    return response.json();
  },
};
