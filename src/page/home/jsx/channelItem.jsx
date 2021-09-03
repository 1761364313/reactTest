import React, { useEffect } from 'react'

export default function cir(props) {
  const { id, channel, value, color, pro } = props
  const drawImg = (val = 90) => {
    const e = document.getElementById(id)
    console.dir(e)
    const ctx = e.getContext('2d')
    const x = e.width / 2
    const y = x
    const Atio = (Math.PI / 180) * 360 / 100
    const deg = Math.PI / 180
    const lineWidth  = 18
    let speed = 0
    // 背景环
    const drawBgline = () => {
      ctx.save()
      ctx.beginPath()
      ctx.lineWidth = lineWidth
      ctx.lineCap = 'round'
      const R = x - ctx.lineWidth
      ctx.strokeStyle = '#eee'
      ctx.arc(x, y, R, 0, deg * 360)
      ctx.stroke()
      ctx.closePath()
      ctx.restore()
    }
    drawBgline()
    // 进度环
    const drawRoundLine = (n) => {
      ctx.save()
      ctx.beginPath()
      ctx.lineWidth = lineWidth
      ctx.lineCap = 'round'
      const R = x - ctx.lineWidth
      ctx.strokeStyle = color
      ctx.arc(x, y, R, -90 * deg, Atio * n - 90 * deg)
      ctx.stroke()
      ctx.closePath()
      ctx.restore()
    }

    // 文案
    const drawFont = (n) => {
      ctx.fillStyle = '#555' // 颜色
      ctx.textAlign = 'center' // 位置
      ctx.font = 'bold 52px PingFangSC-Medium'
      ctx.textBaseline = 'middle'
      ctx.fillText(`${n}%`, x, y - 32)
      ctx.fillStyle = color // 颜色
      ctx.font = 'bold 32px PingFangSC-Medium'
      ctx.fillText(channel, x, y + 20)
      ctx.fillStyle = '#555' // 颜色
      ctx.font = 'bold 28px PingFangSC-Medium'
      ctx.fillText(value, x, y + 66)
    }
    let stop = null
    !(function draw() {
      stop = window.requestAnimationFrame(draw)
      ctx.clearRect(0, 0, e.width, e.height)
      drawBgline()
      drawRoundLine(speed)
      drawFont(speed)
      if (speed >= val) {
        window.cancelAnimationFrame(stop)
        return
      }
      speed += 1
    }())
  }
  useEffect(() => {
    const e = document.getElementById(id)
    e.height = e.width
    drawImg(pro)
  }, [])
  return (
    <div
      style={{
        flex: 1
      }}
    >
      <canvas id={id} style={{ width: '100%' }} />
    </div>
  )
}
