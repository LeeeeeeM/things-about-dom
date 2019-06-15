import SEventTarget from './EventTarget'
class SNode extends SEventTarget {
  constructor (type) {
    super()
    this.type = type
    this.children = []
    this.parent = null
  }
  appendChild (node) {
    const index = this.children.indexOf(node)
    if (index !== -1) return
    node.parent = this
    this.children.push(node)
  }

  removeChild (node) {
    const index = this.children.indexOf(node)
    if (index === -1) return
    this.children.splice(index, 1)
    node.parent = null
  }

  insertBefore (base, node) {
    const index = this.children.indexOf(base)
    this.children.splice(index, 0, node)
    node.parent = this
  }

  toJSON () {
    return {
      ...this,
      parent: this.parent && this.parent.type,
      children: this.children.map(item => item.type)
    }
  }
}

class SDom extends SNode {
  constructor (...args) {
    super(...args)
    this.type = 'dom'
  }
  createElement (type) {
    const node = new SNode(type)
    node._root = this
    return node
  }
  createEvent (type) {
    return new SEvent(type)
  }
}

class SEvent {
  constructor (type, options) {
    this.type = type
    this.initEvent(options)
  }
  initEvent (options) {
    this.bubbles = options.bubbles || false
    this.cancelable = options.cancelable || false
  }
  toJSON () {
    return {
      type: this.type
    }
  }
}

export {
  SEvent,
  SDom,
  SNode
}
