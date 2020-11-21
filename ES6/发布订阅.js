let huya = {
  anchorLists: {},

  listen: function (anchorName, fn) {
    if (!this.anchorLists[anchorName]) {
      this.anchorLists[anchorName] = []
    }
    this.anchorLists[anchorName].push(fn)
  },

  trigger: function () {
    let anchorName = Array.prototype.shift.call(arguments)

    if (!this.anchorLists.hasOwnProperty(anchorName)) {
      console.log(`该主播尚未被订阅…o_O…`);
      return;
    }
    let fnQueues = [...this.anchorLists[anchorName]]
    fnQueues.forEach(item => (item.apply(this, arguments)))
    // console.log(this.anchorLists[anchorName]);
  },

  remove: function (anchorKey, fn) {
    if (!this.anchorLists[anchorKey]||this.anchorLists[anchorKey].length === 0) {
      console.log(`你尚未订阅该主播`);
      return;
    }
    let fnLists = [...this.anchorLists[anchorKey]]
    if (!fn) {
      fnLists && (fnLists.length = 0)
    }
    for (let i = 0; i < fnLists.length; i++) {
      var obj = fnLists[i];
      if (obj === fn) {
        fnLists.splice(i, 1)
      }
    }
    this.anchorLists[anchorKey] = fnLists;
  },

  once(anchorKey, fn) {
    function cdb() {
      fn.apply(this, arguments)
      this.remove(anchorKey, cdb)
    }
    this.listen(anchorKey, cdb)
  }
}

let initPubSub = obj => {
  for (let i in huya) {
    obj[i] = huya[i]
  }
}

let newobj = {}
initPubSub(newobj)


function xiaoming() {
  let args = Array.prototype.slice.call(arguments)
  console.log(`xiaoming,${args}开始直播了`);
}

function zhangsan() {
  let args = Array.prototype.slice.call(arguments)
  console.log(`zhangsan,${args}开始直播了`);
}


// newobj.listen('uzi', xiaoming)
newobj.listen('uzi',xiaoming)
newobj.listen('uzi',zhangsan)


newobj.trigger('uzi','乌兹')
newobj.remove('uzi',xiaoming)
newobj.trigger('uzi','乌兹')



// newobj.remove('uzi',xiaoming)











