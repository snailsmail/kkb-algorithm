// 栈数据结构特点: 后进先出(last in first out)
function Stack () {
    // 用数组的存储方式实现
    var items = []

    // push方法向栈里压入一个元素
    this.push = function (item) {
        items.push(item)
    }

    // pop方法把栈顶的元素弹出
    this.pop = function () {
        return items.pop()
    }

    // top方法返回栈顶元素
    this.top = function () {
        return items[items.length - 1]
    }

    // isEmpty方法返回栈是否为空
    this.isEmpty = function () {
        return items.length === 0
    }

    // size方法返回栈的大小
    this.size = function() {
        return items.length 
    }

    // clear方法清空栈
    this.clear = function() {
        items = []
    }
}

exports.Stack = Stack