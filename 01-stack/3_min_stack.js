const MyStack = require('./myStack')

function MinStack() {
    var data_stack = new MyStack.Stack() // 存储压栈的所有数据
    var min_stack = new MyStack.Stack() // 记录每次压栈时最小的元素,保证每次压栈都是最小的data_stack中最小的元素

    this.push = function (item) {
        debugger
        data_stack.push(item)

        // 最小栈为空或压栈数据小于最小栈的栈顶元素,则将压栈数据压到最小栈中
        if (min_stack.isEmpty() || item < min_stack.top()) {
            min_stack.push(item)
        } else {
            // 若压栈数据大于最小栈的栈顶元素,则再将最小栈的本身栈顶元素再压一遍
            // 保证data_stack栈的个数要和min_stack栈的保持一致
            min_stack.push(min_stack.top())
        }
    }

    this.pop = function () {
        // data_stack栈的个数要和min_stack栈的保持一致,所以要一起pop
        data_stack.pop()
        min_stack.pop()
    }

    this.min = function() {
        return min_stack.pop()
    }

}

var minStack = new MinStack()

minStack.push(3)
minStack.push(5)
minStack.push(8)
console.log(minStack.min())
minStack.push(2)
minStack.push(5)
console.log(minStack.min())
minStack.pop()
console.log(minStack.min())