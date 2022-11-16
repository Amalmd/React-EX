import axios from "axios";

const store = axios.create({
  baseURL: "https://6374c7c848dfab73a4e89e30.mockapi.io/",
});

function api() {
  const getItems = async () => {
    const { data } = await store.get("/storeItems");
    return data;
  };
  const getItem = async (id) => {
    const { data } = await store.get("/storeItems/" + id);
    return data;
  };

  const deleteItem = async (id) => {
    return await store.delete("/storeItems/" + id);
  };

  const addItem = async (item) => {
    const post = await store.post("/storeItems/", item);
    return post;
  };

  const editItem = async (item, id) => {
    await store.put(`/storeItems/${id}`, item);
  };
}
export default api;
