<template>
  <div class="about" :style="{ height: aboutHeight + 'px' }">
    <div class="container">
      <div class="bookcase-nav">
        <div class="nav-bg">
          <div class="nav-left"></div>
          <div class="nav-mid"></div>
          <div class="nav-right"></div>
        </div>
        <div class="nav-left-content">
          <div class="nav-search-content">
            <label>
              <input class="nav-search-input" type="text">
            </label>
            <div class="nav-search-btn"></div>
          </div>
        </div>
        <div class="nav-header">
          <span class="nav-title">胖胖的小说书架</span>
        </div>
        <div class="nav-right-btns">
          <div class="nav-share-btn"></div>
          <div class="nav-sort-btns">
            <div class="nav-name-sort"></div>
            <div class="nav-date-sort"></div>
          </div>
        </div>
      </div>
      <div class="bookcase-content">
        <div class="case-panel">
          <div class="case-background">
            <div class="case-row" v-for="(floor, index) in bookshelfData" :key="'case-row-' + index">
              <div class="case-left"></div>
              <div class="case-mid"></div>
              <div class="case-right"></div>
            </div>
          </div>
          <div class="case-content">
            <div class="case-row">
              <div class="case-wrapper" v-for="(floor, row) in bookshelfData" :key="'case-wrapper-' + row">
                <div class="book-content" v-for="(book, col) in floor"
                     :key="'book-key-' + row + '-' + col">
                  <div class="book-wrapper" @click="clickOneBook(book)" @touchenter="clickOneBook(book)">
                    <img class="book-img"
                         v-lazy="'coverImages/' + book.name + '.jpg'"
                         :alt="book.name">
                    <div class="book-border-container">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bookcase-footer">
        <div class="footer-skin-btn">
          <ul class="footer-skin">
            <li class="red active"></li>
            <li class="gold"></li>
            <li class="silver"></li>
            <li class="green"></li>
            <li class="yellow"></li>
          </ul>
        </div>
        <label>
          <input class="footer-input" disabled v-model="data.length" type="text"/>
        </label>
      </div>
    </div>
    <!--对话框-->
    <div class="dialog-overlay" @click.prevent.stop="centerDialogVisible = false" v-show="centerDialogVisible">
      <div class="dialog-container" @click.prevent.stop="">
        <div class="dialog-header">
          <span style="font-size: 24px">《{{ clickedBookData.name }}》</span>
          <span style="font-size: 14px">{{ clickedBookData.author }} 著</span>
          <div class="light-box-cancel-btn" title="关闭" @click.prevent.stop="centerDialogVisible = false">x</div>
        </div>
        <div class="dialog-main">
          <div class="book-detail-content">
            <div class="book-detail-book">
              <img class="book-detail-shelf" src="../assets/bookshelf_images/shelf.png" alt="">
              <div class="book-wrapper">
                <img class="book-img" :src="'coverImages/' + clickedBookData.name + '.jpg'" :alt="clickedBookData.name">
                <div class="book-border-container">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div class="book-detail-title">
              <el-rate style="display: inline-block;"
                       v-model="clickedBookData.score" disabled show-score
                       text-color="#ff9900" score-template="{value}">
              </el-rate>
            </div>
            <div class="book-detail-page">共{{ getWordNum }}字</div>
            <div class="button" @click="searchBook">百度搜索</div>
          </div>
        </div>
        <div class="dialog-footer">
          &emsp;&emsp;{{ clickedBookData.plot }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { novels } from '../assets/novels'

export default {
  name: 'About',
  components: {},
  data () {
    return {
      baseUrl: process.env.BASE_URL,
      rowNum: 4, // 书柜多少层
      colNum: 9, // 书柜每层多少本书
      aboutHeight: 500,
      centerDialogVisible: false,
      clickedBookData: {
        name: '默认',
        author: '',
        summary: '',
        plot: '',
        tags: [],
        score: 5,
        comment: '',
        wordNumber: 32232,
        startTime: '',
        endTime: '',
        img: 'coverImages/111.jpg'
      },
      bookshelfData: [],
      data: novels
    }
  },
  created () {
    this.colNum = Math.floor((window.innerWidth - 20) / 160)
    this.rowNum = Math.floor(novels.length / this.colNum) + 1
    this.aboutHeight = window.innerHeight - 80
    for (let i = 0; i < novels.length; i += this.colNum) {
      const rowData = []
      for (let j = 0; j < this.colNum; j++) {
        (i + j) < novels.length && rowData.push(novels[i + j])
      }
      this.bookshelfData.push(rowData)
    }
    window.onresize = () => {
      this.aboutHeight = window.innerHeight - 80
      this.colNum = Math.floor((window.innerWidth - 20) / 160)
      this.rowNum = Math.floor(novels.length / this.colNum) + 1
      this.bookshelfData = []
      for (let i = 0; i < novels.length; i += this.colNum) {
        const rowData = []
        for (let j = 0; j < this.colNum; j++) {
          (i + j) < novels.length && rowData.push(novels[i + j])
        }
        this.bookshelfData.push(rowData)
      }
    }
  },
  computed: {
    getWordNum: function () {
      return this.clickedBookData.wordNumber > 10000 ? (this.clickedBookData.wordNumber / 10000).toFixed(2) + '万'
        : this.clickedBookData.wordNumber
    }
  },
  methods: {
    clickOneBook: function (oneBooData) {
      this.clickedBookData = oneBooData
      this.centerDialogVisible = true
    },
    copyToClipboard (text) {
      if (text.indexOf('-') !== -1) {
        let arr = text.split('-')
        text = arr[0] + arr[1]
      }
      let textArea = document.createElement('textarea')
      textArea.style.position = 'fixed'
      textArea.style.top = '0'
      textArea.style.left = '0'
      textArea.style.width = '2em'
      textArea.style.height = '2em'
      textArea.style.padding = '0'
      textArea.style.border = 'none'
      textArea.style.outline = 'none'
      textArea.style.boxShadow = 'none'
      textArea.style.background = 'transparent'
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()

      try {
        var successful = document.execCommand('copy')
        var msg = successful ? '成功复制到剪贴板' : '该浏览器不支持点击复制到剪贴板'
        console.log(msg)
      } catch (err) {
        console.log('该浏览器不支持点击复制到剪贴板')
      }
      document.body.removeChild(textArea)
    },
    searchBook () {
      this.copyToClipboard(this.clickedBookData.name)
      window.open('https://www.baidu.com/s?ie=UTF-8&wd=' + this.clickedBookData.name) //  跳转链接
    }
  }
}
</script>

<style lang="scss" scoped>
  .about {
    position: relative;
    width: 100%;
    overflow: hidden auto;
    .container {
      position: relative;
      width: 100%;
      left: 0;
      right: 0;
      min-height: 262px;
      min-width: 280px;
      margin: auto;
      overflow: hidden;
      font-family: arial, sans-serif;
      font-size: 15px;
      line-height: 20px;
      color: #333;
      .bookcase-nav {
        height: 50px;
        width: 100%;
        position: relative;
        box-shadow: 0 -2px 2px rgba(0, 0, 0, .8);
        z-index: 2;
        transition: all .2s;
        .nav-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          .nav-left {
            width: 9px;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: url(../assets/bookshelf_images/skin.png) no-repeat -5px -247px;
          }
          .nav-mid {
            background: url(../assets/bookshelf_images/red-nav.png);
            height: 100%;
            position: absolute;
            left: 9px;
            right: 9px;
            top: 0;
            background-position: 0 -2px !important;
          }
          .nav-right {
            width: 9px;
            height: 100%;
            position: absolute;
            right: 0;
            top: 0;
            background: url(../assets/bookshelf_images/skin.png) no-repeat -19px -247px;
          }
        }
        .nav-left-content {
          position: absolute;
          left: 12px;
          top: 50%;
          margin-top: -15px;
          .nav-search-content {
            position: relative;
            float: left;
            margin-top: 2px;
            margin-left: 5px;
            .nav-search-input {
              position: relative;
              width: 206px;
              padding: 4px 28px 4px 10px;
              background: #4d2f2f;
              border-color: #f3bb9b;
              color: #f3bb9b;
              box-shadow: inset 1px 2px 3px #1A1A1A, 0 1px 3px #f3bb9b;
              font-size: 16px;
              line-height: 16px;
              border-radius: 50px;
              border: none;
              border-color: #f3bb9b;
              outline: 0;
              font-family: arial, sans-serif;
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
            }
            .nav-search-btn {
              top: 50%;
              position: absolute;
              margin-top: -12px;
              right: 6px;
              z-index: 1;
              opacity: .9;
              filter: alpha(opacity=90);
              cursor: pointer;
              height: 24px;
              width: 22px;
              background: url(../assets/bookshelf_images/skin.png) no-repeat -402px -301px;
              touch-action: pan-y;
              user-select: none;
              -webkit-user-drag: none;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }
          }
        }
        .nav-header {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          margin: 0;
          overflow: hidden;
          height: 100%;
          .nav-title {
            color: #4d2f2f;
            text-shadow: 1px 1px 0 #f3bb9b;
            line-height: 46px;
            margin: 0;
            font-size: 1.3em;
            font-weight: 700;
            cursor: pointer;
            touch-action: pan-y;
            user-select: none;
            -webkit-user-drag: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
        }
        .nav-right-btns {
          position: absolute;
          right: 17px;
          top: 50%;
          margin-top: -16px;
          max-width: 340px;
          .nav-share-btn {
            float: right;
            width: 40px;
            height: 31px;
            margin-top: 0;
            margin-left: 7px;
            cursor: pointer;
            touch-action: pan-y;
            user-select: none;
            -webkit-user-drag: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            background: url(../assets/bookshelf_images/skin.png) no-repeat -898px -222px;
            &:hover {
              background-position: -898px -257px;
            }
          }
          .nav-sort-btns {
            float: right;
            margin-left: 7px;
            .nav-name-sort {
              touch-action: pan-y;
              user-select: none;
              -webkit-user-drag: none;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              width: 69px;
              height: 31px;
              display: inline-block;
              cursor: pointer;
              float: left;
              background: url(../assets/bookshelf_images/skin.png) no-repeat -729px -218px;
              &:hover {
                background-position: -729px -254px;
              }
            }
            .nav-date-sort {
              touch-action: pan-y;
              user-select: none;
              -webkit-user-drag: none;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              width: 69px;
              height: 31px;
              display: inline-block;
              cursor: pointer;
              float: left;
              background: url(../assets/bookshelf_images/skin.png) no-repeat -800px -218px;
              &:hover {
                background-position: -800px -254px;
              }
            }
          }
        }
      }
      .bookcase-content {
        top: 46px;
        bottom: 40px;
        width: 100%;
        overflow: hidden;
        touch-action: pan-x pan-y;
        user-select: none;
        -webkit-user-drag: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        .case-row {
          height: 172px;
        }
        .case-panel {
          position: relative;
          width: 100%;
          top: 0;
          touch-action: pan-x pan-y;
          user-select: none;
          -webkit-user-drag: none;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          .case-background{
            position: relative;
            width: 100%;
            .case-row {
              height: 172px;
              width: 100%;
              position: relative;
              text-align: center;
              .case-left {
                background-image: url(../assets/bookshelf_images/skin-2.png);
                background-color: #83524E;
                background-position: 0 -192px;
                background-repeat: no-repeat;
                width: 165px;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                touch-action: pan-x pan-y;
                user-select: none;
                -webkit-user-drag: none;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              }
              .case-mid {
                height: 100%;
                position: absolute;
                left: 165px;
                right: 165px;
                background: url(../assets/bookshelf_images/red-2.jpg);
                top: 0;
              }
              .case-right {
                width: 165px;
                height: 100%;
                position: absolute;
                right: 0;
                top: 0;
                background-color: #83524E;
                background-position: -171px -192px;
                background-image: url(../assets/bookshelf_images/skin-2.png);
                background-repeat: no-repeat;
              }
            }
          }
          .case-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            .case-row {
              width: 100%;
              position: relative;
              text-align: center;
              .case-wrapper {
                width: 100%;
                position: relative;
                height: 100%;
                margin: 0 auto;
                text-align: center;
                .book-content {
                  top: 23px;
                  width: 130px;
                  height: 140px;
                  text-align: center;
                  margin: 0 15px;
                  position: relative;
                  z-index: 1;
                  display: inline-block;
                  &:hover .book-wrapper{
                    top: -10px;
                  }
                  .book-wrapper {
                    width: 108px;
                    height: 140px;
                    left: 11px;
                    top: 0;
                    position: absolute;
                    display: inline-block;
                    cursor: pointer;
                    background: #eee;
                    .book-img {
                      display: inline;
                      border-right: 1px solid rgba(255, 255, 255, 1);
                      cursor: pointer;
                      width: 100%;
                      height: 100%;
                      position: relative;
                      background: #eee;
                    }
                    .book-border-container {
                      position: absolute;
                      top: 0;
                      height: 100%;
                      right: -3px;
                      width: 4px;
                      div:nth-child(1) {
                        position: absolute;
                        width: 1px;
                        background: rgb(204, 204, 204);
                        height: 138px;
                        top: 1px;
                        left: 1px;
                      }
                      div:nth-child(2) {
                        position: absolute;
                        width: 1px;
                        background: rgb(255, 255, 255);
                        height: 136px;
                        top: 2px;
                        left: 2px;
                      }
                      div:nth-child(3) {
                        position: absolute;
                        width: 1px;
                        background: rgb(204, 204, 204);
                        height: 134px;
                        top: 3px;
                        left: 3px;
                      }
                      div:nth-child(3) {
                        position: absolute;
                        width: 1px;
                        background: rgb(255, 255, 255);
                        height: 132px;
                        top: 4px;
                        left: 4px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .bookcase-footer {
        height: 40px;
        text-align: center;
        position: relative;
        width: 100%;
        z-index: 4;
        background: url(../assets/bookshelf_images/red-footer.png);
        .footer-skin-btn {
          position: absolute;
          right: 20px;
          top: 50%;
          width: 41px;
          height: 31px;
          margin-top: -16px;
          cursor: pointer;
          background: url(../assets/bookshelf_images/skin.png) no-repeat -457px -222px;
          touch-action: pan-y;
          user-select: none;
          -webkit-user-drag: none;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          &:hover {
            background-position: -457px -257px;
          }
          .footer-skin {
            position: relative;
            left: 50%;
            margin-left: -30px;
            bottom: 5px;
            width: 60px;
            height: 0;
            opacity: 0;
            filter: alpha(opacity=0);
            cursor: default;
            border-radius: 5px;
            box-shadow: 0 4px 2px rgba(0, 0, 0, .5);
            overflow: hidden;
            -webkit-transition: all .4s;
            -moz-transition: all .4s;
            -o-transition: all .4s;
            transition: all .4s;
            padding: 0;
            list-style: none;
            li {
              position: relative;
              z-index: 2;
              width: 36px;
              height: 24px;
              border: 2px solid #fff;
              margin-top: 10px;
              margin-left: 10px;
              float: left;
              cursor: pointer;
              border-radius: 2px;
              -webkit-transition: all .2s;
              -moz-transition: all .2s;
              -o-transition: all .2s;
              transition: all .2s;
              background-repeat: no-repeat;
              background-position: -70px -30px;
              touch-action: pan-y;
              user-select: none;
              -webkit-user-drag: none;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }
            li.red {
              background: url(../assets/bookshelf_images/red-1.png);
            }
            li.gold {
              background: url(../assets/bookshelf_images/gold-1.png);
            }
            li.silver {
              background: url(../assets/bookshelf_images/silver-1.png);
            }
            li.green {
              background: url(../assets/bookshelf_images/green-1.png);
            }
            li.yellow {
              background: url(../assets/bookshelf_images/yellow-1.png);
            }
            li.active, li:hover {
              border-color: #0C7CC5 !important;
            }
          }
        }
        .footer-input {
          width: 60px;
          background: #4d2f2f;
          color: #f3bb9b;
          box-shadow: inset 1px 2px 3px #1A1A1A, 0 1px 3px #f3bb9b;
          text-align: center;
          margin: 5px 10px;
          padding: 4px 10px;
          font-size: 16px;
          line-height: 16px;
          border-radius: 50px;
          border: none #f3bb9b;
          outline: 0;
          font-family: arial, sans-serif;
          box-sizing: border-box;
        }
      }
    }

    .dialog-overlay{
      position: fixed;
      height: 100%;
      width:100%;
      background: rgba(43, 41, 41, 0.4);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1000;
      text-align:center;
      .dialog-container{
        position: relative;
        min-width: 350px;
        height: 455px;
        background: #ffffff;
        opacity: 1;   /* 背景半透明 */
        text-align:center;
        z-index: 1001;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        .dialog-header{
          position: relative;
          left: 0;
          top: 0;
          padding: 13px 18px;
          font-weight: 700;
          background: #b8b8b8;
          border-radius: 5px 5px 0 0;
          text-align: left;
          .light-box-cancel-btn {
            position: absolute;
            top: 0;
            right: 0;
            width: 46px;
            height: 46px;
            cursor: pointer;
            font-size: 28px;
            font-weight: 700;
            color: gray;
            text-align: center;
            line-height: 46px;
            touch-action: pan-x pan-y;
            user-select: none;
            -webkit-user-drag: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            &:hover {
              color: #fef1f8;
              background-color: #e91e63;
            }
          }
        }
        .dialog-main {
          position: relative;
          padding: 22px 10px;
          .book-detail-content {
            position: relative;
            padding-left: 210px;
            min-height: 155px;
            line-height: 22px;
            border-radius: 3px;
            .book-detail-book {
              position: absolute;
              top: 0;
              line-height: 22px;
              left: 40px;
              width: 106.4px;
              height: 140px;
              text-align: center;
              .book-detail-shelf {
                width: 182px;
                height: 60px;
                position: absolute;
                top: 100%;
                margin-top: -10px;
                left: 50%;
                margin-left: -91px;
                cursor: pointer;
              }
              .book-wrapper {
                position: absolute;
                display: inline-block;
                cursor: pointer;
                background: #eee;
                width: 106.4px;
                height: 140px;
                left: -2px;
                top: 0;
                touch-action: pan-x pan-y;
                user-select: none;
                -webkit-user-drag: none;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                .book-img {
                  border-right: 1px solid rgba(255,255,255,1);
                  cursor: pointer;
                  width: 100%;
                  height: 100%;
                  position: relative;
                  background: #eee;
                  display: inline;
                }
                .book-border-container {
                  position: absolute;
                  top: 0;
                  right: -3px;
                  width: 4px;
                  height: 100%;
                  div:nth-child(1) {
                    position: absolute;
                    width: 1px;
                    background: rgb(204, 204, 204);
                    height: 138px;
                    top: 1px;
                    left: 1px;
                  }
                  div:nth-child(2) {
                    position: absolute;
                    width: 1px;
                    background: rgb(255, 255, 255);
                    height: 136px;
                    top: 2px;
                    left: 2px;
                  }
                  div:nth-child(3) {
                    position: absolute;
                    width: 1px;
                    background: rgb(204, 204, 204);
                    height: 134px;
                    top: 3px;
                    left: 3px;
                  }
                  div:nth-child(4) {
                    position: absolute;
                    width: 1px;
                    background: rgb(255, 255, 255);
                    height: 132px;
                    top: 4px;
                    left: 4px;
                    box-shadow: 1px 1px 6px #000;
                  }
                }
              }
            }
            .book-detail-title {
              text-align: left;
              font-weight: 700;
              margin-bottom: 3px;
              overflow: hidden;
              height: 21px;
              width: 100%;
            }
            .book-detail-page {
              text-align: left;
              margin-bottom: 2px;
              font-size: 12px;
              font-weight: 700;
              color: #444;
              height: 110px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 5;
              overflow: hidden;
            }
            .button {
              display: block;
              max-width: 150px;
              margin: 0 auto;
              touch-action: pan-x pan-y;
              -webkit-user-drag: none;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              color: #fff;
              padding: 10px 0;
              position: relative;
              bottom: 0;
              background-color: #096e82;
              border: 1px solid #096e82;
              border-radius: 2px;
              text-align: center;
              cursor: pointer;
              box-shadow: rgba(0,0,0,.05) 0 1px 0 0;
              font-size: 14px;
              line-height: 16px;
              &:hover {
                border: 1px solid #2898AE;
                background-color: #2898AE;
              }
            }
          }
        }
        .dialog-footer {
          position: relative;
          text-align: left;
          padding: 0 20px 10px 20px;
          font-size: 12px;
          font-family: MicrosoftYaHeiUI,sans-serif;
          line-height: 22px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 6;
          overflow: hidden;
        }
      }
    }
  }
  /* 移动端适配 */
  @media screen and (max-width: 420px) {
    .about {
      .container {
        .bookcase-nav {
          .nav-left-content {
            .nav-search-content {
              .nav-search-input {
                width: 100px !important;
              }
            }
          }
          .nav-header {
            display: none;
          }
        }
        .dialog-overlay {
          .dialog-container {
            width: 330px;
          }
        }
      }
    }
  }
  @media screen and (min-width: 420px) and (max-width: 768px) {}
  @media screen and (min-width: 768px) and (max-width: 992px) {}
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    .dialog-container {
      max-width: 450px;
    }
  }
  @media screen and (min-width: 1200px) and (max-width: 1920px) {
    .dialog-container {
      max-width: 450px;
    }
  }
  @media screen and (min-width: 1920px) {
    .dialog-container {
      max-width: 550px;
    }
  }
</style>
