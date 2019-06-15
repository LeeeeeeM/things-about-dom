/**
 * W3C的EventTarget
 */

function Equals (obj1, obj2) {
  return obj1.capture === obj2.capture && obj1.once === obj2.once && obj1.passive === obj2.passive
}

async function fireEvent (node, event, userAgent) {
  const fnMap = node._eventTargetListeners[event.type]
  const captureList = (fnMap && fnMap.capture && fnMap.capture.fn) || []
  const captureHash = (fnMap && fnMap.capture && fnMap.capture.hash) || []

  const bubbleList = (fnMap && fnMap.bubble && fnMap.bubble.fn) || []
  const bubbleHash = (fnMap && fnMap.bubble && fnMap.bubble.hash) || []

  let indexCapture = 0
  let indexBubble = 0
  const result = {
    fn: [],
    hash: []
  }
  while (indexCapture < captureList.length && indexBubble < bubbleList.length) {
    if (captureHash[indexCapture]._order >= bubbleHash[indexBubble]._order) {
      result.fn.push(bubbleList[indexBubble])
      result.hash.push(bubbleHash[indexBubble])
      indexBubble++
    } else {
      result.fn.push(captureList[indexCapture])
      result.hash.push(captureHash[indexCapture])
      indexCapture++
    }
  }

  while (indexBubble < bubbleList.length) {
    result.fn.push(bubbleList[indexBubble])
    result.hash.push(bubbleHash[indexBubble])
    indexBubble++
  }

  while (indexCapture < captureList.length) {
    result.fn.push(captureList[indexCapture])
    result.hash.push(captureHash[indexCapture])
    indexCapture++
  }

  for (let i = 0, length = result.fn.length; i < length; i++) {
    if (userAgent) {
      await result.fn[i].call(node, event)
    } else {
      result.fn[i].call(node, event)
    }
  }

  // once就不判断了
}

class SEventTarget {
  constructor () {
    this._eventTargetListeners = {}
    this.order = 0
  }

  addEventListener (evtName, fnListener, options) {
    // 转换为对象
    if (!(options instanceof Object)) {
      options = {
        capture: !!options,
        once: false,
        passive: false,
        _order: this.order++
      }
    } else {
      options = {
        capture: !!options.capture,
        once: !!options.once,
        passive: !!options.passive,
        _order: this.order++
      }
    }

    // 根据PHASE分别保存为对象
    const phase = options.capture ? 'capture' : 'bubble'
    const eventConf = (this._eventTargetListeners[evtName] =
      this._eventTargetListeners[evtName] || {})
    eventConf[phase] = (eventConf[phase] = eventConf[phase] || {
      fn: [],
      hash: []
    })

    const index = eventConf[phase].fn.indexOf(fnListener)
    if (index === -1) {
      // 不存在则添加
      eventConf[phase].fn.push(fnListener)
      eventConf[phase].hash.push(options)
    } else {
      if (!Equals(options, eventConf[phase].hash[index])) {
        eventConf[phase].fn.push(fnListener)
        eventConf[phase].hash.push(options)
      }
    }
    // 发送给底层
  }

  removeEventListener (evtName, fnListener, options) {
    // 转换为对象
    if (!(options instanceof Object)) {
      options = {
        capture: !!options,
        once: false,
        passive: false
      }
    } else {
      options = {
        capture: !!options.capture,
        once: !!options.once,
        passive: !!options.passive
      }
    }

    // 根据PHASE分别保存为对象
    const phase = options.capture ? 'capture' : 'bubble'
    const eventConf = (this._eventTargetListeners[evtName] =
      this._eventTargetListeners[evtName] || {})
    eventConf[phase] = (eventConf[phase] = eventConf[phase] || {
      fn: [],
      hash: []
    })

    const index = eventConf[phase].fn.indexOf(fnListener)
    if (index === -1) {
      // do sth
    } else {
      if (Equals(options, eventConf[phase].hash[index])) {
        eventConf[phase].fn.splice(index, 1)
        eventConf[phase].hash.splice(index, 1)
      }
    }
    // 清除
    if (eventConf[phase].fn.length === 0) {
      eventConf[phase] = null
    }
  }

  async dispatchEvent (evt, userAgent = false) {
    evt.target = this

    let currentNode = this

    const parentList = []

    while (currentNode && currentNode.parent) {
      parentList.push(currentNode.parent)
      currentNode = currentNode.parent
    }

    let nodeList = parentList.slice().reverse()

    const thisIndex = nodeList.length

    nodeList.push(this)
    nodeList = nodeList.concat(parentList)

    let index = 0

    while (nodeList.length) {
      let currentPhase
      currentNode = nodeList.shift()
      evt.currentTarget = currentNode
      if (index < thisIndex) {
        currentPhase = evt.phase = 'capture'
      } else if (index > thisIndex) {
        currentPhase = evt.phase = 'bubble'
        if (!evt.bubbles) break
      } else {
        currentPhase = evt.phase = 'target'
        if (userAgent) {
          await fireEvent(this, evt, userAgent)
        } else {
          fireEvent(this, evt, userAgent)
        }
        index++
        continue
      }

      const fnMap = currentNode._eventTargetListeners[evt.type]
      const fns = fnMap[currentPhase].fn || []
      for (let i = 0, length = fns.length; i < length; i++) {
        if (userAgent) {
          await fns[i].call(currentNode, evt)
        } else {
          fns[i].call(currentNode, evt)
        }
      }

      index++
    }
    if (userAgent) {
      evt.currentTarget = await null
    } else {
      evt.currentTarget = null
    }
  }
}
