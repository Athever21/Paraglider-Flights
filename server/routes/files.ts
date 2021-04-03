import { Router } from "express";

import { fromLink } from "../services/files";

const router = Router();

router.post("/from-link", fromLink);

export default router;
