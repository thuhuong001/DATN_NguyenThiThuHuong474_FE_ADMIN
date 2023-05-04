import enumH from "@/assets/js/enum";
class brandConfig {
    constructor() {
        this.tableName = 'Brand';
        this.formName = enumH.formName.brand;
        this.titleForm = "Nhãn hiệu";
        this.search = false;
        this.columns = [
            {
                name : "BrandCode",
                title : "Mã thương hiệu",
                textAlign : "left",
                width : 120,
            },
            {
                name :"BrandName",
                title : "Tên thương hiệu",
                textAlign : "left",
                width : 300,
            },
            {
                name :"Description",
                title : "Mô tả",
                textAlign : "left",
                width : 800,
            },
        ];
        this.placeholder = "Tìm kiếm ";
    }
  }
  export default brandConfig;
  