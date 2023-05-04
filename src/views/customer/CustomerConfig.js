import enumH from "@/assets/js/enum";
class customerConfig {
    constructor() {
        this.tableName = 'Customer';
        this.titleForm = "Khách hàng";
        this.formName = enumH.formName.customer;
        this.mode  = enumH.enumMode.view;
        this.columns = [
            {
                name : "FullName",
                title : "Tên khách hàng",
                textAlign : "left",
                type : "text",
                width : 300,
            },
            {
                name : "Email",
                title : "Email",
                textAlign : "left",
                type : "text",
                width : 300,
            },
            {
                name : "Phone",
                title : "Số điện thoại",
                textAlign : "right",
                type : "number",
                width : 100,
            },
            {
                name : "CreatedAt",
                title : "Thời gian tạo",
                textAlign : "center",
                type : "date",
                width : 150,
            },
            {
                name : "ModifiedAt",
                title : "Thời gian sửa",
                textAlign : "center",
                type : "date",
                width : 150,
            },
        ];
        this.placeholder = "Tìm kiếm ";
    }
  }
  export default customerConfig;
  