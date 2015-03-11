/**
 * Created by harshavardhan on 15-02-18.
 */
describe('#fetch', function () {
	beforeEach(function () {
		$httpBackend.expect('GET', '/api/posts')
			.respond([
				{username: 'dickeyxxx', body: 'first post'},
				{username: 'dickeyxxx', body: 'second post'}
			])
	})

	it('gets 2 posts', function () {
		PostsSvc.fetch().success(function (posts) {
			expect(posts).to.have.length(2)
		})
	})
})