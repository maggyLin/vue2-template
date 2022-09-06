<template>
  <div>
    <h1>aaaaaaaaaaa</h1>
    <button @click="handleExportExcel">click me</button>

    <router-link class="fix-top" to="/">Home</router-link>
  </div>
</template>

<script>
import * as XLSX from 'xlsx'
import export2Excel from '@/helper/export2Excel'

export default {
  name: 'excelex',
  metaInfo: {
    title: 'excle example', 
  },
  components: {

  },
  created() {},
  methods: {
    handleExportExcel() {
      let jsonTable = [
        {
          sheet1id: 1,
          表頭1: '資料11',
          表頭2: '資料12',
          表頭3: '資料13',
          表頭4: '資料14',
        },
        {
          sheet1id: 2,
          表頭1: '資料21',
          表頭2: '資料22',
          表頭3: '資料23',
          表頭4: '資料24',
          test: 'test',
        },
      ]

      // 二維陣列格式
      let aoa = [
        ['sheet2id', '表頭1', '表頭2', '表頭3', '表頭4'],
        [1, '資料11', '資料12', '資料13', '資料14'],
        [2, '資料21', '資料22', '資料23', '資料24'],
      ]

      // 使用 XLSX 內建的工具庫將 json 轉換成 sheet
      let worksheet1 = XLSX.utils.json_to_sheet(jsonTable)

      // 使用 XLSX 內建的工具庫將 aoa 轉換成 sheet
      let worksheet2 = XLSX.utils.aoa_to_sheet(aoa)

      // 設定 excel 表格樣式
      worksheet1['B1'].s = {
        font: {
          sz: 14,
          bold: true,
          color: {
            rgb: 'FFFFAA00',
          },
        },
        fill: {
          bgColor: {
            indexed: 64,
          },
          fgColor: {
            rgb: 'FFFF00',
          },
        },
      }

      // 單元格合併
      worksheet1['!merges'] = [
        {
          s: { c: 1, r: 0 },
          e: { c: 4, r: 0 },
        },
      ]

      export2Excel({
        worksheets: {
          sheet1: worksheet1,
          sheet2: worksheet2,
        }, // 匯出excel的資料，key表示工作表名，value表示對應工作表的 sheet 資料，支援匯出多個工作表
        fileName: '我的excel', // 匯出檔名
        type: 'xlsx', // 檔案匯出型別
      })
    },
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
