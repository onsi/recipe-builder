var EnvironmentVariablesView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "add", this.addEnv)
    this.listenTo(this.collection, "remove", this.removeEnv)
    this.listenTo(this.collection, "reset", this.resetEnv)
    this.subviews = {}
  },

  tagName: "ul",
  className: "list-unstyled",

  deleteEnv: function(model) {
    this.collection.remove(model)
  },

  addEnv: function(model) {
    view = new EnvironmentVariableView({
      model: model,
      delegate: this
    })
    this.$el.append(view.$el)
    view.render()
    this.subviews[model.cid] = view
  },

  removeEnv: function(model) {
    var view = this.subviews[model.cid]
    view.remove()
    delete this.subviews[model.cid]
  },

  resetEnv: function(models) {
    this.$el.empty()
    _(models).each(function(model) {
      this.add(model)
    }, this)
  },
})

var EnvironmentVariableView = Backbone.View.extend({
  initialize: function(args) {
    this.delegate = args.delegate
    this.listenTo(this.model, "change", this.render)
  },

  tagName: "li",
  className: "environment-variable",
  events: {
    "change": "updateModel",
    "click button.delete": "delete"
  },

  render: function() {
    html = '<input type="text" class="form-control env left" name="key" placeholder="KEY"></input>'
    html += '<input type="text" class="form-control env" name="value" placeholder="VALUE"></input>'
    html += '<button type="button" class="btn btn-link btn-sm delete"><span class="glyphicon glyphicon-trash"></span></button>'

    this.$el.html(html);

    this.$('[name="key"]').val(this.model.get("key"))
    this.$('[name="value"]').val(this.model.get("value"))
    return this;
  },

  delete: function() {
    this.delegate.deleteEnv(this.model)
  },

  updateModel: function() {
    this.model.set({
        key: this.$('[name="key"]').val(),
        value: this.$('[name="value"]').val(),
    }, {silent: true})
  },
})
