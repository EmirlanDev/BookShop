import axios from "axios";
import { API } from "./../Api";

export async function deleteProduct(id: number) {
  try {
    await axios.delete(`${API}/${id}`);
  } catch (error) {
    console.log("deleteError");
  }
}
