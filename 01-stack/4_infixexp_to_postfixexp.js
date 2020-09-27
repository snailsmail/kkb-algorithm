const MyStack = require('./myStack')

// 算法优先级
var priority_map = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2
}
/**
 * 定义数组postfixexp,用于存储后缀表达式,遍历中缀表达式,对每一个遍历到的元素做到如下处理:
 * 1.如果是数字,直接放入到postfixexp数组中
 * 2.遇到左括号入栈
 * 3.遇到右括号,把栈顶元素弹出并放到postfixexp数组中,直到遇到左括号,最后弹出左括号
 * 4.遇到运算符,把栈顶的运算符弹出,直到栈顶的运算符优先级小于当前运算符,把弹出的运算符加入postfixexp中,当前的元素符入栈
 * 5.for循环结束后,栈中可能还有元素,都弹出放入postfixexp数组中
*/
function infixExp_to_postfixexp (exp) {
    var stack = new MyStack.Stack()
    var postfixexp = []

    for(var i = 0; i < exp.length; i++) {
        var item = exp[i]

        if (!isNaN(item)) {
            postfixexp.push(item)
        } else if (item === '(') {
            stack.push(item)
        } else if (item === ')') {
            while(stack.top() !== '(') {
                postfixexp.push(stack.pop())
            }
            stack.pop()
        } else {
            while(
                !stack.isEmpty() 
                && ['+', '-', '*', '/'].indexOf(stack.top()) !== -1 
                && priority_map[stack.top()] >= priority_map[item]
            ){
                postfixexp.push(stack.pop())
            }
            stack.push(item)
        }
    }

    // 循环结束后,stack中可能还有元素,要全部拿出加到postfixexp中
    while (!stack.isEmpty()) {
        postfixexp.push(stack.pop())
    }

    return postfixexp;
}

console.log(infixExp_to_postfixexp(["12","+", "3"]));
console.log(infixExp_to_postfixexp(['(', '1', '+', '(', '4', '+', '5', '+', '3',
')', '/', '4', '-', '3', ')', '+', '(', '6', '+', '8', ')', '*', '3']));