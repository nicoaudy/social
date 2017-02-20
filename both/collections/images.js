Images = new FS.Collection('images', {
	stores: [new FS.Store.FileSystem('images', {path: '~/fakebook/upload'})]
});

Images.allow({
	insert: function(){
		return true
	},
	update: function(){
		return true
	},
	remove: function(){
		return true
	},
});