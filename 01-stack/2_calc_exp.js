const myStack = require('./myStack')

// 后缀表达式运算
function cals_exp(arr) {
    var stack = new myStack.Stack()

    for(var i = 0; i < arr.length; i ++) {
        var item = arr[i]
        if (['+', '-', '*', '/'].indexOf(item) !== -1) {
            var value_1 = stack.pop()
            var value_2 = stack.pop()
            var exp_str = value_2 + item +  value_1
            var res = parseInt(eval(exp_str))
            // 讲计算结果入栈
            stack.push(res.toString())
        } else {
            stack.push(item)
        }
    }
    return stack.pop()
}

console.log(cals_exp(['4', '15', '3', '/', '+']));

console.log(cals_exp(['1', '4', '5', '+', '3', '+', '4',
'/', '+', '3', '-', '6', '8', '+', '3', '*', '+']));

// 后缀表达式:['4', '15', '3', '/', '+']
// 中缀表达式:4 + 15 / 3