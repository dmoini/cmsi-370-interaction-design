describe('Slider jQuery plugin', () => {
  const options = {
    change: () => {
    // No-op; Jasmine spy will check on whether this got called.
    }
  }
    
  beforeEach(() => {
    fixture.setBase('test')
    fixture.load('jquery.slider.fixture.html')
  })
    
  afterEach(() => fixture.cleanup())
    
  it('should return itself when the plugin is installed', () => {
    const $target = $('.slider-test')
    const $pluginResult = $target.slide(options)
    
    expect($pluginResult).toBe($target)
  })

  let transformUpdateTest = () => {
    // When synthesizing events, we need only explicitly set the values that the plugin code will
    // actually use.
    const mousedown = $.Event('mousedown', { clientX: 0 })
    $('.slider-test').trigger(mousedown)

    
    let mousemove = $.Event('mousemove', { clientX: 10 })
    $('.slider-test').trigger(mousemove)
    
    // We check against the style attribute because the CSS property will be the generalized 'converted'
    // value of the transform, which is too unwieldy to express manually.
    //
    // CSS also automatically adds the semicolons.
    expect($('.slider-test').attr('style')).toBe('width: 15px; transform: translateX(10px);')
    
    mousemove = $.Event('mousemove', { clientX: 30 })
    $('.slider-test').trigger(mousemove)
    expect($('.slider-test').attr('style')).toBe('width: 15px; transform: translateX(30px);')

    mousemove = $.Event('mousemove', { clientX: 300 })
    $('.slider-test').trigger(mousemove)
    expect($('.slider-test').attr('style')).toBe('width: 15px; transform: translateX(285px);')
    
    $('.slider-test').trigger($.Event('mouseup'))
  }
    
  let sliderPercentageUpdateTest = () => {
    const mousedown = $.Event('mousedown', { clientX: 0 })
    $('.slider-test').trigger(mousedown)
    
    // let mousemove = $.Event('mousemove', { clientX: 0 })
    // $('.slider-test').trigger(mousemove)
    // // $('.slider-test').trigger(mousemove)
    // expect($('.slider-test').data('percentage')).toBe(0)
    
    let mousemove = $.Event('mousemove', { clientX: 10 })
    $('.slider-test').trigger(mousemove)
    expect($('.slider-test').data('percentage')).toBe(3.51)

    mousemove = $.Event('mousemove', { clientX: 40 })
    $('.slider-test').trigger(mousemove)
    expect($('.slider-test').data('percentage')).toBe(14.04)

    mousemove = $.Event('mousemove', { clientX: 90 })
    $('.slider-test').trigger(mousemove)
    expect($('.slider-test').data('percentage')).toBe(31.58)

    mousemove = $.Event('mousemove', { clientX: 285 })
    $('.slider-test').trigger(mousemove)
    expect($('.slider-test').data('percentage')).toBe(100)
    
    mousemove = $.Event('mousemove', { clientX: 300 })
    $('.slider-test').trigger(mousemove)
    expect($('.slider-test').data('percentage')).toBe(100)

    mousemove = $.Event('mousemove', { clientX: 500 })
    $('.slider-test').trigger(mousemove)
    expect($('.slider-test').data('percentage')).toBe(100)
    
    $('.slider-test').trigger($.Event('mouseup'))
  }
    
  describe('installed behavior with callback', () => {
    beforeEach(() => $('.slider-test').slide(options))
    
    it('should update its CSS transform correctly', transformUpdateTest)
    it('should update the slider percentage correctly', sliderPercentageUpdateTest)
    
    it('should invoke the callback correctly', () => {
      spyOn(options, 'change')
    
      const mousedown = $.Event('mousedown', { clientX: 0 })
      $('.slider-test').trigger(mousedown)
    
      let mousemove = $.Event('mousemove', { clientX: 10 })
      $('.slider-test').trigger(mousemove)
      expect(options.change).toHaveBeenCalledWith(3.51, 10)
    
      mousemove = $.Event('mousemove', { clientX: 30 })
      $('.slider-test').trigger(mousemove)
      expect(options.change).toHaveBeenCalledWith(10.53, 30)

      mousemove = $.Event('mousemove', { clientX: 100 })
      $('.slider-test').trigger(mousemove)
      expect(options.change).toHaveBeenCalledWith(35.09, 100)

      mousemove = $.Event('mousemove', { clientX: 285 })
      $('.slider-test').trigger(mousemove)
      expect(options.change).toHaveBeenCalledWith(100, 285)

      mousemove = $.Event('mousemove', { clientX: 400 })
      $('.slider-test').trigger(mousemove)
      expect(options.change).toHaveBeenCalledWith(100, 285)
    
      $('.slider-test').trigger($.Event('mouseup'))
    })
  })
    
  describe('installed behavior without callback', () => {
    beforeEach(() => $('.slider-test').slide())
    
    it('should update its CSS transform correctly', transformUpdateTest)
    it('should update the slider percentage correctly', sliderPercentageUpdateTest)
  })
})
    