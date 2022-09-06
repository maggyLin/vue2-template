import * as styleXLSX from 'xlsx-style'

/**
 * 將 String 轉換成 ArrayBuffer 
 * @method 型別轉換
 * @param {String} [s] wordBook內容
 * @return {Array} 二進位制流陣列
 */
function s2ab(s) {
    let buf = null;

    if (typeof ArrayBuffer !== 'undefined') {
        buf = new ArrayBuffer(s.length);
        let view = new Uint8Array(buf);

        for (let i = 0; i != s.length; ++i) {
            view[i] = s.charCodeAt(i) & 0xFF;
        }

        return buf;
    }

    buf = new Array(s.length);

    for (let i = 0; i != s.length; ++i) {

        // 轉換成二進位制流
        buf[i] = s.charCodeAt(i) & 0xFF;
    }

    return buf;
}

/**
 * 方案一：利用 URL.createObjectURL 下載 （以下選用）
 * @method 檔案下載
 * @param {Object} [obj] 匯出內容 Blob 物件
 * @param {String} [fileName] 檔名 下載是生成的檔名
 * @return {void}
 */
function saveAs(obj, fileName) {
    let aLink = document.createElement("a");

    if (typeof obj == 'object' && obj instanceof Blob) {
        aLink.href = URL.createObjectURL(obj); // 建立blob地址
    }

    aLink.download = fileName;
    aLink.click();
    setTimeout(function () {
        URL.revokeObjectURL(obj);
    }, 100);
}

/**
 * @method 資料匯出excel
 * @param {Object} [worksheets] 工作表資料內容
 * @param {String} [fileName='ExcelFile'] 匯出excel檔名
 * @param {String} [type='xlsx'] 匯出檔案型別
 */
export default function export2Excel({
    worksheets,
    fileName = 'ExcelFile',
    type = 'xlsx'
} = {}) {

    let sheetNames = Object.keys(worksheets);
    let workbook = {
        SheetNames: sheetNames, //儲存的工作表名
        Sheets: worksheets
    };

    // excel的配置項
    let wopts = {
        bookType: type,  // 生成的檔案型別
        bookSST: false, // 是否生成Shared String Table，官方解釋是，如果開啟生成速度會下降，但在低版本IOS裝置上有更好的相容性
        type: 'binary'
    }

    // attempts to write the workbook
    let wbout = styleXLSX.write(workbook, wopts);
    let wbBlob = new Blob([s2ab(wbout)], {
        type: "application/octet-stream"
    });

    saveAs(wbBlob, fileName + '.' + type);
}