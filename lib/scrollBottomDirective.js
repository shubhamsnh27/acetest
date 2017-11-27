angular.module("project")
    .directive("materializeCheckbox", [ "ivhTreeviewMgr", "ivhTreeviewBfs", "$timeout", "$state", "$rootScope", function (ivhTreeviewMgr, ivhTreeviewBfs, timeout, state, rootScope) {
        return {
            restrict: "A",
            require: "^ivhTreeview",
            template: "<input class='filled-in' type='checkbox' id='{{node.id}}' title='Toggle Marking' ng-model='node.marked' ng-disabled='disableMarking' /><label for='{{node.id}}'></label>",
            link: function(scope, element, attrs, ctrl) {
                var node = scope.node,
                    indeterminateAttribute = ctrl.opts().indeterminateAttribute;
                scope.prevNodesState = {};
                scope.disableMarking = (node.identifier === "isZipFile") || (node.children.length === 0 && node.identifier === "isFolder");
                scope.disableMarking = scope.disableMarking || (state.current.name === "project");
                scope.$watch("node." + indeterminateAttribute, function (newVal, oldVal) {
                    element.find("input").prop("indeterminate", newVal);
                });
                function prevCheckedState(bundleId, fileId){
                    var marked = false;
                    if(scope.prevNodesState.hasOwnProperty(bundleId) && scope.prevNodesState[bundleId].hasOwnProperty(fileId)){
                        marked = scope.prevNodesState[bundleId][fileId].marked;
                    }
                    return marked;
                }
                scope.setPrevState = function(){
                    ivhTreeviewBfs(node, function (nodeItem) {
                        if(scope.prevNodesState.hasOwnProperty(nodeItem.bundleId)) {
                            scope.prevNodesState[nodeItem.bundleId][nodeItem.id] = angular.copy(nodeItem);
                        } else {
                            var tempObj = {};
                            tempObj[nodeItem.id] = angular.copy(nodeItem);
                            scope.prevNodesState[nodeItem.bundleId] = tempObj;
                        }
                    });
                }
                scope.setPrevState();
                element.on("click", function (event) {
                    event.stopPropagation();
                    if(element.find("input")[0].disabled) {
                        event.preventDefault();
                    } else {
                        ivhTreeviewMgr.select(ctrl.root(), node, node.marked);
                        scope.$apply();
                    }
                });
                element.on("change", function (event) {
                    event.stopPropagation();
                    if(element.find("input")[0].disabled) {
                        event.preventDefault();
                    } else {
                        var nodesToToggle = {},
                            isChecked = event.target.checked,
                            isUnsupportedNodeMarked = false;
                        if(scope.node.identifier === "isFile") {
                            nodesToToggle[scope.node.bundleId] = [scope.node.id];
                            if(!scope.node.supported) {
                                isUnsupportedNodeMarked = true;
                            }
                        } else if(scope.node.identifier === "isFolder") {
                            ivhTreeviewBfs(scope.node, function (node) {
                                isChecked = prevCheckedState(node.bundleId, node.id);
                                if(node.identifier === "isFile" && node.marked != isChecked) {
                                    if(nodesToToggle[node.bundleId] && nodesToToggle[node.bundleId].length > 0) {
                                        nodesToToggle[node.bundleId].push(node.id);
                                    } else {
                                        nodesToToggle[node.bundleId] = [node.id];
                                    }
                                    if(!scope.node.supported) {
                                        isUnsupportedNodeMarked = true;
                                    }
                                }
                            });
                        }
                        if(isUnsupportedNodeMarked) {
                            //Materialize.toast("Unsupported files will not be marked for parsing", settings.failureToastLife);
                        }
                        if(Object.keys(nodesToToggle).length > 0) {
                            rootScope.$broadcast("node-marked", { nodesToToggle: nodesToToggle, isChecked: isChecked });
                            scope.setPrevState();
                        }

                        // scope.setDefaultSelectedFile = function(){
                        //     if(scope.isProjectView){
                        //         ivhTreeviewBfs(scope.files, function (nodeItem) {
                        //             if(nodeItem.identifier === 'isFile' && nodeItem.marked){
                        //                 if(nodeItem.namespace.length>0){
                        //                     state.params.namespaceId = nodeItem.namespace[0];
                        //                 }
                        //             }
                        //         });
                        //     }
                        // };
                    }
                });
            }
        };
    }]);
