import express from 'express';
import * as userHistory from '##/src/controller/userHistory.controller.js';
const userHistoryRoute = express.Router();

userHistoryRoute.route('/getuserhistory/:userId').get(userHistory.getUserHistory);

export default userHistoryRoute;