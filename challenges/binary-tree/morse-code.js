class Node 
{ 
    constructor(data) 
    { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
}

class BinaryTree 
{ 
    constructor(node) { 
        this.root = node; 
    }

    decode(morse){
        morse = morse.split(' / ') //['... .- --', '... .. .']
        let message = ''
        for(let word of morse){
            let chars = word.split(' ') //['...', '.-', '--']
            let decoded = ''
            for(let char in chars){   // '...'  
                let node = this.root
                for(let symb in chars[char]){ // '.' '.' '.'
                    if(chars[char][symb] === "-") node = node.right
                    else if(chars[char][symb] === '.') node = node.left
                    else console.log('error')
                }
                decoded = decoded + node.data
            }
            message = message + decoded + " "
        }
        return message
    }
}

let head = new Node(null)
head.left = new Node('e')
head.left.left = new Node('i')
head.left.left.left = new Node("s")
head.left.left.left.left = new Node("h")
head.left.left.left.left.left = new Node("5")
head.left.left.left.left.right = new Node("4")
head.left.left.left.right = new Node("v")
head.left.left.left.right.right = new Node("3")
head.left.left.right = new Node("u")
head.left.left.right.left = new Node("f")
head.left.left.right.right = new Node("u")
head.left.left.right.right.right = new Node("2")
head.left.right = new Node('a')
head.left.right.left = new Node("r")
head.left.right.left.left = new Node("l")
head.left.right.left.left.right = new Node("e")
head.left.right.left.right = new Node("a")
head.left.right.right = new Node("w")
head.left.right.right.left = new Node("p")
head.left.right.right.right = new Node("j")
head.left.right.right.right.right = new Node("1")

head.right = new Node('t')
head.right.left = new Node('n')
head.right.left.left = new Node("d")
head.right.left.left.left = new Node("b")
head.right.left.left.left.left = new Node("6")
head.right.left.left.left.right = new Node("=")
head.right.left.left.right = new Node("x")
head.right.left.left.right.left = new Node("/")
head.right.left.right = new Node("k")
head.right.left.right.left = new Node("c")
head.right.left.right.right = new Node("y")

head.right.right = new Node('m')
head.right.right.left = new Node("g")
head.right.right.left.left = new Node("z")
head.right.right.left.left.left = new Node("7")
head.right.right.left.right = new Node("q")
head.right.right.right = new Node("o")
head.right.right.right.left = new Node("o")
head.right.right.right.left.left = new Node("8")
head.right.right.right.right = new Node("ch")
head.right.right.right.right.right = new Node("0")
head.right.right.right.right.left = new Node("9")

let tree = new BinaryTree(head)
console.log(tree.decode('.. / -... ..- .. .-.. - / .- / -- --- .-. ... . / -.-. --- -.. . / -.. . -.-. --- -.. . .-.'))