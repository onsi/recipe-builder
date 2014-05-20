var Actions = Backbone.Collection.extend({
    model: Action,
    toJSON: function() {
        return this.map(function(action) {
            return action.wrappedRepresentation()
        })
    }
})