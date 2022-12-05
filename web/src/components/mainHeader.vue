<template>
  <header class="header1">
    <div class="container-menu-header">
      <div class="topbar">
        <div class="topbar-social">
          <a href="https://facebook.com" target="_blank" class="topbar-social-item fa fa-facebook"></a>
          <a href="#" class="topbar-social-item fa fa-instagram"></a>
          <a href="#" class="topbar-social-item fa fa-pinterest-p"></a>
          <a href="#" class="topbar-social-item fa fa-snapchat-ghost"></a>
          <a href="#" class="topbar-social-item fa fa-youtube-play"></a>
        </div>

        <span class="topbar-child1">
					Free shipping for standard order over $100
				</span>

        <div class="topbar-child2">
					<span class="topbar-email">
						fashe@example.com
					</span>

          <div class="topbar-language rs1-select2">
            <select class="selection-1" name="time">
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
      </div>

      <div class="wrap_header">
        <!-- Logo -->
        <a href="index.html" class="logo">
          <img src="images/icons/logo.png" alt="IMG-LOGO">
        </a>

        <!-- Menu -->
        <div class="wrap_menu">
          <nav class="menu">
            <ul class="main_menu">
              <router-link :to="{name: 'home'}" tag="li" active-class="sale-noti" exact>
                <a>Home</a>
              </router-link>

              <router-link :to="{name: 'shop'}" tag="li" active-class="sale-noti" exact>
                <a>Shop</a>
              </router-link>

              <router-link :to="{name: 'features'}" tag="li" active-class="sale-not" exact>
                <a>Features</a>
              </router-link>
            </ul>
          </nav>
        </div>

        <!-- Header Icon -->
        <div class="header-icons">
          <a href="#" class="header-wrapicon1 dis-block">
            <img src="images/icons/icon-header-01.png" class="header-icon1" alt="ICON">
          </a>

          <span class="linedivide1"></span>

          <div class="header-wrapicon2">
            <img src="images/icons/icon-header-02.png" class="header-icon1 js-show-header-dropdown" alt="ICON">
            <span class="header-icons-noti">{{ totalCartQty }}</span>

            <!-- Header cart noti -->
            <div class="header-cart header-dropdown">
              <ul class="header-cart-wrapitem">
                <template v-for="product in cartItems">
                  <li class="header-cart-item">
                    <div class="header-cart-item-img">
                      <img :src="product.image" alt="IMG">
                    </div>

                    <div class="header-cart-item-txt">
                      <router-link to="/" class="header-cart-item-name">
                        {{ product.title }}
                      </router-link>

                      <span class="header-cart-item-info">
                                              {{ product.qty }} x ${{ product.price }}
                                            </span>
                    </div>
                  </li>
                </template>
              </ul>

              <div class="header-cart-total">
                Total: ${{ totalCartPrice }}
              </div>

              <div class="header-cart-buttons">
                <div class="header-cart-wrapbtn">
                  <!-- Button -->
                  <a href="cart.html" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                    View Cart
                  </a>
                </div>

                <div class="header-cart-wrapbtn">
                  <!-- Button -->
                  <a href="#" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                    Check Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>