<template>
  <div id="app">
    <div class="header-nav">
      <header class="nav-header">
        <div class="nav-container">
          <h1>
            <router-link to="/">
              <img src="./assets/logo.png" alt="logo" class="nav-logo">
              <span>胖胖博客</span>
            </router-link> |
          </h1>
          <div class="nav-right">
            <div class="right-item"><router-link to="/">首页</router-link></div>
            <div class="right-item"><router-link to="/about">书架</router-link></div>
            <div class="right-item"><router-link to="/bookshelf">阅读</router-link></div>
          </div>
        </div>
      </header>
    </div>
    <div class="router-view">
      <router-view/>
    </div>
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
          margin: 0 0 0 10px;
          float: left;
          font-size: 32px;
          font-weight: 400;
          a {
            text-decoration:none;
            img {
              vertical-align: middle;
            }
            span {
              letter-spacing: 2px;
            }
          }
        }
        .nav-right {
          height: 100%;
          line-height: 80px;
          background: transparent;
          padding: 0;
          margin: 0;
          .right-item {
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
  .router-view {
    position: relative;
    top: 80px;
  }
  @media screen and (max-width: 420px) {
    .nav-container span {
      display: none;
    }
  }
  @media screen and (min-width: 420px) and (max-width: 768px) {
    .nav-container span {
      font-size: 24px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 992px) and (max-width: 1200px) {
  }
  @media screen and (min-width: 1200px) and (max-width: 1920px) {
  }
  @media screen and (min-width: 1920px) {
  }
</style>
