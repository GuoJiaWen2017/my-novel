<template>
  <div id="app">
    <div class="header-nav">
      <header class="nav-header">
        <div class="nav-container">
          <h1>
            <router-link to="/">
              <img src="./assets/logo.png" alt="logo" class="nav-logo">
            </router-link> |
          </h1>
          <ul>
            <li><router-link to="/">主页</router-link></li>
            <li><router-link to="/about">书架</router-link></li>
          </ul>
        </div>
      </header>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
  #app {
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: #2c3e50;
   }

  .header-nav {
    position: fixed;
    width: 100%;
    height: 80px;
    left: 0;
    top: 0;
    z-index: 1500;
    .nav-header {
      height: 80px;
      background-color: #fff;
      color: #fff;
      top: 0;
      left: 0;
      width: 100%;
      line-height: 80px;
      z-index: 100;
      position: relative;
      .nav-container {
        height: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid #dcdfe6;
        width: 1140px;
        padding: 0;
        margin: 0 auto;
        h1 {
          margin: 0;
          float: left;
          font-size: 32px;
          font-weight: 400;
          img {
            vertical-align: middle;
          }
        }
        ul {
          float: right;
          height: 100%;
          line-height: 80px;
          background: transparent;
          padding: 0;
          margin: 0;
          li {
            margin: 0;
            float: left;
            list-style: none;
            position: relative;
            cursor: pointer;
            a {
              text-decoration: none;
              color: #1989fa;
              opacity: .5;
              display: block;
              font-family: "Microsoft YaHei", sans-serif;
              font-size: 18px;
              padding: 0 22px;
              &.router-link-exact-active {
                font-size: 20px;
                opacity: 1;
                color: #1989fa;
                border-bottom: 1px solid #1989fa;
              }
              &:hover {
                background-color: antiquewhite;
              }
            }
          }
        }
      }
    }
  }
</style>
