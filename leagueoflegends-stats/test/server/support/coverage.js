/**
 * Created by harshavardhan on 15-02-18.
 */
var path = require('path')
var blanket = require('blanket')

blanket({
	pattern: [
		path.resolve(__dirname, '../../../controllers')
	]
})