module.exports = {
    checkLogin(req, res, next) {
        if (!req.session.user) {
            return res.send({
	            result:'false',
	            data:{errMsg:'用户未登录'},
	            errCode:1001
            });
        }
        next();
    }
};