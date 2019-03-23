<template>
  <div class="bookshelf">
    <div class="real-shelf">
      <div class="shelf-row">
        <div class="loc">
          <div class="book-div">
            <div class="book-body"></div>
          </div>
          <div class="book-div">
            <div class="book-body"></div>
          </div>
          <div class="book-div">
            <div class="book-body"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Bookshelf'
}

</script>

<style lang="scss" scoped>
  .bookshelf {
    position: relative;
    width: 100%;
    margin: 10px auto;
    .real-shelf {
      width: 426px;
      height: 440px;
      -webkit-transition: all 1s;
      -moz-transition: all 1s;
      -ms-transition: all 1s;
      -o-transition: all 1s;
      transition: all 1s;
      .shelf-row {
        position: relative;
        width: 360px;
        height: 158px;
        margin-left: 33px;
        &:after {
          background: url(../assets/bookshelf_images/wall-bookshelf.png) no-repeat bottom left;
          background-size: 100%;
          width: 426px;
          height: 210px;
          display: block;
          content: "";
          margin-left: -38px;
        }
        .loc {
          position: absolute;
          bottom: 0;
          width: 100%;
          .book-div {
            position: relative;
            width: 33%;
            height: 100%;
            float: left;
            text-align: center;
            .book-body {
              position: relative;
              background-image: url(../../public/coverImages/仙逆.jpg);
              background-size: 100%;
              width: 92px;
              height: 115px;
              visibility: visible;
              margin: auto;
              z-index: 1;
              -webkit-box-shadow: 2px 2px 5px rgba(0,0,0,0.6);
              -moz-box-shadow: 2px 2px 5px rgba(0,0,0,0.6);
              -ms-box-shadow: 2px 2px 5px rgba(0,0,0,0.6);
              -o-box-shadow: 2px 2px 5px rgba(0,0,0,0.6);
              box-shadow: 2px 2px 5px rgba(0,0,0,0.6);
              -webkit-transition: -webkit-transform 0.1s;
              -webkit-transform: translate(0, 0);
              -moz-transition: -moz-transform 0.1s;
              -moz-transform: translate(0, 0);
              -ms-transition: -ms-transform 0.1s;
              -ms-transform: translate(0, 0);
              -o-transition: -o-transform 0.1s;
              -o-transform: translate(0, 0);
              transition: transform 0.1s;
              transform: translate(0, 0);
              &:hover {
                z-index: 2;
                background-color: white;
                -webkit-transform: scale3d(1.1, 1.1, 1) translate3d(0, -5px, 0);
                -moz-transform: scale3d(1.1, 1.1, 1) translate3d(0, -5px, 0);
                -ms-transform: scale3d(1.1, 1.1, 1) translate3d(0, -5px, 0);
                -o-transform: scale3d(1.1, 1.1, 1) translate3d(0, -5px, 0);
                transform: scale3d(1.1, 1.1, 1) translate3d(0, -5px, 0);
              }
            }
          }
        }
      }
    }
  }
</style>
