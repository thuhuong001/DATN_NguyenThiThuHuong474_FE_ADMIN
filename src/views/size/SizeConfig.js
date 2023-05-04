import enumH from "@/assets/js/enum";
class sizeConfig {
    constructor() {
        this.tableName = 'Size';
        this.formName = enumH.formName.size;
        this.titleForm = "Kích cỡ";
        this.search = false;
        this.columns = [
            {
                name :"SizeNumber",
                title : "Số kích cỡ",
                textAlign : "right",
                width : 100,
            },
            {
                name : "SizeCode",
                title : "Mã kích cỡ",
                textAlign : "left",
                width : 100,
            },
            {
                name : " ",
                title : " ",
                textAlign : "left",
                width : 1000,
            },
        ];
        this.placeholder = "Tìm kiếm theo size";
    }
  }
  export default sizeConfig;
  