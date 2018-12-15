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
        const newX = event.clientX - anchorX
        const max = $sliderBar.width() - $current.width()
        const percentage = (100 * ($current.offset().left - $sliderBar.offset().left) / 
                           ($sliderBar.width() - $current.width())).toFixed(2)
        const newCss = newX < 0 ? 'translateX(0)' : newX > max ? 'translateX(' + max + 'px)' : 'translateX(' + newX + 'px)'
        $current.css({
          'transform': newCss
        }).data({
          'sliderX': newX,
          'percentage': percentage
        })

        // Invoke the callback. We want jQuery-like behavior that binds `this` to the component
        // that change, so we use `call` instead of plain parentheses.
        if ($.isPlainObject(options) && $.isFunction(options.change)) {
          options.change.call($current, percentage)
        }
      }
    }).mouseup(() => {
      $current = null
    })

    return $this
  }
})(jQuery)