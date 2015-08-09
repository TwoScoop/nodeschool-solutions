function checkUsers(allGoodUsers) {
	return function(allTestUsers) {
		return allTestUsers.every(function(oneTestUser){
			return allGoodUsers.some(function(oneGoodUser) {
				return oneTestUser.id === oneGoodUser.id;
			});
		});
	}
}

module.exports = checkUsers