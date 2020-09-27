const myStack = require('./myStack.js')

// 判断字符串中括号是否合法
function is_leagl_brackets(str) {
    var stack = new myStack.Stack()

    for (var i = 0; i < str.length; i++) {
        var item = str[i]
        if (item === '(') {
            // 遇到左括号入栈
            stack.push(item)
        } else if (item === ')') {
            // 遇到右括号判断栈中是否为空
            if (stack.isEmpty()) {
                return false // 为空则不合法,返回false
            } else {
                stack.pop() // 不为空,弹出左括号
            }
        }
    }

    // 如果栈为空,则说明字符串合法
    return stack.isEmpty()
}

console.log(is_leagl_brackets('aaa(sdfgsad(sdfgsadg(sdfgsd)))(ddd'))
console.log(is_leagl_brackets('aaa(sad(ssadg(sdsd)))dd()d()'))
