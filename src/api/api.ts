import { Post } from "@/interfaces/Post"
import axios,{AxiosResponse} from "axios"

export const getPosts = async (): Promise<Post[] | null | undefined> => {
  try {
    const response: AxiosResponse<Post[]> = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.statusText==='OK'&& response.data ? response.data: null;
  } catch (error) {
  }

}

export const getPost = async (slug : any): Promise<Post | null | undefined> => {
  try {
    const response: AxiosResponse<Post> = await axios.get(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    return response.statusText==='OK'&& response.data? response.data: null;
  } catch (error) {
  }
}