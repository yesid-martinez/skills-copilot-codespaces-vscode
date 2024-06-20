// Create web server
// Create a new comment
// Create a new comment
router.post('/comments', function(req, res) {
    // Get the comment data
    var newComment = req.body;
    // Create a new comment
    Comments.create(newComment, function(err, comment) {
        if (err) {
            // Error
            res.json({error: err});
        } else {
            // Success
            res.json(comment);
        }
    });
});
