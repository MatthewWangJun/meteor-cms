Meteor.publish('postsList',function(){
  return Posts.find({},{field:{body: 0}});
})
