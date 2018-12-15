/*
  A sample jQuery plug-in: this one converts the selected elements into a 3D
  "sliding" control.

  This plugin's options object can include:

    change: function () { }
    - Callback for whenever the control has been manipulated.
*/
(($) => {
  $.fn.slide = function (options) {
    const $this = this

    let $current = null
    let $sliderBar = $this.parent()
    let anchorX = 0

    $this.addClass('slide').mousedown(function (event) {
      $current = $(this)
      anchorX = event.clientX + $sliderBar.offset().left - $current.offset().left
    })

    // Other mouse events go at the level of the document because
    // they might leave the element's bounding box.
    $(document).mousemove(event => {
      if ($current) {
        const x = event.clientX - anchorX
        const newX = x < 0 ? 0 : x > 285 ? 285 : x
        const sliderBarWidth = $sliderBar.width() - $current.width()
        const percentage = Math.round(100 * 100 * newX / sliderBarWidth) / 100
        const newCss = 'translateX(' + newX + 'px)'
        
        $current.css({
          'transform': newCss
        }).data({
          'percentage': percentage,
          'currentX': newX
        })

        // Invoke the callback. We want jQuery-like behavior that binds `this` to the component
        // that change, so we use `call` instead of plain parentheses.
        if ($.isPlainObject(options) && $.isFunction(options.change)) {
          options.change.call($current, percentage, newX)
        }
      }
    }).mouseup(() => {
      $current = null
    })

    return $this
  }
})(jQuery)