var RecipeListView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "add", this.addAction)
    this.listenTo(this.collection, "remove", this.removeAction)
    this.listenTo(this.collection, "reset", this.resetActions)
    this.actionView = {}
  },

  addAction: function(action) {
    if (action.type == DownloadActionType) {
      view = new DownloadActionView({
        model: action
      })
    } else if (action.type == RunActionType) {
      view = new RunActionView({
        model:action
      })
    } else if (action.type == UploadActionType) {
      view = new UploadActionView({
        model:action
      })
      console.log("UPLOAD")
    }
    this.$el.append(view.$el)
    view.render()
    this.actionView[action.cid] = view
  },

  removeAction: function(action) {
    var view = this.actionView[action.cid]
    view.remove()
    delete this.actionView[action.cid]
  },

  resetActions: function(actions) {
    this.$el.empty()
    _(actions).each(function(action) {
      this.add(action)
    }, this)
  },
})