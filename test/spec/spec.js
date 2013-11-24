describe('Templit', function () {
	var users = [
		{
			'website': 'http://pazguille.me',
			'username': 'pazguille1',
			'user':{
				'fullname': 'Guillermo Paz',
				'pic': 'https://fbcdn-sphotos-a.akamaihd.net/hphotos-ak-ash3/555190_2583982778799_977490121_n.jpg'
			}
		}
		,
		{
			'website': 'http://pazguille.me',
			'username': 'pazguille2',
			'user':{
				'fullname': 'Guillermo Paz',
				'pic': 'https://fbcdn-sphotos-a.akamaihd.net/hphotos-ak-ash3/555190_2583982778799_977490121_n.jpg'
			}
		}
	];

	beforeEach(function() {
		templit = new Templit();
	});

	describe('Instance', function() {
		it('Should return an instance of Templit', function () {
			expect(templit).toBeDefined();
			expect(typeof templit).toEqual("object");
			expect(templit instanceof Templit).toBeTruthy();
		});
	});
});