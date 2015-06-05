$(function() {
 
    Parse.$ = jQuery;
 
  	Parse.initialize("SfzcjIxCxeNmXxhxZeMFWwToy9O5gDpm6DeD4dEa", "sjxy2Ws36g8BhjTv6FUJ2Bvcmgjq5I23TYhieOQN");

   var Blog = Parse.Object.extend("Blog"),
		Blogs = Parse.Collection.extend({
			model: Blog
		}),
		BlogsView = Parse.View.extend({
			template: Handlebars.compile($('#blogs-tpl').html()),
			render: function() { 
				var collection = { blog: this.collection.toJSON() };
				this.$el.html(this.template(collection));
			}
		});
		blogs = new Blogs();

		blogs.fetch({
			success: function(blogs) {
				var blogsView = new BlogsView({ collection: blogs });
				blogsView.render();
				$('.main-container').html(blogsView.el);
			},
			error: function(blogs, error) {
				console.log(error);
			}
		});

});