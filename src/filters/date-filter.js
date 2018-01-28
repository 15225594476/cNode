import Vue from 'vue'
Vue.filter('filDate', (val) => {
  var date1 = new Date(val)
  var date2 = new Date()
  var date = (date2 - date1) / 1000
  var aa = null
  var dd = null
  if (date < 60) {
    aa = date
    dd = '秒前'
  } else if (date > 60 && date < 60 * 60) {
    aa = date / 60
    dd = '分钟前'
  } else if (date > 60 * 60 && date < 60 * 60 * 24) {
    aa = date / 60 / 60
    dd = '小时前'
  } else if (date > 60 * 60 * 24 && date < 60 * 60 * 24 * 30) {
    aa = date / 60 / 60 / 24
    dd = '天前'
  } else if (date > 60 * 60 * 24 * 30 && date < 60 * 60 * 24 * 30 * 12){
    aa = date / 60 / 60 / 24 / 30
    dd = '月前'
  } else {
    aa = date / 60 / 60 / 24 / 30 / 12
    dd = '年前'
  }
  return aa.toFixed(0) + dd
})
