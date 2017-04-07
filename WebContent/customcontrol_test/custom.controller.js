sap.ui.controller("customcontrol_test.custom", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf customcontrol_test.custom
*/
//	onInit: function() {
//
//	},
	onInit: function() {
		alert(123);
		
		
			},
			 openDialog:function() {
				var oDialog1 = new sap.m.Dialog({contentWidth: "500px"});
				oDialog1.setTitle("Dialog with a Responsive Form inside");
				var oTitle = new sap.ui.core.Title({text: "Title"});
				var oText2 = new sap.m.TextArea({id : "newComments",
					rows : 3})
				var data = {
		            records: [
		                { HandlingUnit: "Apple", userId: "1" },
		                { HandlingUnit: "Banana", userId: "2" },
		                { HandlingUnit: "Carrot" , userId: "3"}
		            ]
		        };
		        var commentsList = new sap.m.List({
		        	
		             //   inset : false
		            });
		            var commentsListItems = new sap.m.StandardListItem({id: "cmtList",
		                title : "{HandlingUnit}",
		                description: "Test Value",
		                press:function(oEvent) {
	                        var context = oEvent.oSource.getBindingContext();
	                        var context1 = oEvent.oSource.getBindingContextPath();
	                        var dt =  oEvent.getSource().getModel().getProperty(context1);
	                        var commentText = sap.ui.getCore().byId("newComments");
	                        commentText.setValue(dt.userId);
	                        
	                    },
	                    type:"Navigation"
		            });
		            commentsList.setModel(
		            new sap.ui.model.json.JSONModel(data)
		        );
		            commentsList.bindAggregation(
		            "items",
		            "/records",
		            commentsListItems
		        );
				
				
				
				var addComment = new sap.m.Button({
					text: "Add",
					press: function () {
							var commentText = sap.ui.getCore().byId("newComments");
						//cmtList1.getValue();
					}
				});
				var oButton = new sap.m.Button({
					text: "Close",
					press: function () {
						oDialog1.destroy();
					}
				});
				oDialog1.setBeginButton(oButton);
				oDialog1.setEndButton(addComment);
				oDialog1.addContent(commentsList);
				oDialog1.addContent(oText2);
				oDialog1.open();
			}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf customcontrol_test.custom
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf customcontrol_test.custom
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf customcontrol_test.custom
*/
//	onExit: function() {
//
//	}

});