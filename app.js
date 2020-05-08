animteHover()

function animteHover() {
	const $img = $('.img')

	$img.mousemove(function(e) {
		const xPos = $(this).data('xPos')
		const yPos = $(this).data('yPos')
		const mouseX = e.pageX
		const mouseY = e.pageY
		const left = mouseX - xPos
		const top = mouseY - yPos
		const origin = 'center center -300'
		const xPerc = (left - $(this).data('itemWidth') / 2) / $(this).data('itemWidth') * 200
		const yPerc = (top - $(this).data('itemHeight') / 2) / $(this).data('itemHeight') * 200

		TweenMax.to($(this).data('imgOuter'), 3, {
			rotationX: 0.1 * yPerc,
			rotationY: -0.1 * xPerc,
			transformOrigin: origin,
			ease: Expo.easeOut
		})
	})

	$img.each(function() {
		$(this).data('xPos', $(this).offset().left)
		$(this).data('yPos', $(this).offset().top)
		$(this).data('itemWidth', $(this).width())
		$(this).data('itemHeight', $(this).height())
		$(this).data('imgOuter', $(this).find('.img-inner'))
	})

	$img.on('mouseleave', function() {
		TweenMax.to($(this).data('imgOuter'), 3, {
			rotationX: 0,
			rotationY: 0,
			transformOrigin: origin,
			ease: Expo.easeOut
		})
	})
}
