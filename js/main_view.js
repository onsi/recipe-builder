var MainView = Backbone.View.extend({
  events: {
    "click .button.download": "addDownloadAction",
    "click .button.run": "addRunAction",
    "click .button.upload": "addUploadAction",
    "click .json": "toJSON"
  },

  initialize: function() {
    this.actions = new Actions()
    this.recipeList = new RecipeListView({
        el: this.$(".recipe-list"),
        collection: this.actions,
    })
  },

  toJSON: function() {
    console.log(JSON.stringify(this.actions.toJSON()))
  },

  addDownloadAction: function() {
    this.actions.push(NewDownloadAction())
  },

  addRunAction: function() {
    this.actions.push(NewRunAction())
  },

  addUploadAction: function() {
    this.actions.push(NewUploadAction())
  },
})