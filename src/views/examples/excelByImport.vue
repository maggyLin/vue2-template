<template>
  <div>

    <button  @click="handleExportExcel">click me</button>

    <table ref="weeklyTable">
      <tr>
        <th>title 1</th>
        <th>title 2</th>
        <th>title 3</th>
      </tr>
      <tr>
        <td>a</td>
        <td>b</td>
        <td>c</td>
      </tr>
    </table>


    <router-link class="fix-top" to="/">Home</router-link>
  </div>
</template>

<script>
import * as XLSX from 'xlsx'
import export2Excel from '@/helper/export2Excel'

export default {
  name: 'excelByImport',
  metaInfo: {
    title: 'excle import example', 
  },
  components: {

  },
  created() {},
  methods: {
    handleExportExcel() {
      //excel file name by week and year
      let name = 'abc'
      //html table to excel json
      var ws = XLSX.utils.table_to_sheet(this.$refs.weeklyTable, { raw: true })
      // console.log(ws)

      export2Excel({
        worksheets: {
          sheet1: ws,
        },
        fileName: name, // 匯出檔名
        type: 'xlsx', // 檔案匯出型別
      })
    },

    // 樣式修改範例
    // excelStyle(ws) {
    //   //欄位寬度
    //   ws['!cols'] = [{ wch: 6 }, { wch: 20 }, { wch: 15 }, { wch: 15 }, { wch: 15 }]
    //   this.monthWithProjectList.forEach((element) => {
    //     //F欄位(月專案)之後有無專案判斷寬度
    //     if (element.projects) ws['!cols'].push({ wch: 30 })
    //     else ws['!cols'].push({ wch: 15 })
    //   })

    //   // title target 換行
    //   ws['C1']['v'] = 'System\r\n(>' + this.typeAutoTarget[0].System + '%)'
    //   ws['D1']['v'] = 'Module\r\n(>' + this.typeAutoTarget[0].Module + '%)'
    //   ws['E1']['v'] = 'Component\r\n(>' + this.typeAutoTarget[0].Component + '%)'

    //   // BU target 換行
    //   for (let g = 2; g <= this.BUList.length * 2 + 3; g++) {
    //     let s_old = ws['B' + g]['v']

    //     if (g % 2 == 0) {
    //       var f = s_old.slice(0, 5) //AS IS
    //       var e = s_old.slice(5)
    //     } else {
    //       var f = s_old.slice(0, 4) //Plan
    //       var e = s_old.slice(4)
    //     }
    //     ws['B' + g]['v'] = f + '\r\n' + e
    //   }

    //   //找出excel所有column [A,B.....]
    //   let allCol = this.buildColumnsArray(ws['!ref'])
    //   //歷遍整個excel資料(欄位開始為1=> A1,B1...)
    //   for (let j = 1; j <= this.BUList.length * 2 + 3; j++) {
    //     for (let k = 0; k < allCol.length; k++) {
    //       let siteName = allCol[k] + j
    //       if (!ws[siteName]) ws[siteName] = {}
    //       ws[siteName]['s'] = {
    //         //設定邊框
    //         border: {
    //           top: {
    //             style: 'thin',
    //           },
    //           bottom: {
    //             style: 'thin',
    //           },
    //           left: {
    //             style: 'thin',
    //           },
    //           right: {
    //             style: 'thin',
    //           },
    //         },
    //         alignment: {
    //           horizontal: 'center', //置中
    //           vertical: 'center', //置中
    //           wrapText: true, //自動換行
    //         },
    //       }

    //       //title設定backgroud and bold
    //       if (j == 1) {
    //         ws[siteName]['s']['fill'] = {
    //           bgColor: {
    //             indexed: 64,
    //           },
    //           fgColor: {
    //             rgb: 'ADD8E6',
    //           },
    //         }
    //         //粗體
    //         ws[siteName]['s']['font'] = {
    //           bold: true,
    //         }
    //       }

    //       //專案欄位格式
    //       if (j >= 2 && j <= 16) {
    //         if (allCol[k] != 'A' && allCol[k] != 'B' && allCol[k] != 'C' && allCol[k] != 'D' && allCol[k] != 'E') {
    //           //專案顯示列表欄位向左對齊
    //           ws[siteName]['s'].alignment.horizontal = 'left'

    //           //專案數量調整欄位高度
    //           let str = ws[siteName]['v'] ? ws[siteName]['v'] : ''
    //           if (str.length > 0) {
    //             //計算換行數量(專案數量)
    //             let count = (str.match(/\n/g) || []).length
    //             //超過4個專案 (AS IS and Plan 剛好加起來4個高)
    //             if (count >= 4) {
    //               let addColNum = count - 4 + 2
    //               let half = Math.ceil(addColNum / 4) //AS IS and Plan 上下各需要增加多少格子
    //               let bs = ''
    //               for (let g = 0; g < half; g++) {
    //                 bs += '\r\n'
    //               }
    //               //使用斷行調整行高
    //               let asisCol = 'B' + j
    //               ws[asisCol]['v'] = bs + ws[asisCol]['v'] + bs
    //               let planCol = 'B' + (j + 1)
    //               ws[planCol]['v'] = bs + ws[planCol]['v'] + bs
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // },
    // buildColumnsArray(range) {
    //   let self = this
    //   var i,
    //     res = [],
    //     rangeNum = range.split(':').map(function (val) {
    //       return self.alphaRemoveNum(val.replace(/[0-9]/g, ''))
    //     }),
    //     start = rangeNum[0],
    //     end = rangeNum[1] + 1

    //   for (i = start; i < end; i++) {
    //     res.push(self.numToAlpha(i))
    //   }
    //   return res
    // },
    // alphaRemoveNum(alpha) {
    //   var i = 0,
    //     num = 0,
    //     len = alpha.length
    //   for (; i < len; i++) {
    //     num = num * 26 + alpha.charCodeAt(i) - 0x40
    //   }
    //   return num - 1
    // },
    // numToAlpha(num) {
    //   var alpha = ''
    //   for (; num >= 0; num = parseInt(num / 26, 10) - 1) {
    //     alpha = String.fromCharCode((num % 26) + 0x41) + alpha
    //   }
    //   return alpha
    // },
  },
}
</script>

<style scoped>
a {
  color: #42b983;
}
.fix-top {
  position: fixed !important;
  top: 20px;
  right: 50px;
}
</style>
