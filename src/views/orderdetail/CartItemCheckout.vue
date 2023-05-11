<template>
  <div class="cart-item">
    <div class="media-leff">
      <div class="item-img">
        <img
          :src="item.ImageLink ?? item.Images[0].ImageLink"
          alt=""
        />
        <div class="item-remove">{{item.Quantity}}</div>
      </div>
    </div>
    <div class="media-right">
      <div class="item-info">
        <h3 class="item--title">
          {{item.ProductName}}
        </h3>
        <div class="item--variant"><span>{{item.ColorName}} / {{item.SizeNumber}}</span></div>
        <div class="proloop-price">
            <div class="price-del">{{ $state.formatPrice(item.PriceDel) }}</div>
            <div class="price">{{ $state.formatPrice(item.PriceSale) }}</div>
        </div>
      </div>
    </div>
    <div class="media-total">
      <span>{{$state.formatPrice(item.PriceDel * item.Quantity)}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    item: Object
  }
};
</script>
<style scoped>
.cart-item {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 10px;
  border-bottom: 1px solid #eae8e8;
}
.media-left {
  padding: 0;
  position: relative;
  display: block;
}
.item-img {
  position: relative;
  width: 60px;
  height: 60px;
}
.item-img img {
  border: 1px solid #ededed;
}
.item-remove {
  position: absolute;
  top: -7px;
  left: -10px;
  display: block;
  background: #8f9bb3;
  color: #fff;
  font-size: 8px;
  font-weight: 400;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  cursor: pointer;
}

.media-right {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  max-width: 1 1 auto;
  padding-left: 18px;
  padding-right: 18px;
}
.item-info {
  margin-bottom: 10px;
}
.item--title {
  font-size: 15px;
  margin: 0px 0 2px;
  font-weight: 500;
}
.item--variant {
  font-size: 12px;
  color: #777;
  font-weight: 500;
}
.item--variant {
  font-size: 12px;
  color: #777;
  font-weight: 500;
}
.item-price p {
  margin: 0 0 10px;
}
.proloop-price{
    display: flex;
    margin: 10px 0;
}

.price{
    
    color: #797272;
    text-decoration: line-through;
    font-weight: 300;
    font-size: 15px;
    margin-left: 4px;
}
.price-del{
    margin-right: 4px;
    color: #c92027;
    font-weight: bold;
    font-size: 17px;
}
.media-total {
  text-align: righ;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: #c92027;
}
.line-item-total {
  font-size: 15px;
  font-weight: 600;
}
.item-total-price{
  text-align: right;
}
.quantity-partent {
  width: 100%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  margin: 8px 0 3px;
}
.quantity-partent > button {
  float: left;
  font-weight: 500;
  font-size: 18px;
  padding: 0;
  height: 28px;
  width: 28px;
  text-align: center;
  background: #ffffff;
  border: 1px solid #f3f4f4;
  border-radius: 4px;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
}
.quantity-partent > input {
  float: left;
  font-weight: 500;
  font-size: 15px;
  width: 36px;
  height: 28px;
  padding: 0;
  background: #fff;
  text-align: center;
  outline: none;
  border: 1px solid #f3f4f4;
  margin: 0 3px;
  border-radius: 4px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
}
</style>
