angular.module("home")
    .factory("PollingService", ["$http", function(http) {
        var defaultPollingTime = 10000;
        var polls = [];
        return {
            startPolling: function(pollingName, pollingUrl, pollingTime, callback) {
                if (!polls[pollingName]) {
                    var poller = function() {
                        return http.get(pollingUrl).then(function(response) {
                            callback(response);
                        });
                    };
                    poller();
                    polls[pollingName] = setInterval(poller, pollingTime || defaultPollingTime);
                }
            },
            stopPolling: function(pollingName) {
                clearInterval(polls[pollingName]);
                delete polls[pollingName];
            }
        };
    }]);