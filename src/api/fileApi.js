import axiosClient from "./axiosClient";

export class fileApi {
  /**
   * Lấy các dữ liệu theo bộ lọc
   */
  insertImages = (params) => {
    try {
      return axiosClient.post("/File", params, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default fileApi;
