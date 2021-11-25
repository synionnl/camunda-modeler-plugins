class Plugin {
    constructor(propertiesProvider) {        
        
        propertiesProvider.getTabs = function (element) {
            return [];
        };
    }
}

Plugin.$inject = [ "propertiesProvider" ];

export default {
    __init__: [ "taskMetatDescriptionPlugin" ],
    taskMetatDescriptionPlugin: ["type", Plugin]
};