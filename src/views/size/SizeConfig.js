import enumH from "@/assets/js/enum";
class sizeConfig {
    constructor() {
        this.tableName = 'Size';
        this.formName = enumH.formName.size;
        this.titleForm = "Kích cỡ";
        this.search = false;
        this.columns = [
            {
                name : "SizeCode",
                title : "Mã kích cỡ",
                textAlign : "left",
                width : 150,
            },
            {
                name :"SizeNumber",
                title : "Số kích cỡ",
                textAlign : "left",
                width : 150,
            },
        ];
        this.placeholder = "Tìm kiếm theo size";
    }
  }
  export default sizeConfig;
  