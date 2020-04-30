var Compress = {
	
	addBlock: function(id,props,type){
		IDRegistry.genBlockID(id);
		Block.createBlock(id,props,type);
	},
	
	addCraft: function(item,material){
		if(!material.data) material.data = 0;
		if(!material.count) material.count = 9;
		if(!item.count) item.count = 1;
		if(!item.data) item.data = 0;
		Recipes.addShaped({id:item.id,count:item.count,data:item.data},[
    "aaa",
    "aaa",
    "aaa"
],["a",material.id,material.data]);
Recipes.addShapeless({id:material.id,count:material.count,data:material.data},[{id:item.id,data:item.data}]);
	},
	
	Local: {
		RU: function(str,RU){
		Translation.addTranslation(str,{ru:RU});
		}
	}
	
};