
$('.spf-product__form-btn-addtocart').attr('disabled', 'disabled').addClass('disabled');
  setTimeout(function() {
    $('.spf-product__form-btn-addtocart').click(function(e) {
      e.preventDefault()
      e.stopPropagation()
      e.stopImmediatePropagation()
      $that = $(this)
      $that_html = $that.html()
      $that.attr('disabled', 'disabled').addClass('disabled');
      $that.html('<div class="spinner" role="progressbar" style="position: absolute; width: 0px; z-index: 2000000000; left: 50%; top: 50%;"><div style="position: absolute; top: -1px; opacity: 0.25; animation: 1s linear 0s infinite normal none running opacity-100-25-0-8;"><div style="position: absolute; width: 4px; height: 2px; background: rgb(254, 250, 238); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center; transform: rotate(0deg) translate(3px, 0px); border-radius: 1px;"></div></div><div style="position: absolute; top: -1px; opacity: 0.25; animation: 1s linear 0s infinite normal none running opacity-100-25-1-8;"><div style="position: absolute; width: 4px; height: 2px; background: rgb(254, 250, 238); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center; transform: rotate(45deg) translate(3px, 0px); border-radius: 1px;"></div></div><div style="position: absolute; top: -1px; opacity: 0.25; animation: 1s linear 0s infinite normal none running opacity-100-25-2-8;"><div style="position: absolute; width: 4px; height: 2px; background: rgb(254, 250, 238); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center; transform: rotate(90deg) translate(3px, 0px); border-radius: 1px;"></div></div><div style="position: absolute; top: -1px; opacity: 0.25; animation: 1s linear 0s infinite normal none running opacity-100-25-3-8;"><div style="position: absolute; width: 4px; height: 2px; background: rgb(254, 250, 238); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center; transform: rotate(135deg) translate(3px, 0px); border-radius: 1px;"></div></div><div style="position: absolute; top: -1px; opacity: 0.25; animation: 1s linear 0s infinite normal none running opacity-100-25-4-8;"><div style="position: absolute; width: 4px; height: 2px; background: rgb(254, 250, 238); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center; transform: rotate(180deg) translate(3px, 0px); border-radius: 1px;"></div></div><div style="position: absolute; top: -1px; opacity: 0.25; animation: 1s linear 0s infinite normal none running opacity-100-25-5-8;"><div style="position: absolute; width: 4px; height: 2px; background: rgb(254, 250, 238); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center; transform: rotate(225deg) translate(3px, 0px); border-radius: 1px;"></div></div><div style="position: absolute; top: -1px; opacity: 0.25; animation: 1s linear 0s infinite normal none running opacity-100-25-6-8;"><div style="position: absolute; width: 4px; height: 2px; background: rgb(254, 250, 238); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center; transform: rotate(270deg) translate(3px, 0px); border-radius: 1px;"></div></div><div style="position: absolute; top: -1px; opacity: 0.25; animation: 1s linear 0s infinite normal none running opacity-100-25-7-8;"><div style="position: absolute; width: 4px; height: 2px; background: rgb(254, 250, 238); box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px; transform-origin: left center; transform: rotate(315deg) translate(3px, 0px); border-radius: 1px;"></div></div></div>')

      var variant_id = $that.parents('form').find('select').val()
      CartJS.addItem(variant_id, 1, properties = {}, options = {
        "success": function(data, textStatus, jqXHR) {
          $('.toggle modal--link .count').text(parseInt($('.header--cart-count .count').text())+1)
          $('.header--cart-count .count').text(parseInt($('.header--cart-count .count').text())+1)
          $('.header--cart-count .count').show()
          $('.toggle modal--link .count').show()
          $that.removeAttr('disabled').removeClass('disabled');
          $that.html('ajouté √')
          setTimeout(function() {
            $that.html($that_html)
            $that.removeAttr('disabled').removeClass('disabled');

          }, 500);
        }
      })

    })
  }, 300);
