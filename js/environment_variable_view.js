var EnvironmentVariablesView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "add", this.addEnv)
    this.listenTo(this.collection, "remove", this.removeEnv)
    this.listenTo(this.collection, "reset", this.resetEnv)
    this.subviews = {}

    this.$el.html('<div class="button add">Add</div>')
  },

  tagName: "ul",
  className: "environment-variables",
  events: {
    "click .button.add": "add"
  },

  add: function() {
    env = new EnvironmentVariable()
    this.collection.push(env)
  },

  addEnv: function(model) {
    view = new EnvironmentVariableView({
      model: model,
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
  initialize: function() {
    this.listenTo(this.model, "change", this.render)
  },

  tagName: "li",
  className: "environment-variable",
  events: {
    "change": "updateModel",
  },

  render: function() {
    html = '<label for="key">Key</label><input type="text" name="key"></input>'
    html += '<label for="value">Value</label><input type="text" name="value"></input>'

    this.$el.html(html);

    this.$('[name="key"]').val(this.model.get("key"))
    this.$('[name="value"]').val(this.model.get("value"))
    return this;
  },

  updateModel: function() {
    this.model.set({
        key: this.$('[name="key"]').val(),
        value: this.$('[name="value"]').val(),
    }, {silent: true})
  },
})
