const express = require("express");
const router = express.Router();
const external_services = require("../../services/externalDataService");

// Get all comments by post id
router.get("/post/:id", (req, res) => {
  external_services
    .getCommentsByPostId(req.params.id)
    .then((response) => {
      if (!response) {
        res.sendStatus(404);
      }
      res.send(response);
    })
    .catch(() => res.sendStatus(404));
});

module.exports = router;
