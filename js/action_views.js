var DownloadActionView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "change", this.render)
  },

  className: "download-action-view",
  events: {
    "change": "updateModel",
  },

  render: function() {
    html = "<div>Download</div>"
    html += '<div class="entry" for="from"><label>Download URL</label><input type="text" name="from"></input></div>'
    html += '<div class="entry" for="to"><label>Container Path</label><input type="text" name="to"></input></div>'
    html += '<div class="entry" for="extract"><label>Extract</label><input type="checkbox" name="extract"></input></div>'

    this.$el.html(html);

    this.$('[name="from"]').val(this.model.get("from"))
    this.$('[name="to"]').val(this.model.get("to"))
    this.$('[name="extract"]').prop('checked', this.model.get("extract"))
    return this;
  },

  updateModel: function() {
    this.model.set({
        from: this.$('[name="from"]').val(),
        to: this.$('[name="to"]').val(),
        extract: this.$('[name="extract"]').prop('checked'),
    }, {silent: true})
  },
})

var UploadActionView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "change", this.render)
  },

  className: "upload-action-view",
  events: {
    "change": "updateModel",
  },

  render: function() {
    html = "<div>Upload</div>"
    html += '<div class="entry" for="from"><label>Container Path</label><input type="text" name="from"></input></div>'
    html += '<div class="entry" for="to"><label>Upload URL</label><input type="text" name="to"></input></div>'
    html += '<div class="entry" for="compress"><label>Compress</label><input type="checkbox" name="compress"></input></div>'

    this.$el.html(html);

    this.$('[name="from"]').val(this.model.get("from"))
    this.$('[name="to"]').val(this.model.get("to"))
    this.$('[name="compress"]').prop('checked', this.model.get("compress"))
    return this;
  },

  updateModel: function() {
    this.model.set({
        from: this.$('[name="from"]').val(),
        to: this.$('[name="to"]').val(),
        compress: this.$('[name="compress"]').prop('checked'),
    }, {silent: true})
  },
})

var RunActionView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "change", this.render)
  },

  className: "upload-action-view",
  events: {
    "change": "updateModel",
  },

  initialize: function() {
    html = "<div>Upload</div>"
    html += '<div class="entry" for="script"><label>Script</label><br><textarea name="script"></textarea></div>'

    this.$el.html(html);
    this.envVariablesView = new EnvironmentVariablesView({collection: this.model.envs})
    this.$el.append(this.envVariablesView.$el)
  },

  render: function() {
    this.$('[name="script"]').val(this.model.get("script"))
    return this;
  },

  updateModel: function() {
    this.model.set({
        script: this.$('[name="script"]').val(),
    }, {silent: true})
  },
})