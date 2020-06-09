
Page({
  data: {
    top: '111+',
    bottom: '222'
  },
  onShareAppMessage: function () {

  },
  btnClick(e) {
    const symbol = e.target.dataset.symbol
    let bottom = this.data.bottom
    let top = this.data.top
    switch(symbol) {
      case "--":        
        if(bottom === '0') {         
          top = top.split('')
          top.pop()
          top = top.join('')
        }
        else {
          bottom = bottom.split('')
          bottom.pop()
          bottom = bottom.join("")
          if(!bottom) bottom = '0'
        }
        this.setData({
          bottom,
          top
        })
        break;

      case "C":
        this.setData({
          top: '',
          bottom: '0'
        })
        break;

      case "left":
        top += "("
        this.setData({
          top,
          bottom: '0'
        })
        break;

      case 'right':
        top = top + bottom +  ")"
        this.setData({
          top,
          bottom: '0'
        })
        break;

      case '%':
        if(bottom === '0') bottom = ''
        top = top + bottom + '%'
        this.setData({
          top,
          bottom: '0'
        })
        break;

      case '+':
        if(bottom === '0') bottom = ''
        top = top + bottom + '+'
        this.setData({
          top,
          bottom: '0'
        })
        break;
      
      case '-':
        if(bottom === '0') bottom = ''
        top = top + bottom + '-'
        this.setData({
          top,
          bottom: '0'
        })
        break;
        
      case '*':
        if(bottom === '0') bottom = ''
        top = top + bottom + '*'
        this.setData({
          top,
          bottom: '0'
        })
        break;

      case '/':
        if(bottom === '0') bottom = ''
        top = top + bottom + '/'
        this.setData({
          top,
          bottom: '0'
        })
        break;
      
      case 'x²':
        if(bottom === '0') bottom = ''
        top = top + bottom + '²'
        this.setData({
          top,
          bottom: '0'
        })
        break;  

      case '^':
        if(bottom === '0') bottom = ''
        top = top + bottom + '^'
        this.setData({
          top,
          bottom: '0'
        })
        break; 
    }
    if(symbol in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']) {
      if(bottom === '0' && bottom !== '.') {
        bottom = symbol
      }
      else {
        bottom += symbol
      }  
      this.setData({
        bottom
      })
    }
    else if(symbol === 'π') {
      top += 'π'
      bottom = '0'
      this.setData({
        top,
        bottom
      })
    }
    else if(symbol === '=') {
      top += bottom
      //进行计算整个式子，并返回给top
    }
    
  }
})

