var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users' });
});

// display
router.get('/display', function(req, res, next) {
    let currentUser = false;
    let title = 'Users'
    let user = 'bob'; // test code
    
    let gameHTML = `<table>
                <tr>
                    <th>Game</th>
                    <th>Cost</th>
                    <th>Personal Playtime</th>
                    <th>Notes</th>
                </tr>
                <tr>
                    <td>Fallout 3</td>
                    <td>$10</td>
                    <td>60 Hours</td>
                    <td>Gary?</td>
                </tr>
            </table>`;
    if (req.query.user === user) {
        currentUser = true;
        title = 'My Games'
        // Test Code
        gameHTML = `<table>
                <tr>
                    <th>Game</th>
                    <th>Cost</th>
                    <th>Personal Playtime</th>
                    <th>Notes</th>
                </tr>
                <tr>
                    <td>Crusader Kings 2</td>
                    <td>$40</td>
                    <td>2000 Hours</td>
                    <td>Deus Vult?</td>
                </tr>
            </table>`;
    }
    res.render('displayUser', 
    { 
        title: title,
        gamesList: gameHTML,
        currentUser: currentUser
    });
});
module.exports = router;
