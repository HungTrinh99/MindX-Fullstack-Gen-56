const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const utils = require("../utils/db-utils")
// const users = [
//   {
//     id: 1,
//     username: "alice",
//     password: "123456",
//   },
//   {
//     id: 2,
//     username: "bob",
//     password: "654321",
//   },
// ];
// // hard-coded 
router.post("/login", async (req, res) => {
	try {
		const { username, password } = req.body;
		if (!username || !password) {
			throw new Error("Missing credentials")
		}
		const users = await utils.get_data_from_db("mindx-area-56", "users", { "username": username })
		if (users.length != 1) {
			throw new Error("Fail to indicate user")
		}
		const user = users[0]
		if (password != user.password) {
			throw new Error("Password for this user is wrong")
		}

		//   Authorization
		const token = jwt.sign(
			{
				username: user.username,
				id: user.id,
			},
			process.env.JWT_SECRET_KEY,
			{ expiresIn: +process.env.ACCESS_TOKEN_EXPRIRE_IN } // second as default
		);
		const refresherToken = "aaaa";
		return res.json({
			username: user.username,
			accessToken: token,
			refresherToken: refresherToken,
		});
	} catch (error) {
		res.json({
			message: error.message
		})
	}

});
router.post("/register", async (req, res) => {
	try {
		const { username, password, fullname } = req.body
		if (!(username && password && fullname)) {
			throw new Error("Missing information")
		}
		const users = await utils.get_data_from_db("mindx-area-56", "users", { "username": username })
		if (users.length >= 1) {
			throw new Error("Username has been taken!")
		}
		const signal = await utils.insert_one_to_db("mindx-area-56", "users", {
			username,
			password,
			fullname
		})
		if (!signal) {
			throw new Error("Fail to create!")
		}
		res.json({ message: "Successfully Created" })

	} catch (error) {
		res.json({
			message: error.message
		})
	}

});

module.exports = router;

// Nha phat hanh
// han su sung
