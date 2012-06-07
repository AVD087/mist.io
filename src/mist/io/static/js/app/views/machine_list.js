define('app/views/machine_list', ['ember'],
	/**
	 *
	 * Machine List View
	 *
	 * @returns Class
	 */
	function() {
		return Ember.View.extend({
				tagName:false,
				didInsertElement: function(e){
			    	
			    	Em.run.next(function() {
			    		console.log('inserted');
				    	console.log($('#machines-list'));

			    		try {
			    			$('#machines-list').listview('refresh');
			    		} catch(e) {
			    			try {
				    			$('#machines-list').listview();
				    		} catch(e) {
				    			
				    		}	
			    		}
			        });
			    },
	    });
			
	}
);