var DownloadActionView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "change", this.render)
  },

  tagName: "form",
  className: "form-horizontal",
  events: {
    "change": "updateModel",
  },

  render: function() {
    html = '<div class="form-group"><h4 class="text-primary"><span class="glyphicon glyphicon-download"></span> Download</h4></div>'
    html += '<div class="form-group">'
    html += '<label for="from" class="col-sm-2 control-label text-right">Download URL</label>'
    html += '<div class="col-sm-10"><input type="text" class="form-control" name="from" placeholder="http://example.com/download"></input></div>'
    html += '</div>'
    html += '<div class="form-group">'
    html += '<label for="to" class="col-sm-2 control-label text-right">Container Path</label>'
    html += '<div class="col-sm-10"><input type="text" class="form-control" name="to" placeholder="/some/path"></input></div>'
    html += '</div>'
    html += '<div class="form-group"><div class="col-sm-offset-2 col-sm-10"><div class="checkbox">'
    html += '<label><input type="checkbox" name="extract"> Extract</label>'
    html += '</div></div></div>'

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

  tagName: "form",
  className: "form-horizontal",
  events: {
    "change": "updateModel",
  },

  render: function() {
    html = '<div class="form-group"><h4 class="text-primary"><span class="glyphicon glyphicon-upload"></span> Upload</h4></div>'
    html += '<div class="form-group">'
    html += '<label for="from" class="col-sm-2 control-label text-right">Container Path</label>'
    html += '<div class="col-sm-10"><input type="text" class="form-control" name="from" placeholder="/some/path"></input></div>'
    html += '</div>'
    html += '<div class="form-group">'
    html += '<label for="to" class="col-sm-2 control-label text-right">Upload URL</label>'
    html += '<div class="col-sm-10"><input type="text" class="form-control" name="to" placeholder="http://example.com/upload"></input></div>'
    html += '</div>'
    html += '<div class="form-group"><div class="col-sm-offset-2 col-sm-10"><div class="checkbox">'
    html += '<label><input type="checkbox" name="compress"> Compress</label>'
    html += '</div></div></div>'

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

  tagName: "form",
  className: "form-horizontal",
  events: {
    "change": "updateModel",
      "click button.add-env": "addEnv"
  },

  initialize: function() {
    html = '<div class="form-group"><h4 class="text-primary"><span class="glyphicon glyphicon-play-circle"></span> Run</h4></div>'
    html += '<div class="form-group">'
    html += '<label for="script" class="col-sm-2 control-label text-right">Script</label>'
    html += '<div class="col-sm-10"><textarea class="form-control" name="script" placeholder="#!/bin/bash"></textarea></div>'
    html += '</div>'
    html += '<div class="form-group">'
    html += '<label class="col-sm-2 control-label text-right">Environment</label>'
    html += '<div class="col-sm-10"><button type=button class="btn btn-default btn-sm add-env"><span class="glyphicon glyphicon-plus"></span> Add</button></div>'
    html += '</div>'
    console.log(html)

    this.$el.html(html);
    this.envVariablesView = new EnvironmentVariablesView({collection: this.model.envs})
    this.$el.append(this.envVariablesView.$el)
  },

  addEnv: function() {
      this.model.envs.push(new EnvironmentVariable())
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