import enumH from "@/assets/js/enum";
class supplyConfig {
    constructor() {
        this.tableName = 'Supply';
        this.titleForm = "Thông tin nhập hàng";
        this.formName = enumH.formName.supply;
        this.mode = enumH.enumMode.view;
        this.lock = enumH.enumLock.notAllowLock;
        this.delete = enumH.enumDelete.notAllowDelete;
        this.columns = [
            {
                name : "ProductCode",
                title : "Mã sản phẩm",
                textAlign : "left",
                type : "text",
                width : 120,
            },
            {
                name : "ProductName",
                title : "Tên sản phẩm",
                textAlign : "left",
                type : "text",
                width : 300,
            },
            {
                name : "SizeNumber",
                title : "Kích cỡ",
                textAlign : "right",
                type : "text",
                width : 100,
            },
            {
                name : "ColorName",
                title : "Màu sắc",
                textAlign : "left",
                type : "text",
                width : 100,
            },
            {
                name : "SupplyDate",
                title : "Ngày nhập",
                textAlign : "center",
                type : "date",
                width : 150,
            },
            {
                name : "Quantity",
                title : "Số lượng nhập",
                textAlign : "right",
                type : "number",
                width : 110,
            },
            {
                name : "PriceSupply",
                title : "Giá nhập",
                textAlign : "right",
                type : "Price",
                width : 100,
            },
            {
                name : "SupplierName",
                title : "Nhà cung cấp",
                textAlign : "left",
                type : "text",
                width : 400,
            },
        ];
        this.placeholder = "Tìm kiếm ";
    }
  }
  export default supplyConfig;
  