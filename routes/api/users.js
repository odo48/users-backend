const express = require("express");
const router = express.Router();
const external_services = require("../../services/externalDataService");

// Get all users
router.get("/", (req, res) => {
  external_services
    .getUsersFromExternalSource()
    .then((response) => {
      if (!response) {
        res.sendStatus(404);
      }
      res.send(response);
    })
    .catch(() => res.sendStatus(404));
});

// Get all info and comments for one user by id
router.get("/:id/details", async (req, res) => {
  let userDetails = {
    info: {},
    posts: [],
  };

  const userInfoPromise = external_services
    .getUserFromExternalSource(req.params.id)
    .then((response) => {
      if (!response) {
        res.sendStatus(404);
      }
      return response;
    })
    .catch(() => {
      return false;
    });

  const postsPromise = external_services
    .getUserPostsFromExternalSource(req.params.id)
    .then((response) => {
      if (!response) {
        res.sendStatus(404);
      }
      return response;
    })
    .catch(() => {
      return false;
    });

  Promise.all([userInfoPromise, postsPromise]).then((results) => {
    const validResults = results.filter((result) => !(result instanceof Error));

    if (validResults.length > 1) {
      userDetails = {
        info: results[0],
        posts: results[1],
      };
      res.send(userDetails);
    } else {
      res.sendStatus(404);
    }
  });
});

module.exports = router;
