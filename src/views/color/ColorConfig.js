import enumH from "@/assets/js/enum";
class colorConfig {
    constructor() {
        this.tableName = 'Color';
        this.titleForm = "Màu sắc";
        this.formName = enumH.formName.color;
        this.search = false;
        this.columns = [
            {
                name : "ColorCode",
                title : "Mã màu",
                textAlign : "center",
                width : 100,
            },
            {
                name :"ColorName",
                title : "Tên màu",
                textAlign : "left",
                width : 1000,
            },
        ];
        this.placeholder = "Tìm kiếm theo màu";
    }
  }
  export default colorConfig;
  