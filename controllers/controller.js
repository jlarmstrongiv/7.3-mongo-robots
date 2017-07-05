module.exports = {
  list: (req, res) => {
    context = {};
    const col = req.db.collection('users');

    col.find({}).toArray((error, results) => {
      context.results = results;

      context.pageName = 'Users';
      context.pageTitle = 'Users';

      console.log(context);
      return res.render('users', context);
    });
  },
  detail: (req, res) => {
    console.log(req.params.selectedUser);
    context = {};
    let selectedUser = req.params.selectedUser;

    const col = req.db.collection('users');
    col.findOne({username: selectedUser}, (error, results) => {
      context.results = results;

      context.pageName = context.results.name;
      context.pageTitle = 'User | ' + context.results.name;

      console.log(context);
      return res.render('user', context);
    });
  },
  redirect: (req, res) => {
    return res.redirect('users');
  }
};
