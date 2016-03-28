FlowRouter.route('/',{
  name:"home",
  action:function(){
    BlazeLayout.render("home")
  }
});
FlowRouter.route('/posts/:postId', {
  name: "postItem",
  action: function() {
    BlazeLayout.render("postItem");
  }
});
