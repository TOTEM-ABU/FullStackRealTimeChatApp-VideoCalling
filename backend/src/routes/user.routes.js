import express from "express";
import {
  acceptFriendRequest,
  getMyFriends,
  getRecommendedUsers,
  sendFriendRequest,
} from "../controllers/user.controller.js";

import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);

router.post("/friend-request/:id", sendFriendRequest);
router.post("/friend-request/:id/accept", acceptFriendRequest);

export default router;
