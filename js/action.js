var DownloadActionType = "download"
var RunActionType = "run"
var UploadActionType = "upload"

var Action = Backbone.Model.extend({
    wrappedRepresentation: function() {
        return {
            action: this.type,
            args: JSON.stringify(this.toJSON())
        }
    },
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
    return action
}

function NewRunAction() {
    action = new Action
    action.type = RunActionType
    action.set({
        script: "",
        env: "",
    })
    return action
}