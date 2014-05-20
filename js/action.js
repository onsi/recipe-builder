var DownloadActionType = "download"
var RunActionType = "run"
var UploadActionType = "upload"

var Actions = Backbone.Collection.extend({
    model: Action,
    toJSON: function() {
        return this.map(function(action) {
            return action.wrappedRepresentation()
        })
    }
})

var Action = Backbone.Model.extend({
    wrappedRepresentation: function() {
        return {
            action: this.type,
            args: JSON.stringify(this.toJSON())
        }
    },

    toJSON: function() {
        json = this.attributes
        if (this.envs) {
            json.envs = this.envs.toJSON()
        }
        return json
    }
})

function NewDownloadAction() {
    action = new Action
    action.type = DownloadActionType
    action.set({
        from: "",
        to: "",
        extract: false
    })
    return action
}

function NewUploadAction() {
    action = new Action
    action.type = UploadActionType
    action.set({
        to: "",
        from: "",
        compress: false
    })
    console.log(action)
    return action
}

function NewRunAction() {
    action = new Action
    action.type = RunActionType
    action.set({
        script: "",
    })
    action.envs = new EnvironmentVariables()
    return action
}