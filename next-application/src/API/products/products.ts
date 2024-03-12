import { publicAPI } from '..'

export class ProductsApi {
   static async getProducts() {
      try {
         const { data } = await publicAPI.get('/product');
         return data
      } catch (e) {
         return e
      }

   }

   static async getSingleProduct(id: string) {
      try {
         const { data } = await publicAPI.get(`/product/${+id}`);
         return data
      } catch (e) {
         return e
      }

   }
}