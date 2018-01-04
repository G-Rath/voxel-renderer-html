require.config(
	paths:
		'jquery': 'lib/jquery-2.1.1.min'
		'three': 'lib/three.r68.min'
		'pixi': 'lib/pixi-v3.0.11'
	shim :
		'three': { exports: 'THREE' }
)

require ["jquery", "demo/Demo"], ($, Demo) ->

	$(document).ready ->
	app = new Demo()

	# for debugging
	window.app = app
